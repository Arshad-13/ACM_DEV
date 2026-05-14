'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormStep {
  label: string;
  key: string;
  type: string;
  placeholder: string;
  validation?: (val: string) => boolean;
}

const STEPS: FormStep[] = [
  { label: 'FULL_NAME', key: 'name', type: 'text', placeholder: 'Enter your identity...' },
  { 
    label: 'EMAIL_ADDRESS', 
    key: 'email', 
    type: 'email', 
    placeholder: 'Enter contact route...',
    validation: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  },
  { label: 'SUBJECT', key: 'subject', type: 'text', placeholder: 'Communication priority...' },
  { label: 'MESSAGE_CONTENT', key: 'message', type: 'textarea', placeholder: 'Describe your objective...' },
];

export default function TerminalContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<Array<{ label: string; value: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const currentStepData = STEPS[currentStep];

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentStep, isSuccess]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, inputValue, error]);

  const handleNext = () => {
    if (!inputValue.trim()) return;

    if (currentStepData.validation && !currentStepData.validation(inputValue)) {
      setError(`INVALID_FORMAT: Please verify ${currentStepData.label.toLowerCase()}.`);
      return;
    }

    setError(null);
    const newHistory = [...history, { label: currentStepData.label, value: inputValue }];
    setHistory(newHistory);
    setFormData({ ...formData, [currentStepData.key]: inputValue });
    setInputValue('');

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitForm(newHistory);
    }
  };

  const submitForm = (finalHistory: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (currentStepData.type !== 'textarea' || e.ctrlKey) {
        e.preventDefault();
        handleNext();
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-6 py-12">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-20 h-20 rounded-full border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-[0_0_30px_var(--accent)]"
        >
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Transmission Successful</h3>
          <p className="font-mono text-zinc-500 text-sm uppercase tracking-widest">Protocol completed. We will respond shortly.</p>
        </div>
        <button 
          onClick={() => {
            setHistory([]);
            setFormData({});
            setCurrentStep(0);
            setIsSuccess(false);
          }}
          className="font-mono text-xs text-[var(--accent)] border border-[var(--accent)] px-6 py-2 hover:bg-[var(--accent)] hover:text-black transition-all uppercase tracking-widest"
        >
          Reset Terminal
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-black border border-[#1A1A1A] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-[#050505] p-4 border-b border-[#1A1A1A] flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
          CONTACT_TERMINAL // SECURE_LINE
        </div>
        <div className="text-[10px] text-[var(--accent)] animate-pulse">● ACTIVE</div>
      </div>

      {/* Body */}
      <div 
        ref={terminalRef}
        className="flex-1 p-8 overflow-y-auto space-y-6 scrollbar-hide relative"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] mb-8">
          [ACM SVNIT CONTACT PROTOCOL v1.0.2]
          <br />INITIALIZING_COMMUNICATION_LINK...
          <br />READY_FOR_DATA_ENTRY.
        </div>

        {/* History */}
        {history.map((item, i) => (
          <div key={i} className="space-y-2">
            <div className="flex gap-3 text-xs text-zinc-500">
              <span className="opacity-50">PROMPT:</span>
              <span className="text-[var(--accent)]">{item.label}</span>
            </div>
            <div className="text-white pl-4 border-l border-zinc-800 py-1">
              {item.value}
            </div>
          </div>
        ))}

        {/* Current Prompt */}
        {!isSubmitting && (
          <div className="space-y-4">
            <div className="flex gap-3 text-xs">
              <span className="text-zinc-600 uppercase tracking-widest">NEXT_FIELD:</span>
              <span className="text-[var(--accent)] animate-pulse uppercase tracking-widest font-bold">
                {currentStepData.label}
              </span>
            </div>

            <div className="relative pl-4 border-l-2 border-[var(--accent)]">
              {currentStepData.type === 'textarea' ? (
                <textarea
                  ref={inputRef as any}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={currentStepData.placeholder}
                  rows={4}
                  className="w-full bg-transparent border-none outline-none text-white placeholder-zinc-800 resize-none leading-relaxed"
                />
              ) : (
                <div className="flex items-center">
                  <input
                    ref={inputRef as any}
                    type={currentStepData.type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={currentStepData.placeholder}
                    className="w-full bg-transparent border-none outline-none text-white placeholder-zinc-800"
                    autoComplete="off"
                  />
                </div>
              )}
              
              {/* Floating Submit Hint */}
              <div className="absolute -bottom-6 left-0 text-[8px] text-zinc-700 uppercase tracking-widest">
                {currentStepData.type === 'textarea' ? 'CTRL + ENTER TO TRANSMIT' : 'PRESS ENTER TO CONFIRM'}
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-red-500 text-[10px] uppercase tracking-widest mt-4"
          >
            {error}
          </motion.div>
        )}

        {/* Submitting State */}
        {isSubmitting && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-48 h-[1px] bg-[#1A1A1A] relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--accent)] animate-loading-bar" />
            </div>
            <span className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] animate-pulse">
              TRANSMITTING_DATA...
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#050505] p-3 border-t border-[#1A1A1A] flex justify-between text-[8px] text-zinc-700 uppercase tracking-[0.2em]">
        <span>STEP: {currentStep + 1} / {STEPS.length}</span>
        <span>ENCRYPTION: AES_256_ACTIVE</span>
      </div>
    </div>
  );
}
