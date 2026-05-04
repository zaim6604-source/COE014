import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/sapphire-logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active link on scroll (IntersectionObserver)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-sapphire-600/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-pad flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
           COE
          </div>
          <div className="leading-tight text-left">
            <span
              className={`font-heading font-bold text-sm md:text-base leading-none transition-colors duration-300 ${
                scrolled ? 'text-sapphire-700' : 'text-white'
              }`}
            >
              CRYSTAL OVERWING
            </span>
            <br />
            <span
              className={`font-heading font-semibold text-xs leading-none transition-colors duration-300 ${
                scrolled ? 'text-gold-500' : 'text-gold-300'
              }`}
            >
              ENTERPRISES
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 font-medium text-sm rounded-full transition-all duration-300 group ${
                  scrolled
                    ? activeLink === link.href
                      ? 'text-sapphire-600 bg-sapphire-50'
                      : 'text-gray-600 hover:text-sapphire-700 hover:bg-sapphire-50'
                    : activeLink === link.href
                    ? 'text-gold-300'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500 transition-all duration-300 ${
                    activeLink === link.href ? 'w-4' : 'w-0 group-hover:w-4'
                  }`}
                />
              </button>
            </li>
          ))}

          <li className="ml-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Free Consultation
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled
              ? 'text-sapphire-700 hover:bg-sapphire-50'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200 ${
                    activeLink === link.href
                      ? 'text-sapphire-600 bg-sapphire-50 font-semibold'
                      : 'text-gray-600 hover:text-sapphire-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="mt-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary w-full justify-center text-sm"
              >
                Free Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}