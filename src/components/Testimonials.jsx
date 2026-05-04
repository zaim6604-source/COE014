import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Muhammad Imran',
    country: 'Placed in Saudi Arabia 🇸🇦',
    university: 'Construction Supervisor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'This agency helped me secure a job in Saudi Arabia smoothly. From interview to visa processing, everything was handled professionally. Highly reliable service!',
    rating: 5,
  },
  {
    name: 'Ali Hassan',
    country: 'Working in UAE 🇦🇪',
    university: 'Electrical Technician',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    text: 'I got placed in Dubai within a short time. The staff guided me properly and ensured all documentation was complete. Very satisfied with their support.',
    rating: 5,
  },
  {
    name: 'Zeeshan Khan',
    country: 'Placed in Qatar 🇶🇦',
    university: 'Heavy Equipment Operator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: 'Professional and transparent process. They kept me informed at every step and helped me get a good opportunity abroad. Strongly recommended for overseas jobs.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-pad bg-gradient-to-br from-sapphire-50 via-white to-cyan-50 overflow-hidden">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-50 text-cyan-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Client Feedback
          </span>
          <h2 className="section-heading">What Our Candidates Say</h2>
          <p className="section-subheading">
            Hear from individuals who trusted us to build their careers and secure opportunities abroad.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-7"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-sapphire-100 to-sapphire-200 rounded-xl flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-sapphire-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-sapphire-100"
                />
                <div>
                  <p className="font-bold text-sapphire-700 text-sm font-heading">
                    {t.name}
                  </p>
                  <p className="text-xs text-cyan-600 font-medium">{t.university}</p>
                  <p className="text-xs text-gray-400">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}