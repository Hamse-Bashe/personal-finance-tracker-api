import express from "express";
import { authorize } from "../middlewares/authorize.js";
import { protect } from "../middlewares/auth.js";
import { allUsers } from "../controllers/authController.js";
const router = express.Router();

/**
 * @swagger
 * /admin/overview:
 *   get:
 *     summary: Get all users list
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/overview", protect, authorize("admin"), allUsers);

export default router;
