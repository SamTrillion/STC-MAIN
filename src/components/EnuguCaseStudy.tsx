import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Users, 
  Award, 
  BarChart3, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
  onContactClick: () => void;
}

export const EnuguCivilServantCaseStudy: React.FC<CaseStudyProps> = ({ onBack, onContactClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-950 font-sans antialiased">
      {/* Top Header / Breadcrumb Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="cursor-pointer inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-emerald-700 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to Main Page</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Public Sector Case Study
            </span>
            <button
              onClick={onContactClick}
              className="cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Partner With Us</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 px-6 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-6">
            <Building2 size={14} className="text-emerald-700" />
            Government Capacity Building Program
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6">
            Equipping Over <span className="text-emerald-600 font-black">3,000 Civil Servants</span> with Digital Literacy & Analytics in Enugu State
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal mb-10">
            A collaborative public-sector capability program with the <strong className="text-slate-900 font-semibold">Office of Digital Economy</strong> to build workforce readiness, data confidence, and modern digital workflow efficiency across ministries, departments, and agencies.
          </p>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight mb-1">3,000+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Civil Servants Trained</div>
              <div className="text-[11px] text-slate-500 mt-1">Across MDAs & Secretariats</div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight mb-1">100%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Practical & Hands-On</div>
              <div className="text-[11px] text-slate-500 mt-1">Real workplace scenarios</div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-purple-600 tracking-tight mb-1">12+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">MDAs Engaged</div>
              <div className="text-[11px] text-slate-500 mt-1">Cross-functional synergy</div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight mb-1">94%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Adoption Rate</div>
              <div className="text-[11px] text-slate-500 mt-1">Post-training workflows</div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Believing Image Showcase */}
      <section className="px-6 py-6 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600" 
            alt="Civil Servants Digital Training Hall" 
            className="w-full h-80 sm:h-96 md:h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-2xl text-white">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest text-emerald-300 mb-2 inline-block">
                Digital Skills Empowerment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Hands-on Computer Labs & Practical Analytics Workshops</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light">
                Participants engaged in active problem-solving, spreadsheet mastery, digital documentation, and data-backed civil service processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative / Story Body */}
      <section className="py-14 md:py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Left Column: Context & The Story */}
          <div className="md:col-span-8 space-y-10">
            
            {/* The Opportunity */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                The Vision for a Modern Public Workforce
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                As government administration embraces digital governance, public servants require dependable, practical tools to manage records, deliver transparent services, and make evidence-based policy decisions.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                To realize this vision, <strong className="text-slate-900 font-semibold">Sam Trillion Consult</strong> collaborated with key stakeholders, including the <strong className="text-emerald-700 font-semibold">Office of Digital Economy</strong>, to design and execute an intensive, large-scale capacity-building program. The goal was simple: make data and digital tools accessible, friendly, and directly applicable to daily public service duties.
              </p>
            </div>

            {/* What Was Covered */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">What the Curriculum Covered</h3>
                  <p className="text-xs text-slate-500">Designed for both beginners and experienced administrative personnel</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Foundational Digital Literacy",
                    desc: "Secure email practices, document collaboration, digital filing, and cloud storage protocols."
                  },
                  {
                    title: "Spreadsheet & Data Handling",
                    desc: "Organizing records, automated formulas, data cleansing, and error-free reporting."
                  },
                  {
                    title: "Actionable Public Sector Analytics",
                    desc: "Interpreting departmental metrics, budget tracking visualizers, and service delivery dashboards."
                  },
                  {
                    title: "Workflow Security & Cyber Hygiene",
                    desc: "Protecting sensitive public records, recognizing phishing threats, and secure authentication."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1.5">
                      <CheckCircle2 size={16} />
                      <h4>{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Grid Section */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Collaboration and Learning"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-4 bg-white">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Interactive Peer Learning</div>
                  <div className="text-[11px] text-slate-500">Officers collaborating on departmental project templates</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Workshop Presentation"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-4 bg-white">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Practical Executive Demonstrations</div>
                  <div className="text-[11px] text-slate-500">Real-time coaching by experienced industry trainers</div>
                </div>
              </div>
            </div>

            {/* Long Term Impact */}
            <div className="space-y-4 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Sustainable Value Delivered
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Beyond classroom learning, the training empowered participating officers with tangible templates and repeatable digital procedures. This has reduced paper dependencies, accelerated internal correspondence turnarounds, and fostered a culture of objective, data-informed governance.
              </p>
            </div>
          </div>

          {/* Right Column: Key Takeaways & Testimonial Box */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Quick Summary Card */}
            <div className="p-6 rounded-3xl bg-emerald-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} /> Program Summary
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-emerald-400/80 uppercase font-mono block text-[10px]">Location</span>
                    <span className="text-white font-semibold text-sm">Enugu State, Nigeria</span>
                  </div>

                  <div>
                    <span className="text-emerald-400/80 uppercase font-mono block text-[10px]">Partner Body</span>
                    <span className="text-white font-semibold text-sm">Office of Digital Economy</span>
                  </div>

                  <div>
                    <span className="text-emerald-400/80 uppercase font-mono block text-[10px]">Scope of Training</span>
                    <span className="text-white font-semibold text-sm">Analytics, Digital Records & Process Automation</span>
                  </div>

                  <div>
                    <span className="text-emerald-400/80 uppercase font-mono block text-[10px]">Beneficiaries</span>
                    <span className="text-white font-semibold text-sm">Over 3,000 Public Servants</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-800/80">
                  <button
                    onClick={onContactClick}
                    className="cursor-pointer w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-white text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Your Agency</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Methodology Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Our Public Training Methodology</h4>
              
              <ul className="space-y-3">
                {[
                  { title: "No Jargon", desc: "Clear explanations suited to all professional backgrounds." },
                  { title: "Modular Cohorts", desc: "Small interactive groups for dedicated instructor support." },
                  { title: "Pre & Post Assessment", desc: "Measurable evaluation of skill acquisition and retention." },
                  { title: "Post-Training Toolkits", desc: "Reference guides and digital spreadsheets provided to all attendees." }
                ].map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-xs font-bold text-slate-900 block">{m.title}</strong>
                      <span className="text-[11px] text-slate-500">{m.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Contact Box */}
            <div className="p-6 rounded-3xl border border-slate-200 bg-white space-y-3 text-center">
              <GraduationCap size={28} className="text-emerald-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900">Custom Institutional Cohorts</h4>
              <p className="text-xs text-slate-500">
                We craft tailored training programs for federal, state, and development agencies across Africa.
              </p>
              <button
                onClick={onContactClick}
                className="cursor-pointer text-xs font-bold text-emerald-700 hover:text-emerald-900 uppercase tracking-wider inline-flex items-center gap-1 mt-2"
              >
                <span>Request a Training Proposal</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Footer Strip */}
      <section className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Ready to modernize your workforce?
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Bring World-Class Data & Digital Training to Your Institution
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Contact our advisory team to design customized workshops, hands-on masterclasses, or large-scale digital empowerment programs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="cursor-pointer px-8 py-4 rounded-xl bg-emerald-500 hover:bg-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
            >
              Request Institutional Consultation
            </button>
            
            <button
              onClick={onBack}
              className="cursor-pointer px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
