"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Layout,
  Users,
  Building2,
  CloudUpload,
  Bell,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Search,
  Home,
  Map,
  FileText,
  Settings,
  ChevronDown,
  Activity,
} from "lucide-react";

export default function DataFlowDashboardPage() {
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
      let width = 0, height = 0;
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

  useEffect(() => {
    let lastScrollTime = 0;
    const cooldown = 800;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "Backspace") router.push("/data-flow/2");
      else if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") router.push("/data-flow/4");
    };
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;
      if (e.deltaY < -5) { lastScrollTime = now; router.push("/data-flow/2"); }
      else if (e.deltaY > 5) { lastScrollTime = now; router.push("/data-flow/4"); }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("wheel", handleWheel); };
  }, [router]);

  const monthlyData = [
    { month: "ม.ค.", value: 22450, pct: 72 },
    { month: "ก.พ.", value: 19800, pct: 64 },
    { month: "มี.ค.", value: 26300, pct: 85 },
    { month: "เม.ย.", value: 24100, pct: 78 },
    { month: "พ.ค.", value: 28700, pct: 93 },
    { month: "มิ.ย.", value: 27382, pct: 88 },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-100 to-teal-50 flex items-center justify-center p-[10px] font-sarabun select-none overflow-hidden">
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
        <div className="absolute inset-2 border border-slate-200/50 rounded-xl pointer-events-none z-10" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-emerald-200/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[320px] h-[320px] bg-violet-200/40 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Slide Header */}
        <header className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-600 shadow-md shadow-emerald-500/10">
              <Layout className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold font-sarabun tracking-wide bg-gradient-to-r from-emerald-600 via-teal-600 to-violet-600 bg-clip-text text-transparent leading-normal py-0.5">
                ตัวอย่างหน้าจอ-1 — Dashboard สรุปภาพรวม
              </h1>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs text-slate-400 font-extrabold bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/80 tracking-wider">
            Slide 3 of 4 (กด Arrow Left/Right ➔ เพื่อเปลี่ยนหน้า)
          </div>
        </header>

        {/* Main: Dashboard inside browser frame */}
        <main className="relative z-10 w-full flex-1 flex flex-col py-2 overflow-hidden">
          <div className="flex-1 rounded-xl border border-slate-200/80 bg-white shadow-lg overflow-hidden flex flex-col">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border-b border-slate-200 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 bg-white rounded text-[9px] px-2 py-0.5 text-slate-400 font-sans border border-slate-150 overflow-hidden text-ellipsis whitespace-nowrap">
                health.plk.moph.go.th/dashboard
              </div>
            </div>

            {/* Dashboard App */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-[120px] lg:w-[140px] bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col shrink-0">
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-700">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-bold tracking-wide">PLK Health</span>
                </div>
                <nav className="flex-1 py-2 space-y-0.5 px-1.5">
                  {[
                    { icon: Home, label: "Dashboard", active: true },
                    { icon: Map, label: "แผนที่", active: false },
                    { icon: FileText, label: "รายงาน", active: false },
                    { icon: Bell, label: "แจ้งเตือน", active: false },
                    { icon: Settings, label: "ตั้งค่า", active: false },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[10px] font-medium cursor-pointer transition-colors ${item.active ? "bg-emerald-500/20 text-emerald-300" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
                      <item.icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </nav>
                <div className="px-3 py-2 border-t border-slate-700 text-[9px] text-slate-500">
                  v2.4.1
                </div>
              </div>

              {/* Main dashboard content */}
              <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-100 shrink-0">
                  <div>
                    <h2 className="text-xs lg:text-sm font-bold text-slate-800">ภาพรวมระบบสุขภาพ จ.พิษณุโลก</h2>
                    <p className="text-[9px] text-slate-400">ข้อมูล ณ วันที่ 10 มิถุนายน 2568 เวลา 08:30 น.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[9px] text-slate-500 border border-slate-150">
                      <Search className="w-3 h-3" />
                      <span>ค้นหา...</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[9px] text-slate-500 border border-slate-150">
                      <span>มิ.ย. 2568</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
                  {/* KPI Cards Row */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {/* KPI 1 */}
                    <div className="bg-white rounded-lg border border-slate-100 p-2.5 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-slate-400 font-medium">ผู้รับบริการทั้งหมด</span>
                        <Users className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <div className="text-base lg:text-lg font-extrabold text-slate-800 leading-none">148,732</div>
                      <div className="flex items-center gap-0.5 mt-1">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        <span className="text-[9px] font-bold text-emerald-600">+5.8%</span>
                        <span className="text-[8px] text-slate-400 ml-0.5">จากเดือนก่อน</span>
                      </div>
                    </div>
                    {/* KPI 2 */}
                    <div className="bg-white rounded-lg border border-slate-100 p-2.5 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-slate-400 font-medium">หน่วยบริการ</span>
                        <Building2 className="w-3.5 h-3.5 text-sky-500" />
                      </div>
                      <div className="text-base lg:text-lg font-extrabold text-slate-800 leading-none">156</div>
                      <div className="flex items-center gap-0.5 mt-1">
                        <span className="text-[9px] text-slate-500">รพ.สต. 138 / รพช. 9 / รพท. 1</span>
                      </div>
                    </div>
                    {/* KPI 3 */}
                    <div className="bg-white rounded-lg border border-slate-100 p-2.5 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-slate-400 font-medium">ส่งข้อมูล HDC</span>
                        <CloudUpload className="w-3.5 h-3.5 text-violet-500" />
                      </div>
                      <div className="text-base lg:text-lg font-extrabold text-slate-800 leading-none">94.2%</div>
                      <div className="flex items-center gap-0.5 mt-1">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        <span className="text-[9px] font-bold text-emerald-600">+2.1%</span>
                        <span className="text-[8px] text-slate-400 ml-0.5">ความครอบคลุม</span>
                      </div>
                    </div>
                    {/* KPI 4 */}
                    <div className="bg-white rounded-lg border border-slate-100 p-2.5 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-slate-400 font-medium">แจ้งเตือนใหม่</span>
                        <Bell className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div className="text-base lg:text-lg font-extrabold text-amber-600 leading-none">3</div>
                      <div className="flex items-center gap-0.5 mt-1">
                        <span className="text-[9px] text-slate-500">ต้องดำเนินการ</span>
                      </div>
                    </div>
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-[1.6fr_1fr] gap-2.5 flex-1 min-h-0">
                    {/* Bar Chart */}
                    <div className="bg-white rounded-lg border border-slate-100 p-3 shadow-sm flex flex-col">
                      <div className="flex items-center justify-between mb-2 shrink-0">
                        <h3 className="text-[10px] font-bold text-slate-700">ผู้รับบริการรายเดือน (ราย)</h3>
                        <span className="text-[8px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">ม.ค. - มิ.ย. 2568</span>
                      </div>
                      <div className="flex-1 flex items-end gap-3 px-1 min-h-[80px]">
                        {monthlyData.map((d) => (
                          <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-[7px] font-bold text-slate-500">{(d.value / 1000).toFixed(1)}k</span>
                            <div className="w-full rounded-t-sm bg-gradient-to-t from-emerald-500 to-teal-400 transition-all duration-500"
                              style={{ height: `${d.pct}%`, minHeight: 8 }}
                            />
                            <span className="text-[8px] text-slate-400 font-medium">{d.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Panel: Donut + Alerts */}
                    <div className="flex flex-col gap-2.5">
                      {/* Donut */}
                      <div className="bg-white rounded-lg border border-slate-100 p-3 shadow-sm flex items-center gap-3">
                        <div className="relative w-14 h-14 shrink-0">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                            <circle cx="18" cy="18" r="14" fill="none" stroke="url(#donutGrad)" strokeWidth="3.5" strokeDasharray="88 100" strokeLinecap="round" />
                            <defs>
                              <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-extrabold text-slate-700">94%</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-slate-700">ความครอบคลุมข้อมูล</h3>
                          <p className="text-[8px] text-slate-400 mt-0.5">147 จาก 156 หน่วยบริการส่งข้อมูลครบ</p>
                          <div className="flex gap-2 mt-1">
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold">ปกติ 138</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 font-bold">ล่าช้า 9</span>
                          </div>
                        </div>
                      </div>

                      {/* Alerts */}
                      <div className="bg-white rounded-lg border border-slate-100 p-3 shadow-sm flex-1 flex flex-col">
                        <h3 className="text-[10px] font-bold text-slate-700 mb-1.5 shrink-0">การแจ้งเตือนล่าสุด</h3>
                        <div className="flex-1 space-y-1.5 overflow-hidden">
                          <div className="flex items-start gap-2 p-1.5 rounded bg-red-50/80 border border-red-100">
                            <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[9px] font-bold text-red-700">อ.ชาติตระการ — ไข้เลือดออกเพิ่มขึ้น</p>
                              <p className="text-[8px] text-red-400">5 นาทีที่แล้ว</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 p-1.5 rounded bg-amber-50/80 border border-amber-100">
                            <Bell className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[9px] font-bold text-amber-700">รพ.สต.บ้านคลอง — ส่ง HDC ล่าช้า 3 วัน</p>
                              <p className="text-[8px] text-amber-400">12 นาทีที่แล้ว</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 p-1.5 rounded bg-emerald-50/80 border border-emerald-100">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[9px] font-bold text-emerald-700">อ.เมือง — ส่งข้อมูลครบ 100%</p>
                              <p className="text-[8px] text-emerald-400">30 นาทีที่แล้ว</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
