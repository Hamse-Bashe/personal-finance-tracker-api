import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/transactionController.js";
import { protect } from "../middlewares/auth.js";
const router = express.Router();

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions for the logged-in user
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of transactions
 */
router.get("/", protect, getTransactions);
/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - type
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: [housing,food,salary,business,utilities,transportation,healthcare,other]
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction created
 */
router.post("/", protect, createTransaction);
/**
 * @swagger
 * /transaction/{id}:
 *   put:
 *     summary: Update a transaction by ID
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: [housing,food,salary,business,utilities,transportation,healthcare,other]
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transaction updated
 */
router.put("/:id", protect, updateTransaction);
/**
 * @swagger
 * /transaction/{id}:
 *   delete:
 *     summary: Delete a transaction by ID
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction deleted
 */
router.delete("/:id", protect, deleteTransaction);

export default router;
