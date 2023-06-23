import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-hot-toast";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit(() => {
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      )
      .then(() => {
        toast("Message sent! 👍 \n Dr. Kim will be in touch with you shortly", {
          duration: 5000,
          position: "bottom-right",
          icon: "✅",
          style: {
            padding: 16,
            height: 96,
            gap: 8,
            maxWidth: 400,
          },
        });
        reset();
        setIsLoading(false);
      });
  });
  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <input
        className="input input-bordered input-md"
        name="email"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <span className="text-sm text-error">{errors.email.message}</span>
      )}
      <textarea
        className="textarea textarea-bordered textarea-md"
        name="message"
        placeholder="Message"
        rows="8"
        {...register("message", {
          required: "Message is required.",
        })}
      />
      {errors.message && (
        <span className="text-sm text-error">{errors.message.message}</span>
      )}
      <button
        type="submit"
        className="btn btn-primary btn-md normal-case"
        disabled={!isValid || isLoading}
      >
        {isLoading ? <PulseLoader size={8} color="white" /> : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
