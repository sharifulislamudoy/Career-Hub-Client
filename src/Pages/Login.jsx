import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/job-seeking4.json';
import useScrollToTop from '../Shared/useScrollToTop';


const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
};


const Login = () => {
    useScrollToTop();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(formData);
    };

    return (
        <motion.div
            className="min-h-screen bg-base-100 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <motion.form
                onSubmit={handleSubmit}
                className="bg-base-300 shadow-lg rounded-xl w-full max-w-md p-8 space-y-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex justify-center flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                        <Lottie animationData={loginAnimation} loop />
                    </div>
                    <motion.h2
                        className="text-2xl font-bold text-center text-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome Back to CareerHub
                    </motion.h2>
                </div>

                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>
                </motion.div>

                <motion.button
                    type="submit"
                    className="btn btn-primary w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    whileHover={buttonHover}
                >
                    Log In
                </motion.button>

                <p className="text-sm text-center mt-4">
                    Don't have an account?{' '}
                    <Link to="/sign-up" className="text-primary font-medium">
                        Sign Up
                    </Link>
                </p>
            </motion.form>
        </motion.div>
    );
};

export default Login;
