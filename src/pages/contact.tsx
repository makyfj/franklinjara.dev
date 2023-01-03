import Head from "next/head"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { FcSms, FcBusinessman } from "react-icons/fc"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"

import { iconVariants } from "@/utils/animation"

interface Inputs {
  email: string
  message: string
}

const Contact = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/contact-form", {
      body: JSON.stringify({
        email: data.email,
        description: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    await toast
      .promise(res.json(), {
        success: "Success!",
        loading: "Sending...",
        error: (error: Error) => error?.message ?? "Something went wrong...",
      })
      .then(async () => router.push("/success-email"))
      .catch(() => null)
  }

  return (
    <>
      <Head>
        <title>Contact | Franklin Jara</title>
        <meta
          name="description"
          content="
          Franklin Jara is a Full Stack Developer @ Cherry Hill Programs and Student @ Adelphi University pursuing a Master{`'`}s Degree in
          Computer Science with specialization in Software Engineering. 
        "
        />
        <meta name="title" content="Franklin Jara | Contact" />
        <meta
          name="keywords"
          content="Franklin, Jara, Software, Engineering, Full Stack Developer, Contact"
        />
      </Head>
      <div className="mb-8">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">Let{`'`}s chat about it!</h1>
          <span className="text-center">
            <FcSms className="h-6 w-6" />
          </span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center text-lg">Send me an email using the form below </p>
          <span>
            <FcBusinessman className="h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="mx-2 my-2 text-center sm:mx-auto rounded sm:max-w-lg bg-slate-300 dark:bg-slate-700 shadow-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 grid grid-cols-1 gap-2"
        >
          <label htmlFor="email" className="font-bold">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "The email field is required",
            })}
            className="form-input field-form"
          />
          {errors.email && (
            <span className="error-form">{errors.email.message}</span>
          )}

          <label htmlFor="message" className="font-bold">Message</label>
          <textarea
            id="message"
            cols={20}
            rows={4}
            {...register("message", {
              required: "The message field is required",
            })}
            className="form-textarea field-form"
          />
          {errors.message && (
            <span className="error-form">{errors.message.message}</span>
          )}

          <div className="flex justify-center mt-1">
            <motion.button
              variants={iconVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              type="submit"
              className="p-1 rounded button font-bold"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
