import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container px-5 text-center">
        <h2 className="fw-bold mb-4">Contact Us</h2>
        <p className="lead">
          Have questions? Reach out to us anytime via email or social media.
        </p>
        <a href="mailto:info@example.com" className="btn btn-primary mt-3">
          Email Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
