import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  description: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/contact-form", {
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        description: data.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="bg-blue-400 sm:mx-auto sm:max-w-lg rounded mx-2 my-2 text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 p-4"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="form-input"
        />
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
