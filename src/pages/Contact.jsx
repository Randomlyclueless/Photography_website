import BookingForm from "../components/BookingForm";
import PageTransition from "../components/PageTransition";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 pb-12 bg-secondary text-dark text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-primary font-bold">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-primary tracking-wide">
            Contact & Bookings
          </h1>
          <p className="font-sans text-xs text-dark/50 max-w-md mx-auto leading-relaxed tracking-wider font-light font-sans">
            Ready to secure your shoot date or inquire about custom packages? Reach out using the form or details below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-28 bg-secondary text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Details (Left) */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-light text-primary leading-tight font-serif">
                Let's discuss <br />
                your creative vision.
              </h2>
              <p className="font-sans text-sm text-dark/70 leading-relaxed font-light font-sans">
                To guarantee focus and artistic quality, we accept a limited number of commissions each month. Secure your date early, particularly for wedding seasons (November to March).
              </p>
            </div>

            {/* Core details */}
            <div className="space-y-6 font-sans text-xs tracking-wider font-sans">
              <div className="flex items-start space-x-4">
                <FiPhone className="text-accent mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase font-sans">PHONE / WHATSAPP</h4>
                  <p className="text-dark/70 font-light">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMail className="text-accent mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase font-sans">EMAIL DIRECT</h4>
                  <p className="text-dark/70 font-light font-sans">hello@framesbytanay.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMapPin className="text-accent mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase font-sans">STUDIO LOCATION</h4>
                  <p className="text-dark/70 font-light font-sans">Koregaon Park, Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiClock className="text-accent mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase font-sans">BUSINESS HOURS</h4>
                  <p className="text-dark/70 font-light font-sans">Monday &ndash; Saturday: 10:00 AM &ndash; 7:00 PM IST</p>
                  <p className="text-dark/50 text-[10px] font-light mt-1 font-sans">Average Response: Within 1 Hour</p>
                </div>
              </div>
            </div>

            {/* Embedded Map Graphic Placeholder */}
            <div className="border border-primary/10 aspect-[16/9] bg-secondary/50 relative overflow-hidden group flex flex-col justify-center items-center text-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(#5A1E2B_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <FiMapPin size={24} className="text-accent mb-3 animate-bounce" />
              <h4 className="font-serif text-lg text-primary mb-1">Serving Worldwide from Pune</h4>
              <p className="font-sans text-[10px] tracking-widest text-dark/50 uppercase font-sans">
                India &bull; Rajasthan &bull; Goa &bull; Kashmir
              </p>
            </div>
          </div>

          {/* Booking Form (Right) */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
