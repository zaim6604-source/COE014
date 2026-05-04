import {
  Users,
  FileCheck2,
  Briefcase,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Users,
    title: 'Manpower Recruitment',
    desc: 'We source and recruit skilled and unskilled workforce tailored to your business requirements across multiple industries.',
    features: ['Candidate sourcing', 'Skill-based screening', 'Shortlisting & interviews', 'Bulk hiring solutions'],
    color: 'from-sapphire-500 to-sapphire-700',
    lightColor: 'bg-sapphire-50',
    textColor: 'text-sapphire-600',
  },
  {
    icon: FileCheck2,
    title: 'Documentation & Processing',
    desc: 'We handle complete documentation and processing to ensure a smooth and compliant recruitment journey.',
    features: ['Document verification', 'Visa processing support', 'Medical & clearance', 'Embassy coordination'],
    color: 'from-cyan-400 to-cyan-600',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    icon: Briefcase,
    title: 'Employer Solutions',
    desc: 'We provide tailored staffing solutions for companies looking to hire reliable and qualified personnel.',
    features: ['Custom hiring plans', 'Industry-specific recruitment', 'Contract staffing', 'Long-term workforce solutions'],
    color: 'from-indigo-400 to-indigo-600',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: Globe2,
    title: 'Overseas Employment',
    desc: 'Connecting candidates with international job opportunities through our global employer network.',
    features: ['Gulf & international placements', 'Job matching', 'Deployment assistance', 'Pre-departure guidance'],
    color: 'from-purple-400 to-purple-700',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
];

export default function Services() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-50 text-cyan-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="section-heading">Comprehensive Recruitment Services</h2>
          <p className="section-subheading">
            From sourcing the right talent to successful deployment — we manage the entire recruitment process with efficiency and reliability.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`card border border-gray-100 group cursor-default transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sapphire-700 text-lg mb-3 font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-xs font-medium ${service.textColor}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#lead-form"
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${service.textColor} hover:gap-2 transition-all duration-200`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">
            Looking for the right workforce or job opportunity?
          </p>
          <a href="#lead-form" className="btn-primary">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}