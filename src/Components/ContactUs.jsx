import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactUs = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.sendForm(
            'your_service_id',
            'your_template_id',
            form.current,
            'your_public_key'
        )
            .then(() => {
                setStatus("success");
                form.current.reset();
                setTimeout(() => setStatus(""), 3000);
            })
            .catch((error) => {
                console.error("Email send error:", error);
                setStatus("error");
                setTimeout(() => setStatus(""), 3000);
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-auto my-12"
        >
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
                Contact Us
            </h2>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <label className="flex flex-col">
                    <span className="mb-1 text-sm text-gray-600">Your Name</span>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        required
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="mb-1 text-sm text-gray-600">Your Email</span>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="you@example.com"
                        required
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="mb-1 text-sm text-gray-600">Message</span>
                    <textarea
                        name="message"
                        placeholder="Your message..."
                        required
                        className="p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                </label>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-primary text-white font-semibold py-3 rounded-lg transition-all hover:bg-primary/80"
                >
                    Send Message
                </motion.button>
            </form>

            {status === "sending" && (
                <p className="text-center text-sm text-blue-500 mt-4">Sending...</p>
            )}
            {status === "success" && (
                <p className="text-center text-sm text-green-600 mt-4">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-center text-sm text-red-600 mt-4">❌ Failed to send message. Try again.</p>
            )}
        </motion.section>
    );
};

export default ContactUs;
