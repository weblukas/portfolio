import React from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { sendEmail } from '@/api/send';

const ContactForm = () => {

     const { control, handleSubmit, formState: {errors, isSubmitting} } = useForm({
         defaultValues: {
             firstName: "",
             email: "",
             message: "",
             label: "",
             type: "email",
         },
     });

        const onSubmit: SubmitHandler<IFormInput> = async (data) => {
            const result = await sendEmail(data);

             if (result?.success) {
                 console.log({ data: result.data });
                 return;
             }

             // toast error
             console.log(result?.error);
        };

  return (
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-light-bg sm:rounded-lg flex flex-col items-center"
      >
          <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                  <div className="sm:w-[60%] w-[80%] py-3 ">
                      <input
                          {...field}
                          type="text"
                          placeholder="Name"
                          className="w-full input input-bordered dark:bg-dark-bg"
                      />
                  </div>
              )}
          />
          <Controller
              name="email"
              control={control}
              render={({ field }) => (
                  <div className="sm:w-[60%] w-[80%] py-3 ">
                      <input
                          {...field}
                          type="text"
                          placeholder="Your email"
                          className="w-full input input-bordered dark:bg-dark-bg"
                      />
                  </div>
              )}
          />
          <Controller
              name="message"
              control={control}
              render={({ field }) => (
                  <div className="sm:w-[60%] w-[80%] py-3 ">
                      <textarea
                          {...field}
                          placeholder="Message"
                          className="w-full textarea dark:bg-dark-bg textarea-bordered textarea-lg"
                      ></textarea>
                  </div>
              )}
          />

          <input
              type="submit"
              aria-label="submit"
              className="bg-orange-action rounded-lg mt-8 text-center leading-[50px] inline-block w-[152px] h-[50px]"
          />
      </form>
  );
}

export default ContactForm