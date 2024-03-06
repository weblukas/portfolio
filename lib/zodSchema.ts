import { z } from "zod";

export const ContactFormSchema = z.object({
    firstName: z.string().min(1, "Name is required."),
    email: z.string().min(1, "Email is required.").email("Invalid email."),
    message: z
        .string()
        .min(6, { message: "Message must be at least 6 characters." }),
});
