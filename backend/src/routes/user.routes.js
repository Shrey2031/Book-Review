import { Router } from "express";
import { getUser, loginUser, makeUserAdmin, registerUser, updateUser } from "../controllers/user.controllers.js";
import { adminOnly, verifyJWT } from "../middleware/auth.middleware.js";
const router =  Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/:id').get(verifyJWT,getUser);
router.route('/:id').put(verifyJWT,updateUser);
router.route("/:id/make-admin").put(verifyJWT,makeUserAdmin)



export default router;
