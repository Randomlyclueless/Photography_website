import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    eventDate: "",
    location: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, email, eventType, eventDate, location, budget, message } = formData;
    
    const formattedText = `*Booking Inquiry - Frames by Tanay*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Event Type:* ${eventType}%0A` +
      `*Event Date:* ${eventDate || "Not Specified"}%0A` +
      `*Location:* ${location || "Not Specified"}%0A` +
      `*Budget Range:* ${budget || "Not Specified"}%0A` +
      `*Message:* ${message || "None"}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${formattedText}`;
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="glass-card p-6 sm:p-10 md:p-14 max-w-3xl mx-auto shadow-2xl relative border border-primary/5 rounded-none">
      <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
      
      <h3 className="font-serif text-3xl sm:text-4xl font-light text-primary tracking-wide text-center mb-3">
        Begin Your Journey
      </h3>
      <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-dark/40 uppercase text-center mb-12">
        Let's collaborate on capturing your moments
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Kabir Malhotra"
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="e.g. +91 99999 88888"
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. kabir@gmail.com"
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Session Category *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none cursor-pointer"
            >
              <option value="Wedding">Wedding Photography</option>
              <option value="Pre-Wedding">Pre-Wedding Session</option>
              <option value="Portrait">Portrait Session</option>
              <option value="Commercial">Commercial / Product</option>
              <option value="Fashion">Fashion Catalog</option>
              <option value="Drone">Drone Landscape</option>
              <option value="Travel">Travel & Lifestyle</option>
              <option value="Other">Custom Creative Project</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Desired Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Location / City
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Pune, Goa, Jaipur"
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
              Budget Estimate
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. ₹50k - ₹1.5L"
              className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
            Project Details & Artistic Vision
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us about the vibe, aesthetic preferences, wardrobe details, etc..."
            className="bg-transparent border-b border-dark/20 focus:border-primary transition-colors py-2.5 text-sm font-sans tracking-wide focus:outline-none resize-none"
          />
        </div>

        <div className="pt-6 text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-12 py-4 bg-primary text-secondary hover:bg-accent hover:text-dark transition-all duration-300 font-sans text-xs font-bold tracking-[0.3em] uppercase hover:shadow-2xl hover:scale-[1.02]"
          >
            Submit Inquiry via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
