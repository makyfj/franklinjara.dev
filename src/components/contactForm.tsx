import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

interface Inputs {
  email: string;
  description: string;
}

const ContactForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/contact-form", {
      body: JSON.stringify({
        email: data.email,
        description: data.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result) {
      router.push("/success-email");
    } else {
    }
  };

  return (
    <div className="mx-2 my-2 text-center rounded mx-auto max-w-sm bg-slate-200 dark:bg-slate-800 border-2 border-slate-600 dark:border-slate-300 shadow-md shadow-slate-700 dark:shadow-slate-500">
      <h2 className="text-lg pt-2">Contact Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 grid grid-cols-1 gap-2"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "The email field is required" })}
          className="form-input field-form"
        />
        {errors.email && (
          <span className="error-form">{errors.email.message}</span>
        )}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols={20}
          rows={4}
          {...register("description", {
            required: "The description field is required",
          })}
          className="form-textarea field-form"
        />
        {errors.description && (
          <span className="error-form">{errors.description.message}</span>
        )}

        <div className="flex justify-center mt-1">
          <button type="submit" className="p-1 rounded button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
