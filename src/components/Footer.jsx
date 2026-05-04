import { GraduationCap, MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Free Consultation', href: '#lead-form' },
];

const services = [
  { label: 'University Admissions', href: '#services' },
  { label: 'Visa Guidance', href: '#services' },
  { label: 'Career Counseling', href: '#services' },
  { label: 'Test Preparation', href: '#services' },
  { label: 'Scholarship Assistance', href: '#services' },
  { label: 'Pre-Departure Support', href: '#services' },
];

const destinations = [
  { label: 'Study in UK', href: '#destinations' },
  { label: 'Study in Canada', href: '#destinations' },
  { label: 'Study in Australia', href: '#destinations' },
  { label: 'Study in USA', href: '#destinations' },
  { label: 'Study in Germany', href: '#destinations' },
  { label: 'Study in Malaysia', href: '#destinations' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Crystal-Overwing-Enterprises/100069054984311/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: 'hover:bg-blue-600',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923334571822',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16 .667C7.552.667.667 7.552.667 16c0 2.833.74 5.49 2.035 7.797L.667 31.333l7.74-2.01A15.267 15.267 0 0016 31.333C24.448 31.333 31.333 24.448 31.333 16S24.448.667 16 .667zm0 27.946a13.6 13.6 0 01-6.938-1.896l-.497-.294-5.152 1.338 1.375-4.998-.326-.517A13.6 13.6 0 012.388 16C2.388 8.515 8.515 2.388 16 2.388c7.485 0 13.612 6.127 13.612 13.612S23.485 28.613 16 28.613z" />
      </svg>
    ),
    color: 'hover:bg-green-600',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sapphire-900 text-white">
      {/* Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full">
          <path
            d="M0 60L60 51.3C120 43 240 26 360 22.7C480 19 600 29 720 34.3C840 40 960 40 1080 34.3C1200 29 1320 17 1380 11.3L1440 6V0H0Z"
            fill="#f0f4ff"
          />
        </svg>
      </div>

      <div className="container-pad py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-sapphire-500 to-teal-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Crystal Overwing</p>
                <p className="text-gold-400 text-xs">Enterprises</p>
              </div>
            </a>

            <p className="text-white/60 text-sm mb-5">
              Trusted overseas education & recruitment consultancy helping
              students and professionals build their future abroad.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Sui Gas Chowk Link DC Road, Gujranwala</span>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href="tel:0553255303">055-3255303</a>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href="tel:03334571822">0333-4571822</a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>Contact via WhatsApp / Facebook</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-gold-400 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 hover:text-gold-400 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-5">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className={`w-10 h-10 bg-white/10 ${s.color} rounded-xl flex items-center justify-center`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {year} Crystal Overwing Enterprises. All rights reserved.
      </div>
    </footer>
  );
}