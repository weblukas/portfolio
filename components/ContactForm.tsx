'use client';

import React from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from '@/api/sendEmail';
import { ContactFormSchema } from "@/lib/zodSchema";
import { toast } from "sonner";

const ContactForm = () => {

     const {
         control,
         handleSubmit,
         reset,
         formState: { errors, isSubmitting, isSubmitSuccessful },
     } = useForm({
         defaultValues: {
             firstName: "",
             email: "",
             message: "",
         },
         resolver: zodResolver(ContactFormSchema),
     });

        const onSubmit: SubmitHandler<IFormInput> = async (data) => {

            const result = await sendEmail(data);

             if (result?.success) {
                 console.log({ data: result.data });
                 toast.success("Email sent!");
                 reset();
                 return;
             }
             console.log(result?.error);
             toast.error("Something went wrong!");
        };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-light-bg sm:rounded-lg flex flex-col items-center'
    >
      <Controller
        name='firstName'
        control={control}
        render={({ field }) => (
          <div className='sm:w-[60%] w-[80%] py-3 '>
            <input
              {...field}
              type='text'
              placeholder='Name'
              className='w-full input input-bordered dark:bg-dark-bg'
              aria-label='name'
            />
            {errors.firstName?.message && (
              <p className='ml-1 mt-1 text-sm text-orange-action'>
                {errors.firstName.message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <div className='sm:w-[60%] w-[80%] py-3 '>
            <input
              {...field}
              type='text'
              placeholder='Your email'
              className='w-full input input-bordered dark:bg-dark-bg'
              aria-label='email'
            />
            {errors.email?.message && (
              <p className='ml-1 mt-1 text-sm text-orange-action'>
                {errors.email.message}
              </p>
            )}
          </div>
        )}
      />
      <Controller
        name='message'
        control={control}
        render={({ field }) => (
          <div className='sm:w-[60%] w-[80%] py-3 '>
            <textarea
              {...field}
              placeholder='Message'
              className='w-full textarea dark:bg-dark-bg textarea-bordered textarea-lg'
              aria-label='message'
            ></textarea>
            {errors.message?.message && (
              <p className='ml-1 text-sm text-orange-action'>
                {errors.message.message}
              </p>
            )}
          </div>
        )}
      />
      <button
        disabled={isSubmitting}
        className='hover:text-white  bg-orange-action rounded-lg mt-8 text-center leading-[50px] inline-block w-[152px] h-[50px]'
        aria-label='submit'
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm