import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ae6277b0-e50b-4944-9538-2ebcf177309b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
            id="Contact"
        >
            <motion.h1 
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl font-extrabold mb-4 text-center text-gray-800"
            >
                Contact{" "}
                <span className="underline underline-offset-8 decoration-red-500 font-light">
                    With Us
                </span>
            </motion.h1>
            <motion.p
                initial={{ y: -10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center text-gray-500 mb-14 max-w-xl mx-auto text-lg"
            >
                Ready to Make a Move? Let's Build Your Future Together
            </motion.p>

            <motion.form
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto text-gray-600 pt-8 bg-white rounded-lg shadow-lg p-8"
            >
                <div className="flex flex-col md:flex-row gap-6">
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            type="text"
                            name="Name"
                            id="name"
                            placeholder="Your Name"
                            required
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            type="email"
                            name="Email"
                            id="email"
                            placeholder="Your Email"
                            required
                        />
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="my-6"
                >
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        name="Message"
                        id="message"
                        placeholder="Message"
                        required
                    ></textarea>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-8 rounded-lg font-semibold shadow-md w-full md:w-auto"
                    type="submit"
                >
                    {result ? result : "Send Message"}
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Contact;