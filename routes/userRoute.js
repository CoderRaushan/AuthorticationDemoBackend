import express from "express";
import {SignUp,Login,LogOut,GetUserData} from "../controllers/userController.js";
import { upload } from "../CloudCongi/CloudConfig.js";
const router=express.Router();
import dotenv from "dotenv"
dotenv.config();
router.post("/register",upload.single("photo"),SignUp);
router.post("/login",Login);
router.post("/logout",LogOut);
router.get("/getdata",GetUserData);
export default router;