import { z } from "zod";

export const createTransactionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  amount: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),
  type: z.string().min(1, "Transaction type is required"),
  category: z
    .enum([
      "housing",
      "food",
      "salary",
      "business",
      "utilities",
      "transportation",
      "healthcare",
      "other",
    ])
    .optional(),
  date: z.string().optional(),
});
