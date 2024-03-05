'use server'

import { Resend } from "resend";
import { SubmitHandler } from "react-hook-form";
const resend = new Resend(process.env.RESEND_KEY);

   export const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data.firstName);
        
    //    await resend.emails.send({
    //        from: "onboarding@resend.dev",
    //        to: "szmydlukasz30@gmail.com",
    //        subject: "Welcome to Resend",
    //        text: "Hello, welcome to Resend!"
    //    });
    };
