import express from "express"
import isAuth from "../middleware/isAuth.js";
import { getcurrentUser } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/currentuser" , isAuth , getcurrentUser);

export default userRouter
