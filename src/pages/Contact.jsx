import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiInstagram, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const WHATSAPP_NUMBER = "9356613180";

const WHATSAPP_MESSAGE =
  "Hi Tanay, I'd like to enquire about your photography services. Could you share more details about your availability and pricing?";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export default function Contact() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-secondary text-dark">
        {/* Page introduction */}
        <section className="bg-primary px-5 pb-16 pt-36 text-secondary sm:px-10 sm:pb-20 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-accent"
            >
              Let's talk
            </motion.p>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-6xl leading-[0.85] tracking-[-0.05em] sm:text-8xl lg:col-span-7 lg:text-9xl"
              >
                Let's make
                <br />
                it memorable<span className="text-coral">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="max-w-md text-sm leading-7 text-secondary/70 lg:col-span-4 lg:col-start-9"
              >
                Have an event, a creative idea, a product, or a story you would
                like photographed? Let's start a conversation and bring your
                vision to life.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
            {/* Contact information */}
            <div className="lg:col-span-4">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Get in touch
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Every great photograph begins with a conversation.
              </h2>

              <p className="mt-5 text-sm leading-7 text-dark/65">
                Tell Tanay about your idea, the occasion, or the project you
                have in mind. Whether it's a portrait, wedding, wildlife
                assignment, or commercial shoot, he'd love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:tanaykardile@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-dark/15 text-primary transition-colors group-hover:border-primary">
                    <FiMail size={18} />
                  </span>

                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.16em] text-dark/50">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-sm">
                      tanaykardile@gmail.com
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/random_clicks.dng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-dark/15 text-primary transition-colors group-hover:border-primary">
                    <FiInstagram size={18} />
                  </span>

                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.16em] text-dark/50">
                      Instagram
                    </span>
                    <span className="mt-1 block text-sm">
                      @random_clicks.dng
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-dark/15 text-primary">
                    <FiMapPin size={18} />
                  </span>

                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.16em] text-dark/50">
                      Location
                    </span>
                    <span className="mt-1 block text-sm">
                      Location can be discussed during enquiry
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp booking panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col justify-between overflow-hidden bg-primary p-7 text-secondary sm:p-10 lg:col-span-7 lg:col-start-6 lg:min-h-[430px] lg:p-12"
            >
              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-secondary/10"
              />

              <div className="relative">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  Photography enquiries
                </p>

                <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-6xl">
                  Have a vision?
                  <br />
                  Let's bring it to life.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-secondary/70">
                  Message Tanay directly on WhatsApp to discuss your
                  requirements, preferred dates, pricing, and the kind of
                  photographs you're looking for.
                </p>
              </div>

              <div className="relative mt-12">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-between gap-4 bg-[#25D366] px-5 py-5 text-left text-white transition-colors hover:bg-secondary hover:text-primary sm:px-7"
                >
                  <span className="flex items-center gap-4">
                    <FaWhatsapp size={27} />

                    <span>
                      <span className="block text-[9px] font-medium uppercase tracking-[0.16em] opacity-80">
                        Start a conversation
                      </span>

                      <span className="mt-1 block text-sm font-bold sm:text-base">
                        Chat with Tanay on WhatsApp
                      </span>
                    </span>
                  </span>

                  <FiArrowRight
                    size={21}
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-4 text-[10px] leading-5 text-secondary/50">
                  WhatsApp will open in a new tab or in the app. Review the
                  prefilled message and send it to Tanay.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="border-t border-dark/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Your story, through my lens
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                Let's create something
                <br />
                worth remembering.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
