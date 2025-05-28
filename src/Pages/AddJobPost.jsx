import { useState } from "react";
import { motion } from "framer-motion";

const AddJobPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        jobType: "",
        category: "",
        applicationDeadline: "",
        salaryMin: "",
        salaryMax: "",
        currency: "bdt",
        description: "",
        company: "",
        company_logo: "",
        requirements: "",
        responsibilities: "",
        status: "active"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Job Post Submitted:", formData);
        // Post to backend here
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-auto my-12"
        >
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
                Post a New Job
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input name="jobType" placeholder="Job Type (e.g. Hybrid)" value={formData.jobType} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="date" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                <div className="grid grid-cols-2 gap-4">
                    <input name="salaryMin" placeholder="Minimum Salary" type="number" value={formData.salaryMin} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input name="salaryMax" placeholder="Maximum Salary" type="number" value={formData.salaryMax} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input name="company_logo" placeholder="Company Logo URL" value={formData.company_logo} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                <textarea name="requirements" placeholder="Requirements (comma-separated)" value={formData.requirements} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                <textarea name="responsibilities" placeholder="Responsibilities (comma-separated)" value={formData.responsibilities} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                <select name="status" value={formData.status} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
                >
                    Post Job
                </motion.button>
            </form>
        </motion.section>
    );
};

export default AddJobPost;

// Tailwind utilities for inputs and textareas
// Add this to your global styles or component styles:
// .input { @apply p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500; }
// .textarea { @apply p-3 rounded-lg border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500; }
