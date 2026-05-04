import { CheckCircle2, Award, Users, Globe2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  'Experienced recruitment specialists with industry expertise',
  'Strong network of international employers',
  'End-to-end support: sourcing to deployment',
  'Skilled and unskilled workforce solutions',
  'High client satisfaction and retention rate',
  'Reliable documentation and processing assistance',
];

const values = [
  {
    icon: Award,
    title: 'Proven Expertise',
    desc: 'Years of experience in overseas recruitment and manpower solutions.',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    desc: 'Thousands of candidates successfully placed across multiple industries.',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    desc: 'Strong connections with employers across the Middle East and beyond.',
    color: 'from-blue-500 to-blue-700',
  },
];

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [imgRef, imgVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-pad bg-gray-50 overflow-hidden">
      <div className="container-pad">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-sapphire-50 text-sapphire-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Who We Are
          </span>
          <h2 className="section-heading">Connecting Talent with Global Opportunities</h2>
          <p className="section-subheading">
            We are a trusted manpower and recruitment agency dedicated to linking skilled professionals 
            with reputable employers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-700 ${
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                alt="Recruitment and workforce"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-sapphire-700 text-xl">10+ Years</p>
                <p className="text-gray-500 text-sm">Industry Experience</p>
              </div>
            </div>

            {/* Top-left badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-sapphire-600 to-cyan-500 text-white rounded-2xl shadow-lg p-4 text-center">
              <div className="text-2xl font-bold font-heading">95%</div>
              <div className="text-xs text-white/80">Success Rate</div>
            </div>
          </div>

          {/* Content Column */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-sapphire-700 font-heading mb-4">
              We Don’t Just Recruit —{' '}
              <span className="text-cyan-500">We Build Careers</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to connect talented individuals with trusted employers across the globe. 
              We focus on understanding both employer requirements and candidate strengths to ensure 
              the perfect match.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From initial screening to final deployment, we provide reliable and transparent services. 
              Our commitment is to deliver quality manpower solutions with professionalism and integrity.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#lead-form" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Values Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((v, i) => (
            <div
              key={i}
              className="card p-6 border border-gray-100 group cursor-default"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${v.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-sapphire-700 text-lg mb-2 font-heading">
                {v.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}