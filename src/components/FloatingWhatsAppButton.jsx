import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Tanay%2C%20I%20visited%20your%20website%20Frames%20by%20Tanay%20and%20would%20love%20to%20inquire%20about%20your%20photography%20services%21";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-8 z-40 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-dark/95 text-secondary text-[10px] tracking-widest font-sans uppercase py-1.5 px-3 rounded border border-secondary/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Chat with Tanay
      </span>
      <FaWhatsapp size={22} />
    </a>
  );
}
