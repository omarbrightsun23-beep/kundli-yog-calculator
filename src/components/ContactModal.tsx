import React, { useState } from 'react';
import { X, Mail, Send, Check, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Astrological Query / Feedback');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@kundliyogcalculator.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div 
      id="contact-us-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl relative my-8">
        <button
          id="close-contact-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
          <Mail className="w-4 h-4 text-[#FBAF3C]" />
          <span>Support &amp; Inquiries</span>
        </div>

        <h3 className="text-2xl font-bold text-[#003865] font-cinzel mb-2">
          Contact KundliYog
        </h3>
        <p className="text-xs text-[#828892] mb-6 font-normal leading-relaxed">
          Have an ephemeris calculation question, astrological feedback, or scholarly inquiry? Send us a message and our research team will respond within 24 hours.
        </p>

        {isSubmitted ? (
          <div className="p-6 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9] text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F2] text-[#003865] flex items-center justify-center mx-auto border border-[#E2DCB9]">
              <Check className="w-6 h-6 text-[#FBAF3C]" />
            </div>
            <h4 className="text-lg font-bold text-[#003865] font-cinzel">Message Dispatched</h4>
            <p className="text-xs text-[#2C3138] font-normal leading-relaxed">
              Thank you, <strong>{name}</strong>. Your message has been received. A member of our research team will reply to <strong>{email}</strong> shortly.
            </p>
            <button
              id="contact-sent-close-btn"
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-lg bg-[#003865] hover:bg-[#002b4d] text-white text-xs font-bold transition cursor-pointer shadow-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#003865] mb-1">
                Your Full Name *
              </label>
              <input
                id="contact-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Sharma"
                className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-xs text-[#003865] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#003865] mb-1">
                Email Address *
              </label>
              <input
                id="contact-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-xs text-[#003865] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#003865] mb-1">
                Subject
              </label>
              <select
                id="contact-subject-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-xs text-[#003865] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition cursor-pointer shadow-xs"
              >
                <option value="Astrological Query / Feedback">Astrological Query / Feedback</option>
                <option value="Ephemeris / Ayanamsa Question">Ephemeris / Ayanamsa Question</option>
                <option value="Bug Report / Suggestion">Bug Report / Suggestion</option>
                <option value="Partnership / Academic Research">Partnership / Academic Research</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#003865] mb-1">
                Message *
              </label>
              <textarea
                id="contact-message-input"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide details about your query..."
                className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-xs text-[#003865] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] transition resize-none shadow-xs"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full py-3 rounded-xl bg-[#003865] hover:bg-[#002b4d] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Send Inquiries</span>
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-[#E2DCB9] flex items-center justify-between text-xs text-[#828892]">
          <span>Direct Contact: <strong className="text-[#003865]">support@kundliyogcalculator.com</strong></span>
          <button
            id="copy-contact-email-btn"
            onClick={handleCopyEmail}
            className="text-[#003865] hover:underline font-bold cursor-pointer"
          >
            {copiedEmail ? 'Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>
    </div>
  );
};
