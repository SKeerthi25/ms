import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, service, message } = formData;

        if (!name || !email || !service || !message) {
            setError('Please fill in all fields before submitting.');
            return;
        }

        setError('');

        const subject = encodeURIComponent(`[MS TVK LTD] New Enquiry from ${name} — ${service}`);
        const body = encodeURIComponent(
`Hello MS TVK LTD,

You have received a new enquiry from your website contact form.

---
Name: ${name}
Email: ${email}
Service Required: ${service}
---

Message:
${message}

---
This message was sent via the MS TVK LTD website contact form.`
        );

        window.location.href = `mailto:muraliking1947@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        setSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Get in Touch</p>
                    <h1>Our <span>Studio</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container contact-grid">
                    {/* Left: Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Let's Create <br />Something Exceptional</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Ready to discuss your vision? Whether it's a global campaign or an intimate session, we're here to help.</p>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <MapPin /> Address
                            </h3>
                            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>14 Thanet Place, Croydon,<br />London, CR0 1QP, UK</p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Phone /> Phone
                            </h3>
                            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>+44 7468 612172</p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Mail /> Email
                            </h3>
                            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>muraliking1947@gmail.com</p>
                        </div>

                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '8px', marginTop: '30px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1565431665476!2d-0.0906236235474776!3d51.373440771777595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086c55cc5d5%3A0xe54d39f425867964!2s14%20Thanet%20Pl%2C%20Croydon%20CR0%201QP%2C%20UK!5e0!3m2!1sen!2sus!4v1712463740927!5m2!1sen!2sus"
                                width="100%" height="280" style={{ border: 0, display: 'block' }}
                                allowFullScreen="" loading="lazy" title="MS TVK LTD Location">
                            </iframe>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card" style={{ padding: '60px' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Schedule a Call</h3>

                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ background: 'rgba(0,200,100,0.15)', border: '1px solid #00c864', borderRadius: '8px', padding: '20px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px', color: '#00c864' }}
                            >
                                <CheckCircle size={22} />
                                <span>Your email client has opened! Your message is ready to send to muraliking1947@gmail.com</span>
                            </motion.div>
                        )}

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ background: 'rgba(255,60,60,0.15)', border: '1px solid #ff3c3c', borderRadius: '8px', padding: '15px 20px', marginBottom: '25px', color: '#ff6b6b' }}
                            >
                                {error}
                            </motion.div>
                        )}

                        <form id="contact-form" onSubmit={handleSubmit} noValidate>
                            <div style={{ marginBottom: '20px' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: '100%', height: '55px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '15px', color: '#fff', borderRadius: '4px', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: '100%', height: '55px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '15px', color: '#fff', borderRadius: '4px', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ width: '100%', height: '55px', background: '#191919', border: '1px solid var(--glass-border)', padding: '0 15px', color: formData.service ? '#fff' : 'rgba(255,255,255,0.5)', borderRadius: '4px', boxSizing: 'border-box' }}
                                >
                                    <option value="" style={{ background: '#191919', color: 'rgba(255,255,255,0.5)' }}>Select Service Type</option>
                                    <option value="Event Photography" style={{ background: '#191919', color: '#fff' }}>Event Photography</option>
                                    <option value="Portrait Photography" style={{ background: '#191919', color: '#fff' }}>Portrait Photography</option>
                                    <option value="Commercial Photography" style={{ background: '#191919', color: '#fff' }}>Commercial Photography</option>
                                    <option value="Wildlife Photography" style={{ background: '#191919', color: '#fff' }}>Wildlife Photography</option>
                                    <option value="Wedding Photography" style={{ background: '#191919', color: '#fff' }}>Wedding Photography</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '15px', color: '#fff', borderRadius: '4px', boxSizing: 'border-box', resize: 'vertical' }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}>
                                Initiate Creation
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
