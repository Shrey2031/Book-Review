import {User} from "../models/user.models.js";
import{ ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponce.js";
import {asyncHandler} from  "../utils/asyncHandler.js";



const generateAccessAndRefreshToken = async(userId) =>{
    try {
       const user = await User.findById(userId)
       const accessToken = user.generateAccessToken()
       const refreshToken = user.generateRefreshToken()

       user.refreshToken = refreshToken;
      await  user.save({validateBeforeSave: false})

       return {accessToken,refreshToken}

    } catch (error) {
        throw new ApiError(500,'something went wrong while generating refresh and access token')
    }
}
const registerUser = asyncHandler(async (req,resp) => {

   const {name,email,password} = req.body
   
//    console.log(req.file);

   if(
       [name,email,password].some((field) => field?.trim() === "" )

   ){
             throw new ApiError (400,"all fields are mandatory")
   }

   const existedUser = await User.findOne({
     $or: [{ name: name }, { email: email }] 
    })

    if(existedUser){
        throw new  ApiError(409, "user with email and password already exist")
    }

   

     const user = await User.create({
        
        name: name,
        email,
        password,
        
    })

    const createdUser = await  User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "user not found")
    }

    return resp.status(201).json(
        new ApiResponse(200,createdUser,"user register successfully")
    )



})

const loginUser = asyncHandler(async(req,resp) => {
   // req.body -> data
   //username or  email
   // find the user
   // password check
   // access and refresh token
   // send cookie


   const {email,password} = req.body;
   console.log(email);
   if( !email){
    throw new ApiError(400,' email is required')
   }

   const user = await User.findOne({
    $or:[{email}]
   })

   if(!user){
    throw new ApiError(404,'user does not exist')
   }

   const isPasswordValid = await user.isPasswordCorrect(password);
   if(!isPasswordValid){
    throw new ApiError(401,'invalid password')
   }

   const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id);

   const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

   const options = {
    httpOnly: true,
    secure: true

   }

   return resp.status(200)
   .cookie("accessToken",accessToken,options)
   .cookie("refreshToken",refreshToken,options)
   .json(
     new ApiResponse(
        200,
        {
            user:loggedInUser,accessToken,refreshToken
        },
        "user login Successfully"
     )
   )
   
})

const logoutUser = ( async (req,resp) => {
    await  User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken: 1
            }
        },
        {
            new:true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    
       }

   return resp.status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"user logged Out"))

})

// GET user profile
 const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
};

// UPDATE user profile
 const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// PUT /api/users/:id/make-admin
 const makeUserAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.isAdmin = true;
    await user.save();

    res.status(200).json({ message: `${user.name} is now an admin.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export{
  registerUser,
  loginUser,
  logoutUser,
  makeUserAdmin,
  updateUser,
  getUser

}