/**
 * Contact page — form with validation and a success animation.
 *
 * Features:
 *  - Controlled form with name/email/message fields
 *  - Client-side validation (required fields, email format)
 *  - Framer Motion success state replaces the form after submission
 *  - "Send another message" resets the form
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// ─── Field validation helpers ─────────────────────────────────────────────────

function validateForm({ name, email, message }) {
  const errors = {};
  if (!name.trim())                         errors.name    = 'Name is required.';
  if (!email.trim())                        errors.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                            errors.email   = 'Enter a valid email address.';
  if (!message.trim())                      errors.message = 'Message cannot be empty.';
  else if (message.trim().length < 20)      errors.message = 'Message must be at least 20 characters.';
  return errors;
}

// ─── InputField component ─────────────────────────────────────────────────────

function InputField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Contact info card ────────────────────────────────────────────────────────

function InfoCard({ icon, title, value }) {
  return (
    <div className="glass-card rounded-xl p-4 flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: 'rgba(0,102,255,0.15)' }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{title}</p>
        <p className="text-white text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

// ─── Success animation ────────────────────────────────────────────────────────

function SuccessState({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="text-center py-12 flex flex-col items-center gap-5"
    >
      {/* Animated check circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
        style={{ background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.4)' }}
      >
        ✅
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-white"
      >
        Message Sent!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 text-sm max-w-xs"
      >
        Thanks for reaching out. A member of the ITC team will get back to you shortly.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={onReset}
        className="px-6 py-2.5 rounded-xl text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
        style={{ border: '1px solid rgba(0,102,255,0.3)' }}
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm]         = useState(initialForm);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  // Update a single field and clear its error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate async submission (replace with real API call in production)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50 ${
      errors[field]
        ? 'border-red-500/60'
        : 'border-white/10 focus:border-blue-500/50'
    }`;

  return (
    <PageTransition>
      {/* ── Page header ─────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: 'linear-gradient(180deg, #0D1A3A 0%, #0A0F1E 100%)' }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#0066FF' }}
        >
          Say Hello
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl font-black text-white mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto"
        >
          Have a question, collaboration idea, or just want to learn more? We'd love to hear from you.
        </motion.p>
      </section>

      {/* ── Main content ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out for queries about clubs, events, collaborations, or if you're a
                company interested in sponsoring ITC activities.
              </p>
            </div>

            <div className="space-y-3">
              <InfoCard icon="📍" title="Location" value="Students' Gymkhana, IIT Bombay, Powai, Mumbai" />
              <InfoCard icon="📧" title="Email"    value="itc@gymkhana.iitb.ac.in" />
              <InfoCard icon="🌐" title="Website"  value="itc.gymkhana.iitb.ac.in" />
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Follow ITC</p>
              <div className="flex gap-3">
                {['𝕏', 'in', 'f'].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all text-sm font-bold"
                    onClick={(e) => e.preventDefault()}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessState key="success" onReset={handleReset} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <InputField label="Full Name" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                  </InputField>

                  {/* Email */}
                  <InputField label="Email Address" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="rahul@iitb.ac.in"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                  </InputField>

                  {/* Message */}
                  <InputField label="Message" id="message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="I'd like to know more about..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </InputField>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                    style={{ background: '#0066FF' }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#0052CC'; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#0066FF'; }}
                  >
                    {loading ? (
                      <>
                        {/* Simple CSS spinner */}
                        <span
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
