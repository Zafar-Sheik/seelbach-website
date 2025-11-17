"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Gem, Globe2, Handshake, ShieldCheck, Menu, X } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    {
      name: "Kapstadt Abenteuer",
      description:
        "Erkunden Sie die majestätischen Bergketten mit erfahrenen Guides",
      image: "/images/ct.png",
      price: "€1.299",
    },
    {
      name: "Mosambik Traumreise",
      description:
        "Entdecken Sie die kristallklaren Gewässer des Indischen Ozeans",
      image: "/images/mozam.png",
      price: "€1.499",
    },
    {
      name: "Kulturelles Erbe",
      description:
        "Tauchen Sie ein in die reiche europäische Geschichte und Kultur",
      image: "/images/heri.png",
      price: "€999",
    },
  ];

  const features = [
    {
      icon: <Gem size={32} strokeWidth={1.5} />,
      title: "Premium Erlebnisse",
      description:
        "Kuratierte Reisen mit exklusivem Zugang und Luxus-Ausstattung",
    },
    {
      icon: <Globe2 size={32} strokeWidth={1.5} />,
      title: "Weltweite Ziele",
      description: "Versteckte Juwelen & weltbekannte Wahrzeichen",
    },
    {
      icon: <Handshake size={32} strokeWidth={1.5} />,
      title: "Persönlicher Service",
      description: "Dedizierte Reiseberater für individuelle Planung",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Kompletter Schutz",
      description: "Umfassende Versicherung & 24/7 Support",
    },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* NAVIGATION */}
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg border-b",
          isScrolled
            ? "bg-white/90 shadow-md border-gray-200"
            : "bg-transparent border-transparent"
        )}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F9DD3F] border-2 border-[#DB1C08] flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold">ST</span>
            </div>
            <div>
              <h1
                className={clsx(
                  "font-header text-xl md:text-2xl font-bold whitespace-nowrap",
                  isScrolled ? "text-black" : "text-white"
                )}>
                Seelbach Tours
              </h1>
              <p
                className={clsx(
                  "text-xs",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}>
                Reisen mit Seele
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {["Destinationen", "Über uns", "Leistungen", "Kontakt"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className={clsx(
                    "font-header font-semibold transition",
                    isScrolled
                      ? "text-black hover:text-[#DB1C08]"
                      : "text-white hover:text-[#F9DD3F]"
                  )}>
                  {link}
                </a>
              )
            )}
            <button className="bg-[#DB1C08] text-white px-6 py-3 rounded-lg font-header hover:bg-red-700 transition">
              Jetzt buchen
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2 text-white">
            {mobileNavOpen ? (
              <X
                size={32}
                className={isScrolled ? "text-black" : "text-white"}
              />
            ) : (
              <Menu
                size={32}
                className={isScrolled ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 shadow-lg">
            {["Destinationen", "Über uns", "Leistungen", "Kontakt"].map(
              (link) => (
                <a
                  key={link}
                  onClick={() => setMobileNavOpen(false)}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 font-header text-lg font-bold">
                  {link}
                </a>
              )
            )}

            <button className="w-full bg-[#DB1C08] text-white px-6 py-3 rounded-lg font-header font-semibold">
              Jetzt buchen
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/hero-luxury.jpg"
          alt="Luxus Weltreisen"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <span className="bg-[#DB1C08] px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
            Reisen mit Seele
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-header font-extrabold leading-tight">
            REISEN MIT <span className="text-[#F9DD3F]">SEELE</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Unvergessliche Erlebnisse – maßgeschneidert für Reisende, die tiefer
            fühlen und weiter entdecken möchten.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F9DD3F] text-black px-10 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
              Destinationen entdecken
            </button>

            <button className="border-2 border-white px-10 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Starte Deine Reise
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="leistungen" className="py-16 px-4 bg-white">
        <h2 className="text-center font-header text-3xl md:text-5xl font-bold">
          WARUM SEELBACH WÄHLEN
        </h2>

        <p className="mt-2 text-center text-gray-600 max-w-xl mx-auto">
          Luxus trifft auf Authentizität – Reisen, die tief berühren.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="text-center p-6 transition hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-[#F9DD3F] border-2 border-[#DB1C08] rounded-full flex items-center justify-center text-[#DB1C08]">
                {f.icon}
              </div>

              <h3 className="mt-4 font-header text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinationen" className="py-16 bg-gray-50 px-4">
        <h2 className="text-center font-header text-3xl md:text-5xl font-bold">
          AUSGEWÄHLTE DESTINATIONEN
        </h2>

        <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto">
          Kuratierte Erlebnisse in beeindruckenden Reisezielen.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="font-header text-2xl font-bold">{d.name}</h3>
                <p className="mt-2 text-gray-600">{d.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[#DB1C08] font-header font-bold text-lg">
                    Ab {d.price}
                  </span>

                  <button className="text-[#F9DD3F] hover:text-[#DB1C08] transition">
                    Entdecken →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section id="über-uns" className="py-20 px-4 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-[#F9DD3F] p-3 rounded-2xl shadow-xl">
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Über uns"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#DB1C08] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-header font-bold">15+</div>
              <div className="text-sm font-header">Jahre Erfahrung</div>
            </div>
          </div>

          <div>
            <h2 className="font-header text-3xl md:text-5xl font-bold">
              UNSERE PHILOSOPHIE
            </h2>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Reisen mit{" "}
              <span className="text-[#DB1C08] font-semibold">Seele</span>{" "}
              bedeutet, Orte wirklich zu spüren und Erinnerungen zu schaffen,
              die ein Leben lang bleiben.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Destinationen", value: "50+" },
                { label: "Reisende", value: "10k+" },
                { label: "Zufriedenheit", value: "98%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-5 border-l-4 border-[#DB1C08] rounded-lg shadow-sm">
                  <div className="text-xl font-header font-bold">
                    {item.value}
                  </div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-[#DB1C08] text-white text-center">
        <h2 className="font-header text-3xl md:text-5xl font-bold">
          BEREIT FÜR IHRE REISE?
        </h2>

        <p className="mt-3 text-lg text-gray-200 max-w-lg mx-auto">
          Kontaktieren Sie uns und wir gestalten Ihre perfekte Reise.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#F9DD3F] text-black px-12 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Jetzt starten
          </button>

          <button className="border-2 border-white px-12 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Kontakt aufnehmen
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="bg-black text-white py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F9DD3F] border-2 border-[#DB1C08] rounded-full flex items-center justify-center font-bold text-black">
                ST
              </div>
              <div>
                <h3 className="font-header text-xl font-bold">
                  Seelbach Tours
                </h3>
                <p className="text-[#F9DD3F] text-sm">Reisen mit Seele</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Unvergessliche Reiseerlebnisse seit 2008.
            </p>
          </div>

          <div>
            <h4 className="font-header text-lg text-[#F9DD3F] font-bold mb-4">
              Schnelllinks
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#destinationen" className="hover:text-[#F9DD3F]">
                  Destinationen
                </a>
              </li>
              <li>
                <a href="#über-uns" className="hover:text-[#F9DD3F]">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#F9DD3F]">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F9DD3F]">
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-header text-lg text-[#F9DD3F] font-bold mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+49 123 456 789</li>
              <li>info@seelbachtours.com</li>
              <li>Musterstraße 123, Berlin</li>
            </ul>
          </div>

          <div>
            <h4 className="font-header text-lg text-[#F9DD3F] font-bold mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Abonnieren Sie Inspiration & Angebote.
            </p>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="flex-1 px-4 py-3 rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-[#DB1C08] px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-6">
          © 2024 Seelbach Tours — Travel with Soul
        </div>
      </footer>
    </div>
  );
}
