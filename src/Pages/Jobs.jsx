import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useScrollToTop from "../Shared/useScrollToTop";
import { Link } from "react-router-dom";

const Jobs = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="min-h-screen px-6 py-10 bg-base-100">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-3xl font-bold mb-8 text-center text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    🔍 Explore Job Opportunities
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                className="card bg-base-200 shadow-xl p-5 rounded-2xl hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <img src={job.company_logo} alt={job.company} className="w-16 h-16 rounded-full" />
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-bold">{job.title}</h2>
                                        <p className="text-sm text-gray-600">{job.company}</p>
                                        <p className="text-sm">{job.location} • {job.jobType}</p>
                                        <p className="text-sm text-green-600 font-semibold">
                                            BDT {job.salaryRange.min} - {job.salaryRange.max}
                                        </p>
                                    </div>
                                </div>
                                <Link to={`/job/${job.title.replace(/\s+/g, '-').toLowerCase()}`} className="bg-blue-600 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    Details
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <div>No jobs available...</div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Jobs;
