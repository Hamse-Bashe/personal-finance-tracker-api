import express from "express";
import { upload } from "../middlewares/upload.js";
import { uploadFile } from "../controllers/uploadController.js";
import { protect } from "../middlewares/auth.js";
const router = express.Router();

/**
 * @swagger
 * /upload/profile-picture:
 *   post:
 *     summary: Upload a profile picture
 *     tags: [Upload]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: file URL
 */
router.post("/profile-picture", protect, upload.single("file"), uploadFile);

export default router;
