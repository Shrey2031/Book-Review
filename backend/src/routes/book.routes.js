import { Router } from "express";
import { addBook, getBookById, getBooks } from "../controllers/book.controller.js";
import { adminOnly,verifyJWT } from "../middleware/auth.middleware.js";
const router =  Router();

router.route('/').get(verifyJWT,getBooks);
router.route('/:id').get(verifyJWT,getBookById);
router.route('/').post(verifyJWT,adminOnly,addBook);


export default router;
