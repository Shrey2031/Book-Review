import { Router } from "express";
import { addReview, getReviewsByBook } from "../controllers/review.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router =  Router();

router.route('/').get(verifyJWT,getReviewsByBook);
router.route('/').post(addReview);


export default router;