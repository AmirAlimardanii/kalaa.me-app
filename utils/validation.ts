import { string, z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .default("")
    .optional(),
});

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Category name must be at least 2 characters long" }),
});

export const colorSchema = z.object({
  name: z
    .string()
    .min(2, { message: "color name must be at least 2 characters long" }),
  value: z
    .string()
    .min(1, { message: "color value must be at least 2 characters long" })
    .default("#000000"),
});

export const sizeSchema = z.object({
  name: z
    .string()
    .min(2, { message: "size name must be at least 2 characters long" }),
  value: z
    .string()
    .min(1, { message: "size value must be at least 2 characters long" }),
});
