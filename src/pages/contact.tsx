import Head from "next/head"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { FcSms, FcBusinessman } from "react-icons/fc"

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

    const result = await res.json()

    if (result) {
      router.push("/success-email")
    }
  }

  return (
    <>
      <Head>
        <title>Contact | FJ</title>
      </Head>
      <div className="mb-8">
        <div className="flex justify-center items-center">
          <h1 className="text-lg sm:text-xl">Let{`'`}s chat about it!</h1>
          <span className="text-center">
            <FcSms className="h-6 w-6" />
          </span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center">Send me an email using the form below </p>
          <span>
            <FcBusinessman className="h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="mx-2 my-2 text-center sm:mx-auto rounded sm:max-w-lg bg-slate-200 dark:bg-slate-800 border-2 border-slate-600 dark:border-slate-300 shadow-md shadow-slate-700 dark:shadow-slate-500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 grid grid-cols-1 gap-2"
        >
          <label htmlFor="email">Email</label>
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

          <label htmlFor="message">Message</label>
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
            <button type="submit" className="p-1 rounded button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
