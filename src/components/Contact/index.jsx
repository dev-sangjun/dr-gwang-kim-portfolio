import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="anchor" />
      <div className="card shadow-xl items-center md:items-start p-8 w-full gap-4 md:gap-8 bg-base-100">
        <h3 className="text-xl md:text-2xl font-bold ">Contact Dr. Kim</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
