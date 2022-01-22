import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import Notification from "./notification";

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
      toast.success("Thanks, I'll contact you :)", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      router.push("/success-email");
    } else {
      toast.error("Ops, try again :)", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-blue-400 sm:mx-auto sm:max-w-sm rounded mx-2 my-2 text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 p-4"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="form-input"
        />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols={20}
          rows={4}
          {...register("description")}
          className="form-textarea"
        />

        <div className="flex justify-center">
          <button type="submit" className="p-1 rounded bg-red-400">
            Submit
          </button>
          <Notification />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
