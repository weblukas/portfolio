'use server';

import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/zodSchema";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: IFormInput) {
    const result = ContactFormSchema.safeParse(data);

    if (result.success) {
        const { firstName, email, message } = result.data;
        try {
            const data = await resend.emails.send({
                from: "http://webandwolf.net/",
                to: ["szmydlukasz30@gmail.com"],
                subject: "Contact form submission",
                text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
                react: EmailTemplate({ firstName, email, message }),
            });
            return { success: true, data };
        } catch (error) {
            return { success: false, error };
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}
