"use client";

import React, { useState, useEffect } from "react";
import {
  Hospital,
  Network,
  Database,
  Keyboard,
  UploadCloud,
  Send,
  Share2,
  ShieldCheck,
  FolderOpen,
  BarChart2,
  ArrowUpRight,
  Server,
  PieChart,
  TrendingUp,
  Globe,
  Play,
  RotateCcw,
  CheckCircle2,
  Zap,
  Activity,
  Monitor
} from "lucide-react";

export default function DataFlowPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [stats, setStats] = useState({ services: 0, districts: 0, provinces: 0 });

  // Count up animation on page load
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        services: Math.min(Math.floor((158 / steps) * step), 158),
        districts: Math.min(Math.floor((9 / steps) * step), 9),
        provinces: Math.min(Math.floor((1 / steps) * step), 1),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Simulation runner
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      setActiveStep(0);
      const runSimulation = () => {
        timer = setInterval(() => {
          setActiveStep((prev) => {
            if (prev === null) return 0;
            if (prev >= 2) {
              clearInterval(timer);
              setIsSimulating(false);
              return null;
            }
            return prev + 1;
          });
        }, 2500);
      };
      runSimulation();
    } else {
      setActiveStep(null);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const startSimulation = () => {
    setIsSimulating(true);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setActiveStep(null);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#e2e8f0] flex flex-col items-center justify-center p-4 md:p-6 font-sans select-none overflow-hidden">
      
      {/* Slide Wrapper representing the Canva Editor Workspace */}
      <div className="w-full max-w-7xl flex flex-col gap-3 h-full">
        

        {/* The 16:9 Standard Canva Slide Frame */}
        <div className="relative w-full aspect-video max-h-[82vh] bg-slate-50 rounded-2xl border-4 border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between p-5 lg:p-8 shrink-0">
          
          {/* Inner Slide border indicating the print/safe area */}
          <div className="absolute inset-2 border border-slate-200/50 rounded-xl pointer-events-none z-10" />

          {/* Decorative Glowing Orbs inside the slide */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-emerald-100/30 rounded-full blur-[70px] pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-violet-100/30 rounded-full blur-[80px] pointer-events-none animate-pulse duration-[10000ms]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-100/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid Pattern inside slide */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Slide Header */}
          <header className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-slate-200/80 pb-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/10">
                <Activity className="w-5.5 h-5.5 text-white animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold font-kanit tracking-wide bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-none">
                  ระบบข้อมูลสุขภาพ สสจ.พิษณุโลก
                </h1>
                <p className="text-[9px] text-slate-400 font-bold tracking-wider mt-1 font-sans">
                  PHITSANULOK PROVINCIAL HEALTH DATA FLOW SYSTEM
                </p>
              </div>
            </div>

          </header>

          {/* Main Slide Content */}
          <main className="relative z-10 w-full flex-1 flex flex-col py-3 overflow-hidden">
            

            {/* 3 Columns Grid stretched vertically */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 items-stretch flex-1 h-full">
              
              {/* COLUMN 1: หน่วยบริการ (Service Unit) */}
              <section
                className={`relative flex flex-col justify-between bg-white/70 backdrop-blur-md rounded-2xl border p-4 lg:p-5 transition-all duration-500 h-full ${
                  activeStep === 0 
                    ? "border-emerald-500 bg-emerald-50/20 shadow-lg shadow-emerald-500/10 scale-[1.01]" 
                    : "border-slate-200 bg-white/75 shadow-sm"
                }`}
              >
                {/* Glowing Accent Indicator */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 rounded-b-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ${
                  activeStep === 0 ? "w-28 h-1.5 opacity-100 shadow-[0_0_10px_#10b981]" : "opacity-60"
                }`} />

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="flex-1 flex flex-col">
                    {/* Header inside Card */}
                    <div className="flex items-center gap-3 mb-4 shrink-0">
                      <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr transition-all duration-500 ${
                        activeStep === 0 
                          ? "from-emerald-500 to-teal-400 text-white shadow-md shadow-emerald-500/15" 
                          : "from-slate-100 to-slate-200 text-emerald-600"
                      }`}>
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-600/90 font-mono">LEVEL 01</span>
                        <h2 className="text-base lg:text-lg font-bold font-kanit text-slate-800 leading-tight">1. หน่วยบริการ</h2>
                      </div>
                    </div>

                    {/* Bullet Points - Stretched to fill vertical space */}
                    <ul className="flex-1 flex flex-col justify-between gap-3">
                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-emerald-50 text-emerald-600 shrink-0">
                          <Keyboard className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">Data Entry กิจกรรมบริการ</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">บันทึกข้อมูลบริการสุขภาพขั้นพื้นฐานที่จุดบริการ</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-emerald-50 text-emerald-600 shrink-0">
                          <UploadCloud className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ส่งต่อ HDC</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">ส่งชุดข้อมูลมาตรฐานเข้าคลัง Health Data Center</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-emerald-50 text-emerald-600 shrink-0">
                          <Send className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ส่งต่อ NDP</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">เชื่อมโยงส่งต่อระบบข้อมูลกลางระดับประเทศ</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-emerald-50 text-emerald-600 shrink-0">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ส่งต่อ PLK</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">ส่งข้อมูลเข้าเครือข่ายจังหวัดพิษณุโลก (PLK Portal)</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Bottom Status Tag */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] shrink-0">
                    <span className="text-slate-400 font-semibold font-kanit">ประเภทบทบาท</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-extrabold font-kanit uppercase tracking-wider text-[8px]">
                      ผู้บันทึกข้อมูลหลัก
                    </span>
                  </div>
                </div>
              </section>

              {/* COLUMN 2: อำเภอ (District) */}
              <section
                className={`relative flex flex-col justify-between bg-white/70 backdrop-blur-md rounded-2xl border p-4 lg:p-5 transition-all duration-500 h-full ${
                  activeStep === 1 
                    ? "border-sky-500 bg-sky-50/20 shadow-lg shadow-sky-500/10 scale-[1.01]" 
                    : "border-slate-200 bg-white/75 shadow-sm"
                }`}
              >
                {/* Glowing Accent Indicator */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 rounded-b-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500 ${
                  activeStep === 1 ? "w-28 h-1.5 opacity-100 shadow-[0_0_10px_#0ea5e9]" : "opacity-60"
                }`} />

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="flex-1 flex flex-col">
                    {/* Header inside Card */}
                    <div className="flex items-center gap-3 mb-4 shrink-0">
                      <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr transition-all duration-500 ${
                        activeStep === 1 
                          ? "from-sky-500 to-cyan-400 text-white shadow-md shadow-sky-500/15" 
                          : "from-slate-100 to-slate-200 text-sky-600"
                      }`}>
                        <Network className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-bold tracking-widest text-sky-600/90 font-mono">LEVEL 02</span>
                        <h2 className="text-base lg:text-lg font-bold font-kanit text-slate-800 leading-tight">2. อำเภอ</h2>
                      </div>
                    </div>

                    {/* Bullet Points - Stretched to fill vertical space */}
                    <ul className="flex-1 flex flex-col justify-between gap-3">
                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-sky-50 text-sky-600 shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ตรวจสอบความถูกต้อง</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">คัดกรองความถูกต้อง สสอ. และ รพช. เพื่อความแม่นยำ</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-sky-50 text-sky-600 shrink-0">
                          <FolderOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">รวบรวมข้อมูลระดับอำเภอ</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">รวมข้อมูลกิจกรรมจาก รพ.สต. และ โรงพยาบาลชุมชน</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-sky-50 text-sky-600 shrink-0">
                          <BarChart2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ประเมินผลสุขภาพ</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">วิเคราะห์ประมวลผลดัชนีชี้วัดสุขภาพเบื้องต้นในพื้นที่</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-sky-50 text-sky-600 shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">ส่งต่อข้อมูลสู่จังหวัด</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">ส่งชุดข้อมูลการบริการสุขภาพที่ผ่านการตรวจสอบแล้ว</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Bottom Status Tag */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] shrink-0">
                    <span className="text-slate-400 font-semibold font-kanit">ประเภทบทบาท</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 font-extrabold font-kanit uppercase tracking-wider text-[8px]">
                      ผู้ตรวจสอบและรวบรวม
                    </span>
                  </div>
                </div>
              </section>

              {/* COLUMN 3: จังหวัด (Province) */}
              <section
                className={`relative flex flex-col justify-between bg-white/70 backdrop-blur-md rounded-2xl border p-4 lg:p-5 transition-all duration-500 h-full ${
                  activeStep === 2 
                    ? "border-violet-500 bg-violet-50/20 shadow-lg shadow-violet-500/10 scale-[1.01]" 
                    : "border-slate-200 bg-white/75 shadow-sm"
                }`}
              >
                {/* Glowing Accent Indicator */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 rounded-b-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-500 ${
                  activeStep === 2 ? "w-28 h-1.5 opacity-100 shadow-[0_0_10px_#8b5cf6]" : "opacity-60"
                }`} />

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="flex-1 flex flex-col">
                    {/* Header inside Card */}
                    <div className="flex items-center gap-3 mb-4 shrink-0">
                      <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr transition-all duration-500 ${
                        activeStep === 2 
                          ? "from-violet-500 to-fuchsia-400 text-white shadow-md shadow-violet-500/15" 
                          : "from-slate-100 to-slate-200 text-violet-600"
                      }`}>
                        <Database className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-bold tracking-widest text-violet-400/90 font-mono">LEVEL 03</span>
                        <h2 className="text-base lg:text-lg font-bold font-kanit text-slate-800 leading-tight">3. จังหวัด</h2>
                      </div>
                    </div>

                    {/* Bullet Points - Stretched to fill vertical space */}
                    <ul className="flex-1 flex flex-col justify-between gap-3">
                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-violet-50 text-violet-600 shrink-0">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">คลังข้อมูลสุขภาพจังหวัด</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">จัดเก็บรวบรวมคลังข้อมูลประชากรสุขภาพรวมทั้งจังหวัด</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-violet-50 text-violet-600 shrink-0">
                          <PieChart className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">วิเคราะห์ BI Dashboard</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">แสดงผลสถิติตัวชี้วัดสาธารณสุขและแผนที่ภูมิศาสตร์</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-violet-50 text-violet-600 shrink-0">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">การกำหนดนโยบาย</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">ขับเคลื่อนยุทธศาสตร์สาธารณสุขจังหวัดและบริหารทรัพยากร</p>
                        </div>
                      </li>

                      <li className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-150 shadow-sm">
                        <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-violet-50 text-violet-600 shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-xs lg:text-sm font-kanit">เผยแพร่รายงานสาธารณะ</h3>
                          <p className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight">เชื่อมประสานระบบข้อมูลกระทรวงฯ และบริการภาคประชาชน</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Bottom Status Tag */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] shrink-0">
                    <span className="text-slate-400 font-semibold font-kanit">ประเภทบทบาท</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-600 font-extrabold font-kanit uppercase tracking-wider text-[8px]">
                      ผู้ขับเคลื่อนนโยบาย/คลังกลาง
                    </span>
                  </div>
                </div>
              </section>

            </div>
          </main>


          {/* Embedded CSS for SVG line animations and custom animations */}
          <style jsx global>{`
            @keyframes dash {
              to {
                stroke-dashoffset: -15;
              }
            }
          `}</style>
        </div>


      </div>
    </div>
  );
}
