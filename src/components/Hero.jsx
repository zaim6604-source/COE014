import { ChevronDown, ArrowRight, Star } from 'lucide-react';

const stats = [
  { value: '1000+', label: 'Candidates Deployed' },
  { value: '50+', label: 'Partner Companies' },
  { value: '20+', label: 'Countries Served' },
  { value: '95%', label: 'Client Satisfaction' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-sapphire-900/95 via-sapphire-800/80 to-sapphire-700/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-sapphire-900/80 via-transparent to-transparent" />

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-pad pt-24 pb-16">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-glass text-white rounded-full px-4 py-2 text-sm font-medium mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              ))}
            </div>
            <span>Trusted Overseas Recruitment Agency</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Connecting Skilled{' '}
            <span className="relative">
              <span className="text-gradient">Talent Worldwide</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            We specialize in connecting skilled professionals with trusted employers across the globe. 
            From recruitment to deployment, we ensure a smooth and reliable process every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#lead-form"
              className="btn-primary text-base px-8 py-4 shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="btn-outline text-base px-8 py-4">
              Learn More
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-glass rounded-2xl p-4 text-center hover:bg-white/15 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-heading">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white/90 transition-colors duration-300 group"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}