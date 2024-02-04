import React from 'react';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ContactForm from "@/components/ContactForm.jsx";

const ContactPage = () => {
    return (
        <>
            <Header />
            <main>
                <ContactForm/>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;