import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import signupAnimation from '../assets/job-seeking3.json'
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { Eye, EyeOff } from 'lucide-react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../Shared/AuthProvider';
import useScrollToTop from '../Shared/useScrollToTop';
import { AuthContext } from '../Shared/AuthContext';


const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
};
const Signup = () => {
    useScrollToTop();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formdata = new FormData(form);
        const userInfo = Object.fromEntries(formdata.entries());
        const email = formdata.get('email');
        const password = formdata.get('password');
        console.log(userInfo)
        createUser(email, password)
            .then((result) => {
                console.log("User created:", result.user);
                form.reset(); // clear form after success
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/jobs');
            })
            .catch((error) => {
                console.error("Google Sign-In Error", error.message);
            });
    };

    return (
        <motion.div
            className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4 my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="bg-base-300 shadow-lg rounded-xl w-full max-w-xl p-8 space-y-6">
                <motion.form
                    onSubmit={handleSignUp}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className='flex justify-center flex-col items-center'>
                        <div className="w-32 h-32  mb-6 ">
                            <Lottie animationData={signupAnimation} loop={true} />
                        </div>
                        <motion.h2
                            className="text-2xl font-bold text-center text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            Create Your CareerHub Account
                        </motion.h2>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="name"
                                required
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                                autoComplete="name"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="input input-bordered w-full"
                                autoComplete="email"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="phone"
                                type="tel"
                                required
                                placeholder="Enter your phone number"
                                className="input input-bordered w-full"
                                autoComplete="tel"
                                pattern="^\+?[0-9]{7,15}$"
                                title="Please enter a valid phone number"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                Current Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="location"
                                required
                                placeholder="e.g., Dhaka, Bangladesh"
                                className="input input-bordered w-full"
                                autoComplete="address-level2"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-1">
                                Account Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="accountType"
                                required
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Account Type</option>
                                <option value="job-seeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                                <option value="recruiters">Recruiters</option>
                            </select>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full"
                        >
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                                LinkedIn Profile <span className="text-gray-400">(optional)</span>
                            </label>
                            <input
                                name="linkedin"
                                type="url"
                                placeholder="https://linkedin.com/in/your-profile"
                                className="input input-bordered w-full"
                                pattern="https://(www\.)?linkedin\.com/in/[A-Za-z0-9_-]+/?"
                                title="Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/your-profile)"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full relative"
                        >
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="Enter a strong password"
                                className="input input-bordered w-full"
                                minLength={6}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <p className="text-xs text-gray-500 mt-1">
                                Must be at least 6 characters.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full relative"
                        >
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="confirmPassword"
                                type={showRePassword ? "text" : "password"}
                                required
                                placeholder="Re-type your password"
                                className="input input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowRePassword(!showRePassword)}
                                className="absolute right-3 top-9 text-gray-500"
                            >
                                {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <p className="text-xs text-gray-500 mt-1">
                                Make sure this matches your password.
                            </p>
                        </motion.div>


                        {/* Resume Upload */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="w-full md:col-span-2"
                        >
                            <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                Resume URL <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="resumeUrl"
                                type="url"
                                placeholder="https://example.com/resume.pdf"
                                required
                                className="input input-bordered w-full"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Please provide a direct link to your resume. Supported formats: PDF, DOC, DOCX. Max size: 2MB.
                            </p>
                        </motion.div>


                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className='space-y-6'>
                            <label htmlFor="role" className="block mb-1 font-medium text-gray-700">
                                Select Your Role <span className="text-red-500">*</span>
                            </label>
                            <motion.select
                                name="role"
                                required
                                className="select select-bordered w-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <option value="">Select Your Role</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                                <option value="Other">Other</option>
                            </motion.select>
                        </div>


                        <div className='space-y-6'>
                            <label htmlFor="jobType" className="block mb-1 font-medium text-gray-700">
                                Preferred Job Type <span className="text-red-500">*</span>
                            </label>
                            <motion.select
                                name="jobType"
                                required
                                className="select select-bordered w-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <option value="">Preferred Job Type</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                            </motion.select>
                        </div>
                    </motion.div>

                    <motion.textarea
                        name="skills"
                        placeholder="List your key skills or technologies (e.g., React, Node.js, Figma)"
                        className="textarea textarea-bordered w-full my-3"
                        rows="3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full md:col-span-2  my-2"
                    >
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                            Photo URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="photoUrl"
                            type="url"
                            placeholder="https://example.com/photo.jpg"
                            required
                            className="input input-bordered w-full"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Please provide a direct link to your photo. Supported formats: JPG, JPEG, PNG, GIF.
                        </p>
                    </motion.div>



                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full"
                        whileHover={buttonHover}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                    >
                        Sign Up
                    </motion.button>
                </motion.form>
                <motion.p
                    className="text-center text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary font-medium hover:underline">Login</Link>
                </motion.p>
                <div className="divider">OR</div>
                <div className="flex flex-col space-y-4 mx-auto mt-10">

                    {/* Google Button */}
                    <motion.button
                        onClick={handleGoogleSignIn}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        whileHover={buttonHover}
                        className="flex items-center justify-center space-x-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={24} />
                        <span className="text-gray-700 font-medium">Continue with Google</span>
                    </motion.button>

                    {/* GitHub Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        whileHover={buttonHover}
                        className="flex items-center justify-center space-x-3 border border-gray-700 rounded-md py-2 hover:bg-gray-900 hover:text-white transition bg-white text-gray-900"
                    >
                        <FaGithub size={24} />
                        <span className="font-medium">Continue with GitHub</span>
                    </motion.button>

                    {/* Facebook Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        whileHover={buttonHover}
                        className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition"
                    >
                        <FaFacebookF size={24} />
                        <span className="font-medium">Continue with Facebook</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;
