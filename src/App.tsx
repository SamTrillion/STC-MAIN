import React, { useState, useEffect, useRef } from 'react';
import { EnuguCivilServantCaseStudy } from './components/EnuguCaseStudy';
import { 
  BarChart3, 
  BrainCircuit, 
  ChevronRight, 
  Database, 
  Globe, 
  Layers, 
  LineChart, 
  Menu, 
  PieChart, 
  Send, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  X,
  Zap,
  Activity,
  Target,
  Mail,
  Info,
  CheckCircle2,
  Cpu,
  Boxes,
  Compass,
  Presentation,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

/**
 * ANIMATED BACKGROUND COMPONENT
 */
const DataCosmosBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(width / 10, 100); 
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = '#00f0ff';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (mouse.x > -1000) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseDistance) {
            const force = (mouseDistance - distance) / mouseDistance;
            this.vx -= (dx / distance) * force * 0.6;
            this.vy -= (dy / distance) * force * 0.6;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950" />;
};

/**
 * BEFORE vs. AFTER SAM TRILLION TRANSFORMATION MATRIX & GRAPH SIMULATOR (Hero)
 */
const ValueProjectionDashboard = ({ onSelectBlueprint }: { onSelectBlueprint?: (summary: string) => void }) => {
  const [activeSector, setActiveSector] = useState<'enterprise' | 'healthcare' | 'governance' | 'supply'>('enterprise');
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const sectorTransformations = {
    enterprise: {
      name: 'Corporate & Boardrooms',
      shortName: 'Enterprise',
      strokeColor: '#22d3ee', // Cyan
      accentGrad: 'from-cyan-500 to-blue-600',
      activeBtnStyle: 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.35)]',
      dotColor: 'bg-cyan-400',
      chartTitle: 'Board Decision Velocity & Reporting Horizon',
      before: {
        status: 'Legacy Operational Friction',
        tag: 'Without STC',
        badgeColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
        challenges: [
          'Siloed spreadsheets across departments with conflicting numbers',
          '3-week reporting latency for board and C-suite meetings',
          'Reactive firefighting based on backward-looking data',
        ],
        kpi1: '21 Days',
        kpi1Label: 'Reporting Lag',
        kpi2: 'High (64%)',
        kpi2Label: 'Decision Friction',
        kpi3: 'Unclear',
        kpi3Label: 'Strategy ROI',
        historicalLine: [35, 42, 30, 48, 38, 32, 28, 25], // downward/flat
      },
      after: {
        status: 'Executive Intelligence Architecture',
        tag: 'With Sam Trillion Consult',
        badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800',
        solutions: [
          'Unified real-time C-Suite PowerBI / Tableau dashboard suite',
          'Automated data pipelines delivering live board-ready insights in seconds',
          'Predictive forward-looking forecasting and strategic data loops',
        ],
        kpi1: '< 5 Mins',
        kpi1Label: 'Reporting Lag',
        kpi2: '99.4%',
        kpi2Label: 'Executive Alignment',
        kpi3: '4.8x ROI',
        kpi3Label: 'Measured Yield',
        historicalLine: [40, 45, 52, 60, 68, 76, 84, 92], // upward growth
      },
      summaryAction: 'Request Executive Dashboard Architecture',
    },
    healthcare: {
      name: 'Healthcare & Public Health',
      shortName: 'Healthcare',
      strokeColor: '#34d399', // Emerald
      accentGrad: 'from-emerald-400 to-teal-600',
      activeBtnStyle: 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.35)]',
      dotColor: 'bg-emerald-400',
      chartTitle: 'Outbreak Response & Clinical Resource Allocation',
      before: {
        status: 'Fragmented Clinical Triage',
        tag: 'Without STC',
        badgeColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
        challenges: [
          'Manual disease surveillance reports delayed by days',
          'Uneven medical supply stocking across regional clinics',
          'No early predictive warning for seasonal infectious surges',
        ],
        kpi1: '5-7 Days',
        kpi1Label: 'Surveillance Lag',
        kpi2: 'Critical',
        kpi2Label: 'Stockout Risk',
        kpi3: 'Manual',
        kpi3Label: 'Triage Vector',
        historicalLine: [30, 38, 28, 44, 32, 30, 24, 20],
      },
      after: {
        status: 'Intelligent Epidemiological Surveillance',
        tag: 'With Sam Trillion Consult',
        badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800',
        solutions: [
          'Live GIS mapping & disease outbreak vector modeling',
          'Dynamic multi-clinic supply optimization algorithm',
          'Institutional executive training for healthcare decision-makers',
        ],
        kpi1: 'Real-time',
        kpi1Label: 'Surveillance Lag',
        kpi2: '+86%',
        kpi2Label: 'Resource Efficiency',
        kpi3: '96.2%',
        kpi3Label: 'Containment Accuracy',
        historicalLine: [35, 48, 56, 64, 72, 80, 88, 95],
      },
      summaryAction: 'Request Healthcare Intelligence Framework',
    },
    governance: {
      name: 'Government & Development Agencies',
      shortName: 'Government',
      strokeColor: '#c084fc', // Purple
      accentGrad: 'from-purple-500 to-indigo-600',
      activeBtnStyle: 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.35)]',
      dotColor: 'bg-purple-400',
      chartTitle: 'Public Resource Efficiency & Policy Delivery Index',
      before: {
        status: 'Unmonitored Fund Allocation',
        tag: 'Without STC',
        badgeColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
        challenges: [
          'Delayed monitoring & evaluation of public sector projects',
          'Hidden fiscal leakages in cross-ministerial budget disbursement',
          'Limited donor transparency metrics causing trust deficits',
        ],
        kpi1: 'Unmonitored',
        kpi1Label: 'Budget Leakage',
        kpi2: 'Low',
        kpi2Label: 'Donor Visibility',
        kpi3: 'Months',
        kpi3Label: 'Audit Turnaround',
        historicalLine: [45, 40, 48, 36, 42, 34, 30, 28],
      },
      after: {
        status: 'Transparent Policy Analytics',
        tag: 'With Sam Trillion Consult',
        badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-800',
        solutions: [
          'Automated project tracking dashboards with verifiable audit trails',
          'Predictive economic modeling for high-impact social policy decisions',
          'Rigorous M&E frameworks that build institutional & donor credibility',
        ],
        kpi1: '100%',
        kpi1Label: 'Audit Traceability',
        kpi2: 'Zero-Leak',
        kpi2Label: 'Disbursement Safety',
        kpi3: '4.2x Faster',
        kpi3Label: 'Policy Execution',
        historicalLine: [38, 46, 55, 66, 74, 82, 89, 96],
      },
      summaryAction: 'Request Government & NGO Blueprint',
    },
    supply: {
      name: 'Supply Chain & Logistics',
      shortName: 'Supply Chain',
      strokeColor: '#fb923c', // Orange
      accentGrad: 'from-orange-400 to-amber-600',
      activeBtnStyle: 'bg-orange-500/20 border-orange-400 text-orange-300 shadow-[0_0_15px_rgba(251,146,60,0.35)]',
      dotColor: 'bg-orange-400',
      chartTitle: 'Throughput Velocity & Freight Bottleneck Mitigation',
      before: {
        status: 'Blindspot Disruptions',
        tag: 'Without STC',
        badgeColor: 'text-rose-400 bg-rose-950/60 border-rose-800',
        challenges: [
          'Unplanned port dwell times and delayed cargo customs clearance',
          'Inefficient route dispatching driving up fuel and vehicle wear',
          'Inventory stockouts alternating with expensive warehouse overstock',
        ],
        kpi1: '32%',
        kpi1Label: 'Route Idle Waste',
        kpi2: 'Unpredictable',
        kpi2Label: 'Delivery ETAs',
        kpi3: 'High',
        kpi3Label: 'Inventory Excess',
        historicalLine: [50, 42, 48, 38, 44, 36, 32, 26],
      },
      after: {
        status: 'Autonomous Predictive Routing',
        tag: 'With Sam Trillion Consult',
        badgeColor: 'text-orange-400 bg-orange-950/60 border-orange-800',
        solutions: [
          'Dynamic multi-depot fleet routing with live telemetry sync',
          'Predictive demand replenishment protecting warehouse capital',
          'Clear executive KPIs reducing logistics costs by up to 28%',
        ],
        kpi1: '-28%',
        kpi1Label: 'Freight Overhead',
        kpi2: '98.8%',
        kpi2Label: 'On-Time Accuracy',
        kpi3: '3.9x',
        kpi3Label: 'Asset Turnover',
        historicalLine: [40, 50, 60, 68, 77, 85, 91, 98],
      },
      summaryAction: 'Request Supply Chain Transformation',
    },
  };

  const currentSector = sectorTransformations[activeSector];
  const activeState = currentSector[viewMode];

  // Dynamic Chart Points Generation
  const generateChartPoints = () => {
    const rawHeights = activeState.historicalLine;
    const width = 500;
    const height = 135;
    const step = width / (rawHeights.length - 1);

    const coords = rawHeights.map((val, idx) => {
      const x = idx * step;
      const y = height - (val / 100) * (height - 28) - 14;
      return { x, y };
    });

    const pathD = coords.reduce((acc, pt, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, '');
    const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

    // Confidence envelope / glow band for forecast
    const strokeColor = viewMode === 'after' ? currentSector.strokeColor : '#f43f5e';
    const isUpward = viewMode === 'after';
    const envelopeOffset = isUpward ? 16 : 12;

    const upperD = `M ${coords[4].x} ${coords[4].y} L ${coords[5].x} ${coords[5].y - envelopeOffset} L ${coords[6].x} ${coords[6].y - (envelopeOffset * 1.3)} L ${coords[7].x} ${coords[7].y - (envelopeOffset * 1.6)} L ${coords[7].x} ${coords[7].y + (envelopeOffset * 1.6)} L ${coords[6].x} ${coords[6].y + (envelopeOffset * 1.3)} L ${coords[5].x} ${coords[5].y + envelopeOffset} Z`;

    return { pathD, areaD, upperD, coords, strokeColor };
  };

  const chart = generateChartPoints();

  const handleAction = () => {
    const summary = `Sector: ${currentSector.name} | Transformation Target: Transition from "${currentSector.before.status}" to "${currentSector.after.status}". Requesting discovery call and implementation blueprint with Sam Trillion Consult.`;
    if (onSelectBlueprint) {
      onSelectBlueprint(summary);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative z-10 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-[2.25rem] md:rounded-[2.5rem] p-7 md:p-10 lg:p-12 shadow-2xl overflow-hidden group">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
        <div>
          <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl flex items-center gap-2.5">
            <Activity size={24} className="text-cyan-400 shrink-0" />
            Strategic Transformation & Intelligence Impact Matrix
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-mono mt-1.5">
            Compare Institutional Operations: Before vs. After Sam Trillion Consult
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Live Comparison</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Step 1: Industry Sector Tabs */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold">
              1. Select Institutional Sector
            </label>
            <span className="text-xs sm:text-sm text-slate-300 font-mono font-medium">{currentSector.name}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {(Object.keys(sectorTransformations) as Array<keyof typeof sectorTransformations>).map((key) => {
              const sec = sectorTransformations[key];
              const isSelected = activeSector === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSector(key)}
                  className={`cursor-pointer px-4 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center border flex items-center justify-center gap-2 ${
                    isSelected 
                      ? sec.activeBtnStyle 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? sec.dotColor : 'bg-slate-600'}`}></span>
                  {sec.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Before vs. After State Toggle */}
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <label className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold" style={{ color: currentSector.strokeColor }}>
              2. Toggle Operating State
            </label>
            <span className="text-xs sm:text-sm font-mono text-slate-400">Click to compare trajectory</span>
          </div>
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setViewMode('before')}
              className={`cursor-pointer py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 border ${
                viewMode === 'before'
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-[0_0_18px_rgba(244,63,94,0.35)]'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
              <span>BEFORE STC (Friction)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('after')}
              className={`cursor-pointer py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 border ${
                viewMode === 'after'
                  ? `${currentSector.activeBtnStyle}`
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${currentSector.dotColor} animate-pulse shrink-0`}></span>
              <span>AFTER STC (Intelligence)</span>
            </button>
          </div>
        </div>

        {/* Live SVG Graph Simulation with Dynamic Color Lines */}
        <div className="p-5 sm:p-6 bg-slate-950/90 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chart.strokeColor }}></span>
              <span className="text-xs sm:text-sm font-mono text-white font-bold">{currentSector.chartTitle}</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5" style={{ backgroundColor: chart.strokeColor }}></span> 
                {viewMode === 'after' ? 'Optimized Trajectory' : 'Degrading Baseline'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-purple-400 border-t border-dashed"></span> Projected Horizon
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="w-3 h-2 bg-purple-500/20 border border-purple-400/40 rounded-sm"></span> Confidence Band
              </span>
            </div>
          </div>

          {/* SVG Wave Canvas */}
          <div className="relative w-full h-[140px] sm:h-[160px]">
            <svg viewBox="0 0 500 135" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradientDynamic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chart.strokeColor} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={chart.strokeColor} stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="envelopeGradDynamic" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={chart.strokeColor} stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="35" x2="500" y2="35" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="70" x2="500" y2="70" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="105" x2="500" y2="105" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* T-0 Vertical Separator */}
              <line x1={chart.coords[4].x} y1="0" x2={chart.coords[4].x} y2="135" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

              {/* Area Fill */}
              <path d={chart.areaD} fill="url(#areaGradientDynamic)" className="transition-all duration-500" />

              {/* Confidence Interval Band */}
              <path d={chart.upperD} fill="url(#envelopeGradDynamic)" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="0.5" strokeDasharray="2 2" />

              {/* Main Simulated Line */}
              <path d={chart.pathD} fill="none" stroke={chart.strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />

              {/* Coordinate Nodes */}
              {chart.coords.map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r={i === 4 ? 5 : 3}
                  fill={i >= 4 ? '#c084fc' : chart.strokeColor}
                  className={i === 4 ? 'animate-ping' : ''}
                />
              ))}
            </svg>
          </div>

          {/* Timeline Axis Labels */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-slate-900">
            <span>Month 1 (Audit)</span>
            <span>Month 2</span>
            <span className="text-cyan-400 font-bold">Current Point</span>
            <span className="text-purple-400">Quarter 1 Impact</span>
            <span className="text-purple-400 font-bold">Annual Scale</span>
          </div>
        </div>

        {/* Breakdown of Institutional Reality (Challenges vs Solutions) */}
        <div 
          className="p-6 md:p-8 rounded-2xl border transition-all bg-slate-950/70"
          style={{ 
            borderColor: viewMode === 'after' ? `${currentSector.strokeColor}4D` : 'rgba(244, 63, 94, 0.35)' 
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2.5">
              {viewMode === 'after' ? <CheckCircle2 size={20} style={{ color: currentSector.strokeColor }} /> : <Activity size={20} className="text-rose-400" />}
              {activeState.status}
            </h5>
            <span className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold ${activeState.badgeColor}`}>
              {activeState.tag}
            </span>
          </div>

          <ul className="space-y-3 mb-6">
            {(viewMode === 'after' ? currentSector.after.solutions : currentSector.before.challenges).map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base text-slate-200 flex items-start gap-3 leading-relaxed">
                <span 
                  className="mt-0.5 text-base font-bold"
                  style={{ color: viewMode === 'after' ? currentSector.strokeColor : '#f43f5e' }}
                >
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* 3 Live Metric Chips */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
            <div className="p-3.5 sm:p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase truncate font-medium">{activeState.kpi1Label}</div>
              <div 
                className="text-lg sm:text-2xl font-black mt-1"
                style={{ color: viewMode === 'after' ? currentSector.strokeColor : '#f43f5e' }}
              >
                {activeState.kpi1}
              </div>
            </div>
            <div className="p-3.5 sm:p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase truncate font-medium">{activeState.kpi2Label}</div>
              <div 
                className="text-lg sm:text-2xl font-black mt-1"
                style={{ color: viewMode === 'after' ? '#34d399' : '#f43f5e' }}
              >
                {activeState.kpi2}
              </div>
            </div>
            <div className="p-3.5 sm:p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase truncate font-medium">{activeState.kpi3Label}</div>
              <div 
                className="text-lg sm:text-2xl font-black mt-1"
                style={{ color: viewMode === 'after' ? '#c084fc' : '#f43f5e' }}
              >
                {activeState.kpi3}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          type="button"
          onClick={handleAction}
          className="cursor-pointer w-full py-4.5 sm:py-5 bg-white hover:bg-cyan-400 text-slate-950 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(255,255,255,0.18)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.45)]"
        >
          <span>{currentSector.summaryAction}</span> <Target size={18} />
        </button>
      </div>

      <div 
        className="absolute -bottom-20 -right-20 w-80 h-80 blur-[120px] rounded-full pointer-events-none transition-all duration-500 opacity-25"
        style={{ backgroundColor: currentSector.strokeColor }}
      ></div>
    </div>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle: string }) => (
  <div className="mb-12 md:mb-20">
    <h3 className="text-cyan-400 font-mono tracking-widest text-sm uppercase mb-3">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
      {children} <span className="text-cyan-500">.</span>
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-6"></div>
  </div>
);

const cardThemes = {
  cyan: {
    iconColor: 'text-cyan-400 group-hover:text-white',
    iconBgHover: 'group-hover:bg-cyan-500',
    titleHover: 'group-hover:text-cyan-300',
  },
  'burnt-orange': {
    iconColor: 'text-orange-500 group-hover:text-white',
    iconBgHover: 'group-hover:bg-orange-500',
    titleHover: 'group-hover:text-orange-500',
  },
  emerald: {
    iconColor: 'text-emerald-400 group-hover:text-white',
    iconBgHover: 'group-hover:bg-emerald-500',
    titleHover: 'group-hover:text-emerald-300',
  },
  purple: {
    iconColor: 'text-purple-400 group-hover:text-white',
    iconBgHover: 'group-hover:bg-purple-600',
    titleHover: 'group-hover:text-purple-300',
  },
  rose: {
    iconColor: 'text-rose-400 group-hover:text-white',
    iconBgHover: 'group-hover:bg-rose-500',
    titleHover: 'group-hover:text-rose-300',
  },
  amber: {
    iconColor: 'text-amber-400 group-hover:text-white',
    iconBgHover: 'group-hover:bg-amber-500',
    titleHover: 'group-hover:text-amber-300',
  },
};

const Card = ({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  colorScheme = 'cyan'
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: string;
  colorScheme?: keyof typeof cardThemes;
}) => {
  const theme = cardThemes[colorScheme] || cardThemes.cyan;

  return (
    <div 
      className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 ${theme.iconColor} ${theme.iconBgHover} transition-colors duration-300 shadow-md`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className={`text-xl font-bold text-white mb-4 ${theme.titleHover} transition-colors duration-300`}>{title}</h3>
        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

const Stat = ({ target, suffix = '', prefix = '', label }: { target: number; suffix?: string; prefix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTime = null;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(animationFrameId);
            setCount(0);
            startTime = null;
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <div ref={domRef} className="text-center p-6 border-r border-slate-800 last:border-0">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-cyan-500 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
};

/**
 * FOUNDER SHOWCASE COMPONENT (CRYSTAL CLEAR PORTRAIT WITH SOFT FEATHERED EDGES)
 */
const FounderShowcase = () => {
  return (
    <div className="mb-20">
      <div className="max-w-3xl mx-auto">
        {/* Outer Container Box - Borderless seamless finish */}
        <div className="group relative rounded-[2.5rem] overflow-hidden min-h-[760px] sm:min-h-[860px] md:min-h-[920px] flex flex-col justify-end bg-slate-950/70 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(34,211,238,0.15)]">
          {/* Top Left Founder Badge - Playfair Display Italic with Big Glowing Dot */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs sm:text-sm font-bold tracking-wider animate-pulse backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
              <span className="font-['Playfair_Display',serif] italic font-bold tracking-wide">Founder</span>
            </div>
          </div>

          {/* Ambient Lighting Behind Portrait */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none"></div>

          {/* Picture Box - Fades nicely ONLY at the edges into the outer container */}
          <div 
            className="absolute inset-0 overflow-hidden flex items-start justify-center pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 36%, black 50%, rgba(0,0,0,0.85) 68%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 85% 75% at 50% 36%, black 50%, rgba(0,0,0,0.85) 68%, transparent 100%)',
            }}
          >
            <img 
              src="https://raw.githubusercontent.com/SamTrillion/AIBC/refs/heads/main/public/images/ST1%20MAIN.png" 
              alt="Samuel Ijomanta - Founder & CEO" 
              referrerPolicy="no-referrer"
              className="w-full h-[62%] sm:h-[68%] md:h-[72%] max-w-2xl object-contain object-top pt-4 sm:pt-6 transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.05] brightness-[1.02]"
            />
          </div>

          {/* Smooth Bottom Gradient Mask for Clean Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 via-30% to-transparent to-60% pointer-events-none"></div>

          {/* Bottom Centered Write-up & Actions */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 text-center flex flex-col items-center pt-20 sm:pt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2.5">
              Samuel Ijomanta
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mb-4"></div>

            <p className="text-cyan-400 font-mono text-xs sm:text-sm uppercase font-bold tracking-widest mb-4">
              FOUNDER & CEO, SAM TRILLION CONSULT
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base italic max-w-xl mx-auto font-light leading-relaxed mb-4 px-2">
              Visionary data & AI strategist committed to driving digital transformation, executive capacity building, and enterprise data solutions across Africa and globally.
            </p>

            {/* Shifted Down & Reduced Width Cyan Connect Card */}
            <div className="w-full flex justify-center mt-6 sm:mt-8">
              <a 
                href="https://www.linkedin.com/in/samuel-ijomanta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-[340px] sm:max-w-[360px] p-4 sm:p-4.5 bg-cyan-500 hover:bg-cyan-400 rounded-2xl group/btn cursor-pointer overflow-hidden relative shadow-lg shadow-cyan-500/20 flex items-center justify-between transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-left">
                  <h3 className="text-slate-950 font-black text-sm sm:text-base uppercase leading-tight">Connect</h3>
                  <p className="text-slate-900 text-[11px] sm:text-xs font-medium italic">Join our team on LinkedIn</p>
                </div>
                <div className="bg-slate-950 text-white text-[10px] sm:text-[11px] py-2 px-3 sm:px-3.5 rounded-xl font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover/btn:bg-slate-900 transition-colors shadow-md shrink-0">
                  <span>View LinkedIn</span>
                  <ChevronRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * REDESIGNED FUTURISTIC ABOUT PAGE
 */
const AboutPage = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full -z-10"></div>

      {/* 1. ABOUT TITLE WITH CYAN LINE */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white leading-none mb-4 uppercase tracking-tighter">About</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
      </div>

      {/* 2. VISION SEGMENT */}
      <section className="relative p-1 bg-gradient-to-br from-slate-700/50 to-transparent rounded-[2.5rem] mb-10">
        <div className="bg-slate-950/90 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12 relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
           <div className="relative z-10 max-w-4xl">
             <p className="text-2xl md:text-3xl font-light text-slate-200 leading-snug">
               Sam Trillion Consult (STC) is a <span className="text-white font-bold">leading Data Analytics, Artificial Intelligence, and Consulting firm</span> dedicated to unlocking the strategic power of data for Nigerian, African and Global Organizations all over the world.
             </p>
             <p className="text-lg text-slate-400 mt-6 leading-relaxed">
               We empower leaders and drive digital transformation by converting complex data into clear, actionable intelligence.
             </p>
           </div>
        </div>
      </section>

      {/* 3. CORPORATE PROFILE SECTION (BELOW VISION) */}
      <div className="mb-14 p-8 md:p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Info size={13} /> Corporate Profile
          </div>
          
          <div className="p-6 sm:p-8 bg-slate-950/50 rounded-2xl border border-slate-800/80">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Our Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Data Analytics Consultation',
                'Advanced Analytics Execution',
                'Data-Backed Solutions',
                'AI Automation',
                'Digital Products',
                'Trainings & Conferences'
              ].map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white text-sm font-medium p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-500 font-mono uppercase tracking-wider">
          <span>Global Standard Delivery</span>
          <span className="text-cyan-400 font-bold">Global</span>
        </div>
      </div>

      {/* 4. ELITE FOUNDER SECTION (UNDER CORPORATE PROFILE) */}
      <FounderShowcase />

      {/* 5. CORE FOCUS: THE NEURAL PATH */}
      <div className="space-y-12">
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-slate-800"></div>
            <h2 className="text-xs font-black text-cyan-400 uppercase tracking-[0.4em] text-center">Our Core Focus</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-slate-800"></div>
          </div>

          <div className="grid gap-6">
            {[
              {
                id: "1",
                title: "High-Impact Consulting & Training",
                desc: "We provide strategic consulting and world-class data analytics training to top-tier clients, including government nominees and senior policy-makers. Our mission is to equip the continent's leaders with the literacy and tools necessary to formulate Informed Policy and make data-driven decisions that foster national and organizational development.",
                icon: Users,
                iconBoxStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white",
                titleHover: "group-hover:text-cyan-400"
              },
              {
                id: "2",
                title: "Advanced Analytics Services",
                desc: "We partner with organizations and individuals to establish robust data pipelines, conduct deep-dive analysis, and deliver Actionable Analytics that solve complex business challenges, from optimizing operations to understanding market trends.",
                icon: Activity,
                iconBoxStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
                titleHover: "group-hover:text-emerald-400"
              },
              {
                id: "3",
                title: "AI-Powered Solutions Development",
                desc: "We design, build, and deploy custom Intelligent Solutions using Machine Learning and AI. Our solutions are directly backed by rigorous analytics, ensuring they deliver measurable efficiency, competitive advantage, and AI-Powered Growth for all our clients.",
                icon: Cpu,
                iconBoxStyle: "bg-orange-500/10 border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
                titleHover: "group-hover:text-orange-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative bg-slate-900/40 border border-slate-800/50 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start transition-all duration-300 hover:translate-x-2">
                  <div className={`shrink-0 w-16 h-16 rounded-2xl border flex items-center justify-center relative transition-colors duration-300 shadow-md ${item.iconBoxStyle}`}>
                    <item.icon size={24} />
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-[10px] font-black text-white">
                      {item.id}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-black text-white uppercase tracking-tight mb-4 transition-colors duration-300 ${item.titleHover}`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base group-hover:text-slate-200 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PARTNERSHIP SEGMENT */}
        <section 
          onClick={onContactClick}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-slate-950 border border-slate-800/50 rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.1),transparent)]"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Why Partner With Us?</h2>
                <p className="text-slate-300 leading-relaxed font-light mb-8">
                  Based in Nigeria, we combine deep local insight with global-standard AI and analytics expertise. Our proven track record with high-stakes government and enterprise projects demonstrates our capacity to deliver trust, transformation, and verifiable results across the public and private sectors.
                </p>
                <div className="inline-flex items-center gap-3 text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase italic group-hover:gap-5 transition-all">
                  Let's build the data-driven future, together <ChevronRight size={16} />
                </div>
              </div>
              
              <div className="relative aspect-square md:aspect-auto md:h-64 flex items-center justify-center">
                 {/* Abstract Data Visual */}
                 <div className="absolute w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                 <div className="relative w-full h-full border border-slate-800 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
                   <Globe size={80} className="text-slate-800" />
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-white tracking-tighter">NIGERIA</div>
                      <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Global Standards</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

/**
 * LEGAL MODAL (PRIVACY POLICY & TERMS OF SERVICE) - CRISP WHITE AESTHETIC WITH SHIELDING LEGAL PROTECTION
 */
const LegalPage = ({ 
  type, 
  onReturn 
}: { 
  type: 'privacy' | 'terms'; 
  onReturn: () => void; 
}) => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-white text-slate-900 animate-in fade-in duration-500 relative z-20">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col">
        {/* Page Top Header Bar */}
        <div className="py-6 border-b border-slate-200 flex items-center justify-between shrink-0 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                Sam Trillion Consult • Legal & Compliance
              </div>
              <h3 className="text-xl sm:text-2xl font-['Playfair_Display',serif] font-bold text-slate-950">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body with Crisp Light Theme & Strong Shielding Clauses */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
          
          {type === 'privacy' ? (
            <>
              {/* PRIVACY POLICY CONTENT */}
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-950 text-xs sm:text-sm flex items-start gap-3">
                <Info size={18} className="text-cyan-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Executive Commitment:</span> Sam Trillion Consult (STC) respects your corporate data privacy and adheres to standard non-disclosure and ethical data protection standards across all organizational touchpoints.
                </div>
              </div>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  1. Information We Collect
                </h4>
                <p>
                  We only collect personal and institutional information that you voluntarily submit through our web contact forms, booking scheduler, or email communication. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                  <li>Full name, institutional email address, phone number, and organization name.</li>
                  <li>Project scope outlines, strategic requirements, and consulting preferences.</li>
                  <li>Standard anonymous website analytics (browser type, session duration) used solely to optimize website usability.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  2. How We Use Your Information
                </h4>
                <p>
                  Your information is exclusively utilized to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                  <li>Respond directly to your inquiries and strategic consultation requests.</li>
                  <li>Prepare formal tailored proposals, master service agreements, or training curricula.</li>
                  <li>Communicate scheduling confirmations and project milestones.</li>
                </ul>
                <p className="font-semibold text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-200">
                  🛡️ Zero Third-Party Sale Guarantee: Sam Trillion Consult will never sell, rent, lease, or monetize your contact or business information to any third parties or advertisers.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  3. Enterprise Data Confidentiality & Non-Disclosure
                </h4>
                <p>
                  In formal advisory, executive training, or analytics engagements, all organizational datasets, internal KPIs, and operational records provided to STC are strictly governed by formal <strong>Non-Disclosure Agreements (NDAs)</strong>. We implement industry-standard encryption, strict access governance, and secure data sanitization practices.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  4. Data Rights & Contact Information
                </h4>
                <p>
                  You retain full rights to request verification, amendment, or complete removal of your contact details from our records at any time. For privacy-related inquiries, contact our management team directly at <a href="mailto:info@samtrillionconsult.com" className="text-cyan-700 font-bold underline">info@samtrillionconsult.com</a>.
                </p>
              </section>
            </>
          ) : (
            <>
              {/* TERMS OF SERVICE CONTENT - BULLETPROOF SHIELDING */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
                <ShieldCheck size={18} className="text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Legal Disclaimer:</span> By accessing or interacting with this website, you acknowledge and agree to the protective operational terms outlined below.
                </div>
              </div>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  1. Nature of Website & Informational Purpose
                </h4>
                <p>
                  The content, value projection models, interactive simulations, and case summaries on this website are provided for illustrative, educational, and preliminary informational purposes only. They do not constitute a formal binding contract, guaranteed financial outcome, or legal guarantee of specific commercial revenue.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  2. Formal Engagement via Master Service Agreements
                </h4>
                <p>
                  Any professional services, including Data Strategy Consulting, AI System Development, Analytics Execution, or Executive Trainings, are strictly governed by separately negotiated and signed <strong>Master Service Agreements (MSAs)</strong> or Statements of Work (SOWs). Nothing on this website shall supersede the terms of an executed bilateral client agreement.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  3. Intellectual Property Rights
                </h4>
                <p>
                  All trademarks, branding materials, custom methodologies, framework architectures, website graphics, code bases, and written publications are the exclusive intellectual property of <strong>Sam Trillion Consult (STC)</strong>. Unauthorized reproduction, modification, scraping, or commercial exploitation is strictly prohibited without prior written authorization.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  4. Limitation of Liability
                </h4>
                <p className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800">
                  To the maximum extent permitted by applicable law, Sam Trillion Consult, its founder, consultants, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, or reliance on any general information or simulations contained herein.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  5. Governing Law & Jurisdiction
                </h4>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and applicable international commercial arbitration frameworks.
                </p>
              </section>
            </>
          )}

          <div className="pt-4 mt-12 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500">
            <span>Effective Date: August 2026</span>
            <span>Sam Trillion Consult Management</span>
          </div>
        </div>

        {/* Bottom Confirmation Button */}
        <div className="pt-8 flex items-center justify-end shrink-0 mt-8">
          <button
            type="button"
            onClick={onReturn}
            className="cursor-pointer px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const AnimatedHeroHeading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const fullText = "Real Decisions\nBacked by\n";
  const tokens = [
    { type: 'word', text: 'Real' },
    { type: 'space', text: ' ' },
    { type: 'word', text: 'Decisions' },
    { type: 'break', text: '\n' },
    { type: 'word', text: 'Backed' },
    { type: 'space', text: ' ' },
    { type: 'word', text: 'by' },
    { type: 'break', text: '\n' }
  ];

  const parsedTokens = [];
  let runningIdx = 0;
  for (const t of tokens) {
    parsedTokens.push({ ...t, startIndex: runningIdx });
    runningIdx += t.text.length;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setTypedCount(0);
          setShowSub(false);
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const typeText = async () => {
      if (isVisible) {
        setTypedCount(0);
        setShowSub(false);

        for (let i = 0; i <= fullText.length; i++) {
          if (isCancelled) return;
          
          setTypedCount(i);
          
          if (i < fullText.length) {
            // Human typing speed: Base 60ms + random up to 80ms (60-140ms per keystroke)
            let delay = 60 + Math.random() * 80;
            
            // Pause slightly longer on spaces and line breaks to simulate natural typing
            if (fullText[i] === ' ') delay += 60;
            if (fullText[i] === '\n') delay += 300;

            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }
        
        if (!isCancelled) {
          setTimeout(() => setShowSub(true), 200);
        }
      }
    };

    typeText();

    return () => {
      isCancelled = true;
    };
  }, [isVisible]);

  return (
    <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter min-h-[140px] sm:min-h-[160px] md:min-h-[220px] lg:min-h-[280px]">
      {parsedTokens.map((token, tIdx) => {
        if (token.type === 'break') {
          const isCursorHere = token.startIndex === typedCount;
          return (
            <React.Fragment key={tIdx}>
              {isCursorHere && !showSub && typedCount < 24 && (
                <span className="inline-block w-0 overflow-visible text-white animate-pulse font-light">|</span>
              )}
              <br />
            </React.Fragment>
          );
        }
        
        if (token.type === 'space') {
          const isCursorHere = token.startIndex === typedCount;
          const isVisibleChar = token.startIndex < typedCount;
          return (
            <React.Fragment key={tIdx}>
              {isCursorHere && !showSub && typedCount < 24 && (
                <span className="inline-block w-0 overflow-visible text-white animate-pulse font-light">|</span>
              )}
              <span className={isVisibleChar ? "opacity-100" : "opacity-0"}>&nbsp;</span>
            </React.Fragment>
          );
        }
        
        return (
          <span key={tIdx} className="inline-block whitespace-nowrap">
            {token.text.split('').map((char, cIdx) => {
              const charGlobalIdx = token.startIndex + cIdx;
              const isCursorHere = charGlobalIdx === typedCount;
              const isVisibleChar = charGlobalIdx < typedCount;
              return (
                <React.Fragment key={cIdx}>
                  {isCursorHere && !showSub && typedCount < 24 && (
                    <span className="inline-block w-0 overflow-visible text-white animate-pulse font-light">|</span>
                  )}
                  <span className={isVisibleChar ? "opacity-100" : "opacity-0"}>{char}</span>
                </React.Fragment>
              );
            })}
          </span>
        );
      })}
      
      {typedCount === fullText.length && !showSub && typedCount < 24 && (
        <span className="inline-block w-0 overflow-visible text-white animate-pulse font-light">|</span>
      )}
      
      <span className={`inline-block transition-all duration-1000 ease-out origin-center ${showSub ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.3] blur-sm absolute'} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic`}>
        Data and Research
      </span>
    </h1>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'privacy' | 'terms'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('executives');
  const [formStatus, setFormStatus] = useState('idle');
  const [activeSection, setActiveSection] = useState('hero');
  const [contactForm, setContactForm] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (currentPage !== 'home') return;
    const handleScroll = () => {
      const sections = ['hero', 'services', 'training', 'projects', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.organization.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      return;
    }

    setFormStatus('sending');

    const subject = `${contactForm.organization.trim()} | ${contactForm.name.trim()}`;
    const recipient = 'info@samtrillionconsult.com';
    const body = `Sender Name: ${contactForm.name.trim()}
Organization: ${contactForm.organization.trim()}
Sender Email: ${contactForm.email.trim()}

Message:
${contactForm.message.trim()}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger user's mail client to send to info@samtrillionconsult.com
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <DataCosmosBackground />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <img src="/stc-logo-main.png" alt="Sam Trillion Logo" className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            <span className="text-lg md:text-2xl font-bold tracking-tight text-white uppercase tracking-tighter">SAM TRILLION <span className="text-cyan-400 font-light italic">CONSULT</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('about')} className={`cursor-pointer text-sm font-bold transition-colors uppercase tracking-widest ${currentPage === 'about' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-300 hover:text-cyan-400'}`}>About</button>
            {['Services', 'Training', 'Projects'].map((item) => {
              const id = item.toLowerCase();
              const isActive = currentPage === 'home' && activeSection === id;
              return (
                <button key={item} onClick={() => scrollTo(id)} className={`cursor-pointer text-sm font-bold transition-colors uppercase tracking-widest ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-300 hover:text-cyan-400'}`}>{item}</button>
              );
            })}
            <button 
              onClick={() => scrollTo('contact')} 
              className={`cursor-pointer group relative px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-white text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 ease-out flex items-center gap-2 shadow-[0_2px_10px_rgba(6,182,212,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${currentPage === 'home' && activeSection === 'contact' ? 'ring-2 ring-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : ''}`}
            >
              <span>Get Started</span>
              <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1 stroke-[2.5]" />
            </button>
          </div>

          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
             <button onClick={() => { navigateTo('about'); setIsMenuOpen(false); }} className={`cursor-pointer text-left text-sm font-bold transition-colors uppercase tracking-widest ${currentPage === 'about' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>About</button>
             {['Services', 'Training', 'Projects'].map((item) => {
              const id = item.toLowerCase();
              const isActive = currentPage === 'home' && activeSection === id;
              return (
                <button key={item} onClick={() => { scrollTo(id); setIsMenuOpen(false); }} className={`cursor-pointer text-left text-sm font-bold transition-colors uppercase tracking-widest ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>{item}</button>
              );
            })}
            <button 
              onClick={() => { scrollTo('contact'); setIsMenuOpen(false); }}
              className="cursor-pointer group w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-white text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(6,182,212,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.35)] active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1 stroke-[2.5]" />
            </button>
          </div>
        )}
      </nav>

      {currentPage === 'home' ? (
        <>
          {/* HERO SECTION */}
          <section id="hero" className="relative pt-28 pb-20 md:pt-44 md:pb-32 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
              <div className="space-y-6 md:space-y-8 z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
                  <Activity size={20} className="text-cyan-400" /> Data is the New Currency
                </div>
                <AnimatedHeroHeading />
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  We translate complex datasets into clear, actionable strategies. From government contracts to executive boardrooms, we empower leaders to see the future before it happens.
                </p>
                <div className="flex justify-center pt-2">
                  <button onClick={() => scrollTo('projects')} className="cursor-pointer px-8 py-4 md:px-10 md:py-5 bg-cyan-500 hover:bg-white text-slate-950 font-black uppercase tracking-widest text-xs rounded-lg transition-all duration-300 flex items-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:scale-95">
                    View Impact <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* STRATEGIC TRANSFORMATION MATRIX & SIMULATION UNDER VIEW IMPACT */}
              <div className="relative w-full max-w-5xl mx-auto mt-16 text-left">
                <ValueProjectionDashboard 
                  onSelectBlueprint={(summary) => {
                    setContactForm(prev => ({
                      ...prev,
                      message: prev.message ? `${prev.message}\n\n[Transformation Blueprint Request]:\n${summary}` : `Hello Sam Trillion Consult team,\n\nI evaluated our operational trajectory using your Strategic Transformation Matrix and would like to schedule a discovery consultation.\n\n${summary}`
                    }));
                    scrollTo('contact');
                  }}
                />
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section id="services" className="py-20 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <SectionTitle subtitle="Our Expertise">Intelligence As A Service</SectionTitle>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card 
                  icon={BarChart3} 
                  title="Data Analytics Consultation" 
                  description="We audit your organization's data infrastructure, identify leaks, and propose robust analytics frameworks." 
                  delay="0" 
                  colorScheme="cyan"
                />
                <Card 
                  icon={BrainCircuit} 
                  title="Advanced Analytics Execution" 
                  description="We don't just advise; we build. From predictive modeling to dashboard creation, we handle the heavy lifting." 
                  delay="100" 
                  colorScheme="burnt-orange"
                />
                <Card 
                  icon={Database} 
                  title="Data-Backed Solutions" 
                  description="Custom software and tools tailored to your specific operational needs, ensuring every click contributes to a smarter ecosystem." 
                  delay="200" 
                  colorScheme="emerald"
                />
                <Card 
                  icon={Cpu} 
                  title="AI Automation" 
                  description="We streamline your workflows by integrating intelligent AI agents to automate repetitive tasks and boost productivity." 
                  delay="300" 
                  colorScheme="purple"
                />
                <Card 
                  icon={Boxes} 
                  title="Digital Products" 
                  description="Proprietary data engines, bespoke intelligence platforms, and scalable digital tools engineered for market dominance." 
                  delay="400" 
                  colorScheme="rose"
                />
                <Card 
                  icon={Presentation} 
                  title="Trainings & Conferences" 
                  description="Physical and virtual expert-led trainings, masterclasses, and corporate conferences on data strategy and AI automation." 
                  delay="500" 
                  colorScheme="amber"
                />
              </div>
            </div>
          </section>

          {/* TRAINING SECTION */}
          <section id="training" className="py-20 md:py-24 px-6 bg-slate-900/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <SectionTitle subtitle="Executive Education">Training The Decision Makers</SectionTitle>
                <p className="text-slate-300 text-lg mb-8">Tools are useless without the vision to wield them. We bridge the gap between technical data and executive strategy.</p>
                <div className="space-y-4">
                  <div className="group cursor-pointer p-6 rounded-xl border bg-slate-800/80 border-cyan-500/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:border-cyan-400 hover:translate-x-3 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.25)] hover:bg-slate-800">
                    <h4 className="text-xl font-bold text-white flex items-center gap-3 group-hover:text-cyan-300 transition-colors">
                      <Users size={20} className="text-cyan-400 transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-1" /> Boardroom Analytics
                    </h4>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed group-hover:text-slate-200 transition-colors">
                      Tailored for C-Suite executives to interpret high-level dashboards and forecast market trends with precision.
                    </p>
                  </div>
                  <div className="group cursor-pointer p-6 rounded-xl border bg-slate-800/80 border-cyan-500/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:border-cyan-400 hover:translate-x-3 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.25)] hover:bg-slate-800">
                    <h4 className="text-xl font-bold text-white flex items-center gap-3 group-hover:text-cyan-300 transition-colors">
                      <TrendingUp size={20} className="text-cyan-400 transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-1" /> Operational Strategy
                    </h4>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed group-hover:text-slate-200 transition-colors">
                      Implementation of data loops and intelligent workflows to optimize institutional efficiency and reduce operational waste.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition duration-700"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
                    alt="Executive Training" 
                    className="relative w-full h-full object-cover object-[50%_20%] rounded-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-20 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <SectionTitle subtitle="Track Record">Proven Impact</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Nigerian Government Card */}
                <div 
                  className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between border border-slate-800/80 bg-slate-950/80 shadow-2xl transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(52,211,153,0.22)] hover:border-emerald-500/40"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Nigerian Government Civil Servant Digital Literacy" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 sm:via-slate-950/75 to-slate-950/20 flex flex-col justify-between p-6 sm:p-8 md:p-10 z-10">
                    <div className="pt-14 sm:pt-16">
                      <div className="bg-emerald-500 text-slate-950 text-[10px] font-black px-3.5 py-1.5 rounded-full w-fit mb-3 uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                        NIGERIAN GOVERNMENT
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2.5 leading-tight uppercase tracking-tight">
                        Nigerian Government
                      </h3>
                      
                      <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg leading-relaxed">
                        Facilitating high-impact digital literacy, modern analytics workflows, and technology capacity training for civil servants to modernize public administration.
                      </p>
                    </div>
                    
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => navigateTo('enugu-case-study')}
                        className="cursor-pointer inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold uppercase text-xs tracking-widest group/btn transition-all duration-300 hover:gap-3"
                      >
                        <span>Read more</span>
                        <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI & Business Conference (AIBC 2026) Card */}
                <div 
                  className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between border border-slate-800/80 bg-slate-950/80 shadow-2xl transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)] hover:border-cyan-500/40"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" 
                    alt="AI & Business Conference AIBC 2026" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 sm:via-slate-950/75 to-slate-950/20 flex flex-col justify-between p-6 sm:p-8 md:p-10 z-10">
                    <div className="pt-14 sm:pt-16">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[10px] font-black px-3.5 py-1.5 rounded-full w-fit mb-3 uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                        AI & BUSINESS CONFERENCE
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2.5 leading-tight uppercase tracking-tight">
                        AIBC 2026
                      </h3>
                      
                      <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg leading-relaxed">
                        AIBC 2026 is the international conference we're hosting to bring leaders, enterprise innovators, and tech visionaries from all over the world together.
                      </p>
                    </div>
                    
                    <div className="pt-6">
                      <a 
                        href="https://aibc2026.ai.studio/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-white text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95"
                      >
                        <span>REGISTER FOR EVENT</span>
                        <ExternalLink size={15} className="stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-16 border-y border-slate-800 bg-slate-900/30">
                <Stat target={5000} suffix="+" label="People Trained Globally" />
                <Stat target={100} suffix="+" label="Executives Trained" />
                <Stat target={120} suffix="+" label="Countries Reached" />
                <Stat target={100} suffix="%" label="Impact" />
              </div>
            </div>
          </section>
        </>
      ) : currentPage === 'enugu-case-study' ? (
        <EnuguCivilServantCaseStudy 
          onBack={() => navigateTo('home')} 
          onContactClick={() => {
            setContactForm(prev => ({
              ...prev,
              message: prev.message ? `${prev.message}\n\n[Inquiry: Enugu Digital Literacy Program Scope]` : `Hello Sam Trillion Consult team,\n\nI read the case study on the digital literacy & analytics training for over 3,000 civil servants in Enugu State and would like to explore a similar program for our institution.`
            }));
            scrollTo('contact');
          }}
        />
      ) : currentPage === 'privacy' || currentPage === 'terms' ? (
        <LegalPage type={currentPage} onReturn={() => navigateTo('home')} />
      ) : (
        <AboutPage onContactClick={() => scrollTo('contact')} />
      )}

      {/* CONTACT SECTION */}
      {currentPage !== 'privacy' && currentPage !== 'terms' && (
        <section id="contact" className="py-20 md:py-24 px-6 relative">
          <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-cyan-400">Transform</span> Your Data?</h2>
            <p className="text-slate-400">Secure your session for the next operational quarter.</p>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                required 
                type="text" 
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm sm:text-base text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors" 
                placeholder="Full Name (e.g. Samson Waein)" 
              />
              <input 
                required 
                type="text" 
                value={contactForm.organization}
                onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm sm:text-base text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors" 
                placeholder="Organization (e.g. World Health Organization)" 
              />
            </div>
            <input 
              required 
              type="email" 
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm sm:text-base text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors" 
              placeholder="Official Email Address (e.g. name@organization.com)" 
            />
            <textarea 
              required 
              rows={8} 
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm sm:text-base text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors min-h-[220px] leading-relaxed resize-y" 
              placeholder="Message (enter your inquiry, scope, or detailed proposal...)"
            ></textarea>
            
            <div className="flex justify-center pt-2">
              <div className="relative group rounded-xl overflow-hidden transition-all duration-500 w-full sm:w-auto min-w-[300px] sm:min-w-[380px] md:min-w-[440px]">
                 <div className="absolute inset-0 bg-slate-900 group-hover:bg-cyan-600 transition-colors duration-500"></div>
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_50px_rgba(34,211,238,0.8)]"></div>
                 <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent,#22d3ee,transparent,#22d3ee,transparent)] animate-[spin_3s_linear_infinite] opacity-40 group-hover:opacity-100 group-hover:animate-[spin_1.5s_linear_infinite]"></div>

                 <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="relative z-10 w-full py-4 px-12 md:px-16 flex items-center justify-center bg-transparent transition-all duration-300 rounded-xl cursor-pointer disabled:cursor-not-allowed"
                >
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.2s_infinite]"></div>
                  
                  <span className="relative z-20 text-cyan-400 group-hover:text-white font-extrabold text-xs md:text-sm tracking-[0.28em] uppercase transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] antialiased whitespace-nowrap">
                    {formStatus === 'idle' ? 'SEND MESSAGE' : 'SYNCING...'}
                  </span>
                  
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 group-hover:border-white transition-colors"></div>
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:border-white transition-colors"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:border-white transition-colors"></div>
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 group-hover:border-white transition-colors"></div>
                </button>
              </div>
            </div>
            
            {formStatus === 'success' && (
              <div className="text-center space-y-2 mt-4">
                <div className="text-cyan-400 font-mono text-xs animate-bounce tracking-[0.3em]">
                  PROTOCOL ACTIVE. DATA UPLINK SECURED.
                </div>
                <div className="text-slate-400 text-xs font-mono">
                  Prepared transmission to <span className="text-white font-bold">info@samtrillionconsult.com</span> with subject: <span className="text-cyan-300 font-semibold">"{contactForm.organization || 'Organization'} | {contactForm.name || 'Name'}"</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
      )}

      <footer className="pt-20 pb-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
               <img src="/stc-logo-main.png" alt="Sam Trillion Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
               <span className="text-xl font-bold tracking-tight text-white uppercase tracking-tighter">SAM TRILLION <span className="text-cyan-400 font-light italic">CONSULT</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering leaders and driving digital transformation by converting complex data into clear, actionable intelligence.
            </p>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => navigateTo('home')} className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => scrollTo('services')} className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm">Services</button></li>
              <li><button onClick={() => scrollTo('training')} className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm">Training</button></li>
              <li><button onClick={() => scrollTo('projects')} className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm">Projects</button></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="mailto:info@samtrillionconsult.com" 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all inline-block"
                >
                  info@samtrillionconsult.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <div className="relative group/social flex flex-col items-center">
                <div className="absolute -top-10 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
                  <div className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-xl text-[11px] font-medium text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0077b5] shadow-[0_0_6px_#0077b5]"></span>
                    Connect on LinkedIn
                  </div>
                  <div className="w-2 h-2 bg-slate-900/80 border-r border-b border-slate-700/60 rotate-45 mx-auto -mt-1"></div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/samuel-ijomanta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="cursor-pointer w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 shadow-lg hover:shadow-[#0077b5]/50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              {/* YouTube Social Link */}
              <div className="relative group/social flex flex-col items-center">
                <div className="absolute -top-10 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
                  <div className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-xl text-[11px] font-medium text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] shadow-[0_0_6px_#FF0000]"></span>
                    Follow on Youtube
                  </div>
                  <div className="w-2 h-2 bg-slate-900/80 border-r border-b border-slate-700/60 rotate-45 mx-auto -mt-1"></div>
                </div>
                <a 
                  href="#" 
                  aria-label="Follow on Youtube"
                  className="cursor-pointer w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 shadow-lg hover:shadow-[#FF0000]/50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="relative group/social flex flex-col items-center">
                <div className="absolute -top-10 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
                  <div className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-xl text-[11px] font-medium text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shadow-[0_0_6px_#25D366]"></span>
                    Follow on whatsapp
                  </div>
                  <div className="w-2 h-2 bg-slate-900/80 border-r border-b border-slate-700/60 rotate-45 mx-auto -mt-1"></div>
                </div>
                <a 
                  href="#" 
                  aria-label="Follow on whatsapp"
                  className="cursor-pointer w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-lg hover:shadow-[#25D366]/50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} SAM TRILLION CONSULT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <button 
              type="button"
              onClick={() => navigateTo('privacy')}
              className="cursor-pointer hover:text-cyan-400 transition-colors uppercase"
            >
              PRIVACY POLICY
            </button>
            <button 
              type="button"
              onClick={() => navigateTo('terms')}
              className="cursor-pointer hover:text-cyan-400 transition-colors uppercase"
            >
              TERMS OF SERVICE
            </button>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
