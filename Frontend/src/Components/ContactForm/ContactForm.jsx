import React, { useState } from "react";




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Error sending message. Please try again.");
      }
    } catch (error) {
      setSuccess("Network error. Please check your connection.");
    }
    
    setLoading(false);
  };

  return (
    
    <div id = "ContactForm" className="max-w-lg mx-auto bg-blue shadow-lg rounded-xl p-6 p-10 md:p-24 ">
      <h2 className="text-2xl md:text-4xl text-white mb-4 font-bold">
        Contact Us
      </h2>
      

      {success && (
        <div className={`text-center mb-4 ${success.includes("Error") ? "text-red-500" : "text-green-500"}`}>
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
