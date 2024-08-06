import express from 'express';
import { uploadimage,downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router=express.Router();//initialize



router.post('/upload',upload.single('file'),uploadimage)
router.get('/file/:fileId',downloadImage);


export default router;