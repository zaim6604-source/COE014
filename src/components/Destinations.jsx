import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const destinations = [
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    universities: 'Construction, Oil & Gas, Healthcare',
    image:
      'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80', // Riyadh skyline
    highlight: 'High demand for skilled and technical workforce',
    tag: 'Most Hiring',
    tagColor: 'bg-indigo-500',
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    universities: 'Hospitality, Security, Engineering',
    image:
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80', // Dubai skyline
    highlight: 'Diverse job opportunities across industries',
    tag: 'Trending',
    tagColor: 'bg-cyan-500',
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    universities: 'Infrastructure & Facility Management',
    image:
      'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=800&q=80', // Doha skyline (valid)
    highlight: 'Growing demand in construction and services',
    tag: '',
    tagColor: '',
  },
  {
    country: 'Oman',
    flag: '🇴🇲',
    universities: 'Logistics, Transport, Skilled Trades',
    image:
      'https://images.unsplash.com/photo-1562601579-599dec564e06?auto=format&fit=crop&w=800&q=80', // Muscat
    highlight: 'Stable employment opportunities for workers',
    tag: 'Stable',
    tagColor: 'bg-blue-600',
  },
  {
    country: 'Kuwait',
    flag: '🇰🇼',
    universities: 'Oil & Gas, Maintenance, Services',
    image:
      'https://images.unsplash.com/photo-1609132718484-cc90df3417f8?auto=format&fit=crop&w=800&q=80', // Kuwait City skyline
    highlight: 'Strong demand for technical workforce',
    tag: 'High Demand',
    tagColor: 'bg-green-600',
  },
  {
    country: 'Bahrain',
    flag: '🇧🇭',
    universities: 'Hospitality, Retail, Services',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80', // Manama skyline
    highlight: 'Emerging opportunities in service sector',
    tag: 'Emerging',
    tagColor: 'bg-orange-500',
  },
];
export default function Destinations() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="destinations" className="section-pad bg-gray-50 overflow-hidden">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-sapphire-50 text-sapphire-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Job Destinations
          </span>
          <h2 className="section-heading">Explore Global Employment Opportunities</h2>
          <p className="section-subheading">
            We connect skilled professionals with trusted employers across the most in-demand international job markets.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-card group cursor-pointer transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image with zoom on hover */}
              <div className="overflow-hidden h-52 sm:h-60">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Tag */}
              {dest.tag && (
                <span
                  className={`absolute top-4 left-4 ${dest.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {dest.tag}
                </span>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-900 via-sapphire-800/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{dest.flag}</span>
                  <h3 className="text-white font-bold font-heading text-xl">
                    {dest.country}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-white/70 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{dest.universities}</span>
                </div>
                <p className="text-white/80 text-sm">{dest.highlight}</p>

                {/* Hover CTA */}
                <a
                  href="#lead-form"
                  className="mt-3 inline-flex items-center gap-1 text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:gap-2"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Destinations */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Also providing opportunities in Malaysia, Turkey, Europe & more
          </p>
          <a href="#lead-form" className="btn-primary">
            Explore Opportunities
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}