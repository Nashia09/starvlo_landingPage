"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle, User, Mail, Building, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactFormData, ContactFormErrors, ContactFormStatus } from "@/types/contact";

export default function ModernContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');

      // Reset form after success
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrors({ general: "Failed to send message. Please try again." });
    }
  };

  const inputClasses = (hasError: boolean) => cn(
    "w-full px-4 py-3 pl-12 rounded-lg border transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-[#7CBECE]/20 focus:border-[#7CBECE]",
    "placeholder:text-gray-400",
    hasError
      ? "border-red-300 bg-red-50/50"
      : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
  );

  const iconClasses = (hasError: boolean) => cn(
    "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300",
    hasError ? "text-red-400" : "text-gray-400"
  );

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <User className={iconClasses(!!errors.name)} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses(!!errors.name)}
            placeholder="John Doe"
            required
          />
        </div>
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className={iconClasses(!!errors.email)} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses(!!errors.email)}
            placeholder="john@company.com"
            required
          />
        </div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      {/* Company Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company/Organization
        </label>
        <div className="relative">
          <Building className={iconClasses(false)} />
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses(false)}
            placeholder="Your Company"
          />
        </div>
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className={cn(
            "absolute left-4 top-4 w-5 h-5 transition-colors duration-300",
            errors.message ? "text-red-400" : "text-gray-400"
          )} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={cn(
              "w-full px-4 py-3 pl-12 rounded-lg border transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[#7CBECE]/20 focus:border-[#7CBECE]",
              "placeholder:text-gray-400 resize-none",
              errors.message
                ? "border-red-300 bg-red-50/50"
                : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
            )}
            placeholder="How can we help you? Please provide details about your inquiry..."
            required
          />
        </div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn(
            "w-full bg-[#7CBECE] hover:bg-[#5A9BA5] text-white font-semibold py-4 px-6 rounded-lg",
            "transition-all duration-300 transform hover:-translate-y-0.5",
            "focus:outline-none focus:ring-2 focus:ring-[#7CBECE]/20 focus:ring-offset-2",
            "shadow-lg hover:shadow-xl",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
            "flex items-center justify-center space-x-2",
            "border border-[#5A9BA5]"
          )}
        >
          {status === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="text-white font-semibold">Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Send Message</span>
            </>
          )}
        </button>

        {/* General Error Message */}
        {errors.general && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center justify-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.general}
          </motion.p>
        )}
      </motion.div>
    </form>
  );
}
