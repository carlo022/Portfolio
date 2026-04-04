import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImg from "../assets/ContactImg.png";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Ensure these match your .env file keys
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Failed to send. Please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative flex justify-center items-center">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897]
           via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>
          <img
            src={ContactImg}
            alt="Contact illustration"
            className="w-full max-w-[180px] sm:max-w-[150px] md:max-w-[250px] object-cover rounded-t-lg md:rounded-r-lg relative z-10"
          />
        </aside>

        {/*Contact Form*/}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Me
            </h2>
          </header>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name" // Match your EmailJS template placeholder
                id="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#8e6cf5]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="reply_to" // Match your EmailJS template placeholder
                id="email"
                required
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#8e6cf5]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message" // Match your EmailJS template placeholder
                id="message"
                required
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-[#8e6cf5] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className="text-center text-sm mt-2 text-gray-300 animate-pulse">
                {status}
              </p>
            )}
          </form>
        </section>
      </article>
    </section>
  );
};

export default Contact;
