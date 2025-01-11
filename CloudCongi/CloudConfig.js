import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_api_secret_key,
});
const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
    params:
    {
        folder:"AuthorticationDemo",
        allowedFormats: ["jpg", "png","jpeg","pdf","mp4"],
    },
    public_id: (req, file) => {
      return  file.originalname+"-"+Date.now(); 
    }
  });
  export const upload = multer({ storage: storage }); 