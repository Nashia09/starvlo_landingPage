'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import AuthIllustration from '@/components/auth/AuthIllustration';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'signup' || hash === 'register') {
      setIsLogin(false);
    } else if (hash === 'login' || hash === 'signin') {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left side - Animated Illustration */}
      <div className="hidden lg:block lg:w-1/2 overflow-hidden">
        <AuthIllustration />
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? (
                <>
                  New here?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>

          <motion.div
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
