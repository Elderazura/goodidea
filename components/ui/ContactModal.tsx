'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContactModal } from '@/context/ContactModalContext'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/dubaiis@goodidea.ae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New enquiry from ${form.name}` }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            style={{
              position: 'fixed', inset: 0, zIndex: 500,
              backgroundColor: 'rgba(13,24,34,0.72)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
            }}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Start a project"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 0, left: 0, right: 0,
              zIndex: 510,
              backgroundColor: '#F8F5F0',
              maxHeight: '92dvh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* ── Header row ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem clamp(1.5rem, 5%, 4rem)',
              borderBottom: '1px solid rgba(17,31,42,0.1)',
              flexShrink: 0,
              position: 'sticky', top: 0,
              backgroundColor: '#F8F5F0',
              zIndex: 1,
            }}>
              <div>
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.65rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#E85D26', margin: '0 0 0.2rem 0',
                }}>
                  Let&apos;s work together
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 900, fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                  color: '#111F2A', margin: 0, lineHeight: 1.05,
                }}>
                  Start a project.
                </h2>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem', color: '#111F2A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* ── Form body ── */}
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5%, 4rem)', flex: 1 }}>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '3rem 0' }}
                >
                  {/* Checkmark */}
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: 'rgba(232,93,38,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                      <path d="M5 14l7 7L23 7" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 900, fontStyle: 'italic',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    color: '#111F2A', margin: '0 0 1rem',
                  }}>
                    Message received.
                  </h3>
                  <p style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '1rem', color: 'rgba(17,31,42,0.55)', lineHeight: 1.75,
                    maxWidth: '40ch', margin: '0 auto',
                  }}>
                    We&apos;ll be in touch within 24 hours. Good things take a moment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}>
                    {/* Name */}
                    <Field label="Your Name *" required>
                      <input
                        name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Sara Al-Mansouri"
                      />
                    </Field>

                    {/* Email */}
                    <Field label="Email Address *" required>
                      <input
                        name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="sara@yourbrand.com"
                      />
                    </Field>

                    {/* Company */}
                    <Field label="Company / Brand">
                      <input
                        name="company" type="text"
                        value={form.company} onChange={handleChange}
                        placeholder="Brand name"
                      />
                    </Field>

                    {/* Service */}
                    <Field label="What do you need?">
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        <option>Brand Identity</option>
                        <option>Brand Strategy</option>
                        <option>Social Media Branding</option>
                        <option>Naming & Verbal Identity</option>
                        <option>Website Design</option>
                        <option>Packaging & Print</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Tell us about your project">
                    <textarea
                      name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="What are you building? What challenge are you trying to solve?"
                    />
                  </Field>

                  {/* Submit */}
                  <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      style={{
                        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                        fontSize: '0.78rem', letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '1rem 2.5rem',
                        backgroundColor: status === 'sending' ? 'rgba(17,31,42,0.4)' : '#111F2A',
                        color: '#F8F5F0',
                        border: 'none', cursor: status === 'sending' ? 'default' : 'pointer',
                        transition: 'background 0.25s ease',
                      }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message →'}
                    </button>
                    {status === 'error' && (
                      <p style={{
                        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                        fontSize: '0.82rem', color: '#E85D26',
                      }}>
                        Something went wrong — please email dubaiis@goodidea.ae directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Global field styles injected once */}
          <style dangerouslySetInnerHTML={{ __html: `
            .gi-field label {
              display: block;
              font-family: 'Gotham Book', 'Helvetica Neue', sans-serif;
              font-size: 0.65rem;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: rgba(17,31,42,0.5);
              margin-bottom: 0.5rem;
            }
            .gi-field input,
            .gi-field select,
            .gi-field textarea {
              width: 100%;
              font-family: 'Gotham Book', 'Helvetica Neue', sans-serif;
              font-size: 0.95rem;
              color: #111F2A;
              background: transparent;
              border: none;
              border-bottom: 1px solid rgba(17,31,42,0.25);
              padding: 0.65rem 0;
              outline: none;
              transition: border-color 0.25s ease;
              box-sizing: border-box;
              appearance: none;
              -webkit-appearance: none;
              resize: none;
            }
            .gi-field input:focus,
            .gi-field select:focus,
            .gi-field textarea:focus {
              border-color: #E85D26;
            }
            .gi-field input::placeholder,
            .gi-field textarea::placeholder {
              color: rgba(17,31,42,0.25);
            }
          ` }} />
        </>
      )}
    </AnimatePresence>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="gi-field" style={{ marginBottom: '0.5rem' }}>
      <label>{label}{required && <span style={{ color: '#E85D26' }}> *</span>}</label>
      {children}
    </div>
  )
}
