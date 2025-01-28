import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string().min(3, "Password is required"),
  language: z
    .string()
    .min(1, "One character is required")
    .max(5, "Language should be max 5 characters"),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
