'use server';
import React from "react";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/zodSchema";
import { z } from "zod";
import ContactFormEmail from "@/email/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: IFormInput) {
    const result = ContactFormSchema.safeParse(data);

    if (result.success) {
        const { firstName, email, message } = result.data;
        try {
            const data = await resend.emails.send({
                from: "webandwolf.net",
                to: "szmydlukasz30@gmail.com",
                subject: "Contact form submission",
                text: `You received the following message from the contact form: ${message}`,
                // react: React.createElement(ContactFormEmail, {
                //     firstName: firstName,
                //     message: message,
                //     email: email,
                // }),
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
