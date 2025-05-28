import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/job-seeking2.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaBriefcase, FaUserTie, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { useEffect } from 'react';
import useScrollToTop from '../Shared/useScrollToTop';

const Home = () => {
    useScrollToTop();
    const featureVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut'
            }
        })
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* HERO SECTION */}

            <motion.div
                className="flex w-11/12 mx-auto flex-col-reverse md:flex-row items-center justify-between max-w-7xl px-4 py-12 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className="md:w-1/2 space-y-6"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl font-bold text-primary">Find Your Dream Job Today</h1>
                    <p className="text-gray-600">
                        Search thousands of jobs from top companies. Connect with employers and build your career with CareerHub.
                    </p>
                    <Link to="/jobs" className="btn btn-primary">
                        Explore Jobs
                    </Link>
                </motion.div>

                <motion.div
                    className="md:w-1/2"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Lottie animationData={heroAnimation} loop={true} />
                </motion.div>
            </motion.div>

            {/* CAROUSEL SECTION */}

            <motion.div
                className="max-w-5xl mx-auto mb-12 px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">🔥 Featured Jobs</h2>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                >
                    <div className="bg-base-200 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-primary">Frontend Developer at TechSoft</h3>
                        <p className="text-sm mt-2">📍 Dhaka, Bangladesh · 🕒 Full-Time</p>
                    </div>
                    <div className="bg-base-200 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-primary">UX Designer at Creativo</h3>
                        <p className="text-sm mt-2">📍 Remote · 🕒 Part-Time</p>
                    </div>
                    <div className="bg-base-200 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-primary">Backend Engineer at NovaTech</h3>
                        <p className="text-sm mt-2">📍 Chattogram · 🕒 Contract</p>
                    </div>
                </Carousel>
            </motion.div>


            {/* WHY US SECTION */}

            <motion.div
                className="bg-base-100 py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto text-center space-y-12 ">
                    <motion.h2
                        className="text-3xl font-bold"
                        initial={{ y: -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Why Choose CareerHub?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            icon: <FaBriefcase className="text-3xl text-primary mb-4 mx-auto" />,
                            title: "Thousands of Jobs",
                            desc: "Updated listings from verified companies across industries."
                        },
                        {
                            icon: <FaUserTie className="text-3xl text-primary mb-4 mx-auto" />,
                            title: "Verified Employers",
                            desc: "Work with trusted recruiters and get fair opportunities."
                        },
                        {
                            icon: <FaGlobe className="text-3xl text-primary mb-4 mx-auto" />,
                            title: "Global Reach",
                            desc: "Apply for jobs worldwide from one simple platform."
                        }].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={featureVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-6 rounded-lg shadow bg-base-200"
                            >
                                {item.icon}
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>


            {/* CATEGORIES SECTION */}

            <motion.div
                className="py-16 px-4 max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-2xl font-bold mb-8 text-center"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Explore Job Categories
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: <FaLaptopCode />, label: "IT & Software" },
                        { icon: <FaUserTie />, label: "Management" },
                        { icon: <FaBriefcase />, label: "Marketing" },
                        { icon: <FaGlobe />, label: "Remote Jobs" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-4 bg-base-200 rounded-lg shadow hover:bg-primary hover:text-white transition-all"
                        >
                            <div className="text-2xl mx-auto mb-2">{item.icon}</div>
                            <p>{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>


            {/* CALL TO ACTION */}
            <motion.div
                className="bg-primary py-12 text-center text-white px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
                <p className="mb-6">Create your free profile and apply for jobs in just a few clicks!</p>
                <Link to="/sign-up" className="btn btn-outline btn-light">
                    Get Started
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Home;
