import { useState } from 'react';


export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });
            alert('Message sent!');
        } else {
            console.error(data);
            alert('Failed to send message');
        }
    }

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">CONTACT</h1>

                <div className="contact-page-img-wrapper">
                    <img className="contact-page-img" src="/images/cheap-machines-title.jpg" alt="" />
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <p>* required field</p>
                        <div className="name-row">
                            <div className="field-group">
                                <span>First Name *</span>
                                <input type="text" maxLength={50} required value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    } />
                            </div>

                            <div className="field-group">
                                <span>Last Name</span>
                                <input type="text" maxLength={50} value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    } />
                            </div>
                        </div>
                    </div>

                    <div className="field-group">
                        <span>Email *</span>
                        <input type="email" maxLength={50} required value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            } />
                    </div>

                    <div className="field-group">
                        <span>Subject *</span>
                        <input type="text" maxLength={125} required value={formData.subject}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subject: e.target.value,
                                })
                            } />
                    </div>

                    <div className="field-group">
                        <span>Message *</span>
                        <textarea rows="6" maxLength={500} required value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            } />
                    </div>

                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>

                <div className="section-divider" />
                <p className="shows-text">
                    <i>'Rock and Roll Lives in a Cheap Machine'</i>
                </p>
            </div>
        </div>
    );
}