"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  ArrowRight,
  Server,
  PieChart,
  TrendingUp,
  Globe,
  Activity
} from "lucide-react";

export default function DataFlowPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const margin = 10;
      const availableWidth = window.innerWidth - margin * 2;
      const availableHeight = window.innerHeight - margin * 2;
      
      const targetRatio = 16 / 9;
      const currentRatio = availableWidth / availableHeight;
      
      let width = 0;
      let height = 0;
      
      if (currentRatio > targetRatio) {
        height = availableHeight;
        width = availableHeight * targetRatio;
      } else {
        width = availableWidth;
        height = availableWidth / targetRatio;
      }
      
      setDimensions({ width, height });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard and Mouse Wheel navigation for presentation slides
  useEffect(() => {
    let lastScrollTime = 0;
    const cooldown = 800; // ms

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        router.push("/data-flow/1");
      } else if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        router.push("/data-flow/3");
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      if (e.deltaY < -5) { // scroll up to previous slide
        lastScrollTime = now;
        router.push("/data-flow/1");
      } else if (e.deltaY > 5) { // scroll down to next slide
        lastScrollTime = now;
        router.push("/data-flow/3");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [router]);

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-100 to-teal-50 flex items-center justify-center p-[10px] font-sarabun select-none overflow-hidden">
      
      {/* The 16:9 Standard Canva Slide Frame */}
      <div 
        style={{
          width: mounted ? `${dimensions.width}px` : "100%",
          height: mounted ? `${dimensions.height}px` : "auto",
          aspectRatio: "16/9",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
        className="relative bg-slate-50/95 rounded-2xl border-4 border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between p-5 lg:p-7 shrink-0"
      >
        
        {/* Inner Slide border indicating the print/safe area */}
        <div className="absolute inset-2 border border-slate-200/50 rounded-xl pointer-events-none z-10" />

        {/* Decorative Glowing Orbs inside the slide */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-emerald-200/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[320px] h-[320px] bg-violet-200/40 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid Pattern inside slide */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Slide Header */}
        <header className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-600 shadow-md shadow-emerald-500/10">
              <Activity className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold font-sarabun tracking-wide bg-gradient-to-r from-emerald-600 via-teal-600 to-violet-600 bg-clip-text text-transparent leading-normal py-0.5">
                ระบบข้อมูลสุขภาพ สสจ.พิษณุโลก
              </h1>
            </div>
          </div>
          {/* Slide indicator */}
          <div className="text-[10px] sm:text-xs text-slate-400 font-extrabold bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/80 tracking-wider">
            Slide 2 of 4 (กด Arrow Left/Right ➔ เพื่อเปลี่ยนหน้า)
          </div>
        </header>

        {/* Main Slide Content */}
        <main className="relative z-10 w-full flex-1 flex flex-col py-1.5 lg:py-2 overflow-hidden">
          

          {/* 3 Columns Grid stretched vertically with connecting flow arrows */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-1 lg:gap-2.5 items-stretch flex-1">
            
            {/* COLUMN 1: หน่วยบริการ (Service Unit) */}
            <section className="relative flex flex-col justify-between backdrop-blur-md rounded-2xl border-2 px-4 py-3 lg:px-5 lg:py-4 border-emerald-500 bg-emerald-50/30 shadow-lg shadow-emerald-500/15">
              {/* Glowing Accent Indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-28 rounded-b-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-100 shadow-[0_0_10px_#10b981]" />

              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex-1 flex flex-col">
                  {/* Header inside Card */}
                  <div className="flex items-center gap-3 mb-3.5 shrink-0">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white border-transparent shadow-lg shadow-emerald-500/20">
                      <Hospital className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold font-sarabun text-slate-800 leading-normal py-0.5">1. หน่วยบริการ</h2>
                    </div>
                  </div>

                  {/* Bullet Points - Stretched to fill vertical space */}
                  <ul className="flex-1 flex flex-col justify-between gap-2 lg:gap-2.5">
                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-md hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-200">
                        <Keyboard className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">Data Entry กิจกรรมบริการ</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">บันทึกข้อมูลบริการสุขภาพขั้นพื้นฐานที่จุดบริการ</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-md hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-200">
                        <UploadCloud className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ส่งต่อ HDC</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">ส่งชุดข้อมูลมาตรฐานเข้าคลัง Health Data Center</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-md hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-200">
                        <Send className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ส่งต่อ NDP</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">เชื่อมโยงส่งต่อระบบข้อมูลกลางระดับประเทศ</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-md hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-200">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ส่งต่อ PLK</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">ส่งข้อมูลเข้าเครือข่ายจังหวัดพิษณุโลก (PLK Portal)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bottom Status Tag */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] lg:text-xs shrink-0">
                  <span className="text-slate-400 font-semibold font-sarabun">ประเภทบทบาท</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold font-sarabun uppercase tracking-wider text-[10px]">
                    ผู้บันทึกข้อมูลหลัก
                  </span>
                </div>
              </div>
            </section>

            {/* Arrow between Level 1 and Level 2 */}
            <div className="flex flex-col pt-3 lg:pt-4 z-10">
              <div className="flex items-center justify-center h-11 w-8 lg:w-10">
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md shadow-sky-500/20 shrink-0">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 animate-slide-right" />
                </div>
              </div>
            </div>

            {/* COLUMN 2: อำเภอ (District) */}
            <section className="relative flex flex-col justify-between backdrop-blur-md rounded-2xl border-2 px-4 py-3 lg:px-5 lg:py-4 border-sky-500 bg-sky-50/30 shadow-lg shadow-sky-500/15">
              {/* Glowing Accent Indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-28 rounded-b-full bg-gradient-to-r from-sky-500 to-cyan-450 opacity-100 shadow-[0_0_10px_#0ea5e9]" />

              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex-1 flex flex-col">
                  {/* Header inside Card */}
                  <div className="flex items-center gap-3 mb-3.5 shrink-0">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-600 text-white border-transparent shadow-lg shadow-sky-500/20">
                      <Network className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold font-sarabun text-slate-800 leading-normal py-0.5">2. อำเภอ</h2>
                    </div>
                  </div>

                  {/* Bullet Points - Stretched to fill vertical space */}
                  <ul className="flex-1 flex flex-col justify-between gap-2 lg:gap-2.5">
                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-sky-300 hover:bg-sky-50/20 hover:shadow-md hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-200">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ตรวจสอบความถูกต้อง</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">คัดกรองความถูกต้อง สสอ. และ รพช. เพื่อความแม่นยำ</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-sky-300 hover:bg-sky-50/20 hover:shadow-md hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-200">
                        <FolderOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">รวบรวมข้อมูลระดับอำเภอ</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">รวมข้อมูลกิจกรรมจาก รพ.สต. และ โรงพยาบาลชุมชน</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-sky-300 hover:bg-sky-50/20 hover:shadow-md hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-200">
                        <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ประเมินผลสุขภาพ</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">วิเคราะห์ประมวลผลดัชนีชี้วัดสุขภาพเบื้องต้นในพื้นที่</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-sky-300 hover:bg-sky-50/20 hover:shadow-md hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">ส่งต่อข้อมูลสู่จังหวัด</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">ส่งชุดข้อมูลการบริการสุขภาพที่ผ่านการตรวจสอบแล้ว</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bottom Status Tag */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] lg:text-xs shrink-0">
                  <span className="text-slate-400 font-semibold font-sarabun">ประเภทบทบาท</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-extrabold font-sarabun uppercase tracking-wider text-[10px]">
                    ผู้ตรวจสอบและรวบรวม
                  </span>
                </div>
              </div>
            </section>

            {/* Arrow between Level 2 and Level 3 */}
            <div className="flex flex-col pt-3 lg:pt-4 z-10">
              <div className="flex items-center justify-center h-11 w-8 lg:w-10">
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-md shadow-violet-500/20 shrink-0">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 animate-slide-right" />
                </div>
              </div>
            </div>

            {/* COLUMN 3: จังหวัด (Province) */}
            <section className="relative flex flex-col justify-between backdrop-blur-md rounded-2xl border-2 px-4 py-3 lg:px-5 lg:py-4 border-violet-500 bg-violet-50/30 shadow-lg shadow-violet-500/15">
              {/* Glowing Accent Indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-28 rounded-b-full bg-gradient-to-r from-violet-500 to-fuchsia-450 opacity-100 shadow-[0_0_10px_#8b5cf6]" />

              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex-1 flex flex-col">
                  {/* Header inside Card */}
                  <div className="flex items-center gap-3 mb-3.5 shrink-0">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-600 text-white border-transparent shadow-lg shadow-violet-500/20">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold font-sarabun text-slate-800 leading-normal py-0.5">3. จังหวัด</h2>
                    </div>
                  </div>

                  {/* Bullet Points - Stretched to fill vertical space */}
                  <ul className="flex-1 flex flex-col justify-between gap-2 lg:gap-2.5">
                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-violet-300 hover:bg-violet-50/20 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 transition-all duration-200">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">คลังข้อมูลสุขภาพจังหวัด</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">จัดเก็บรวบรวมคลังข้อมูลประชากรสุขภาพรวมทั้งจังหวัด</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-violet-300 hover:bg-violet-50/20 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 transition-all duration-200">
                        <PieChart className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">วิเคราะห์ BI Dashboard</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">แสดงผลสถิติตัวชี้วัดสาธารณสุขและแผนที่ภูมิศาสตร์</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-violet-300 hover:bg-violet-50/20 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 transition-all duration-200">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">การกำหนดนโยบาย</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">ขับเคลื่อนยุทธศาสตร์สาธารณสุขจังหวัดและบริหารทรัพยากร</p>
                      </div>
                    </li>

                    <li className="group flex-1 flex items-center gap-3 py-2 px-3 rounded-xl bg-white border border-slate-150 hover:border-violet-300 hover:bg-violet-50/20 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-center w-7.5 h-7.5 rounded bg-slate-50 text-slate-500 border border-slate-150 shrink-0 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 transition-all duration-200">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm lg:text-base font-sarabun leading-tight">เผยแพร่รายงานสาธารณะ</h3>
                        <p className="text-[11px] text-slate-500 font-sarabun mt-0.5 leading-tight">เชื่อมประสานระบบข้อมูลกระทรวงฯ และบริการภาคประชาชน</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bottom Status Tag */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] lg:text-xs shrink-0">
                  <span className="text-slate-400 font-semibold font-sarabun">ประเภทบทบาท</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 font-extrabold font-sarabun uppercase tracking-wider text-[10px]">
                    ผู้ขับเคลื่อนนโยบาย/คลังกลาง
                  </span>
                </div>
              </div>
            </section>

          </div>
        </main>

      </div>
    </div>
  );
}
