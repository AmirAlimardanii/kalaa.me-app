import { string, z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password must be at least 4 characters long"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .default("")
    .optional(),
});

export const categorySchema = z.object({
  name: z.string().min(2, "Category name must be at least 2 characters long"),
});
