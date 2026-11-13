import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters"),
});
