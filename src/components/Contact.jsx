import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Sui Gas Chowk Link DC Road, Gujranwala, Punjab, Pakistan',
    color: 'from-sapphire-500 to-sapphire-700',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '055-3255303 / 0333-4571822',
    href: 'tel:0553255303',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'Not Available',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  const LAT = 32.18453246314954;
  const LNG = 74.1885997957574;

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-50 text-cyan-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Find Us
          </span>
          <h2 className="section-heading">Visit Our Office</h2>
          <p className="section-subheading">
            Visit our office in Gujranwala or contact us directly for overseas employment opportunities.
          </p>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          {/* Contact Cards */}
          <div
            className={`space-y-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold text-sapphire-700 font-heading mb-6">
              CRYSTAL OVERWING ENTERPRISES
            </h3>

            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-sapphire-200 hover:shadow-card transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sapphire-700 font-semibold hover:text-cyan-600 transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.value}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Facebook CTA */}
            <a
              href="https://www.facebook.com/people/Crystal-Overwing-Enterprises/100069054984311/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <div>
                <p className="text-sm opacity-90">Visit our Facebook</p>
                <p className="text-base">Crystal Overwing Enterprises</p>
              </div>
            </a>
          </div>

          {/* Google Maps Embed */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-80 lg:h-full min-h-[400px]">
              <iframe
                title="Crystal Overwing Enterprises Location"
                src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Gujranwala, Punjab, Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}