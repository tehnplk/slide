"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FileSpreadsheet,
  Search,
  ChevronDown,
  ArrowUpDown,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Download,
  Filter,
  Activity,
  Home,
  Map,
  FileText,
  Bell,
  Settings,
  Table2,
} from "lucide-react";

export default function DataFlowTablePage() {
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
      if (e.key === "ArrowLeft" || e.key === "Backspace") router.push("/data-flow/3");
    };
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;
      if (e.deltaY < -5) { lastScrollTime = now; router.push("/data-flow/3"); }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("wheel", handleWheel); };
  }, [router]);

  const districts = [
    { name: "อ.เมืองพิษณุโลก", units: 45, patients: 42340, hdc: 100, coverage: 98.5, status: "success" },
    { name: "อ.นครไทย", units: 22, patients: 18450, hdc: 100, coverage: 96.2, status: "success" },
    { name: "อ.ชาติตระการ", units: 14, patients: 11200, hdc: 92, coverage: 88.4, status: "warning" },
    { name: "อ.บางระกำ", units: 18, patients: 16780, hdc: 100, coverage: 95.1, status: "success" },
    { name: "อ.บางกระทุ่ม", units: 12, patients: 9850, hdc: 100, coverage: 97.3, status: "success" },
    { name: "อ.พรหมพิราม", units: 16, patients: 14320, hdc: 95, coverage: 91.7, status: "warning" },
    { name: "อ.วัดโบสถ์", units: 10, patients: 8640, hdc: 100, coverage: 99.1, status: "success" },
    { name: "อ.วังทอง", units: 13, patients: 17520, hdc: 100, coverage: 94.8, status: "success" },
    { name: "อ.เนินมะปราง", units: 8, patients: 9632, hdc: 88, coverage: 82.6, status: "danger" },
  ];

  const statusConfig: Record<string, { label: string; color: string; bg: string; border: string; icon: typeof CheckCircle2 }> = {
    success: { label: "ปกติ", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", icon: CheckCircle2 },
    warning: { label: "ล่าช้า", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", icon: Clock },
    danger: { label: "ต้องตรวจสอบ", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", icon: AlertTriangle },
  };

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
              <FileSpreadsheet className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold font-sarabun tracking-wide bg-gradient-to-r from-emerald-600 via-teal-600 to-violet-600 bg-clip-text text-transparent leading-normal py-0.5">
                ตัวอย่างหน้าจอ-2 — ตารางข้อมูลรายอำเภอ
              </h1>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs text-slate-400 font-extrabold bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/80 tracking-wider">
            Slide 4 of 4 (กด Arrow Left ➔ เพื่อย้อนกลับ)
          </div>
        </header>

        {/* Main: Table inside browser frame */}
        <main className="relative z-10 w-full flex-1 flex flex-col py-2 overflow-hidden">
          <div className="flex-1 rounded-xl border border-slate-200/80 bg-white shadow-lg overflow-hidden flex flex-col">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border-b border-slate-200 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 bg-white rounded text-[9px] px-2 py-0.5 text-slate-400 font-sans border border-slate-150 overflow-hidden text-ellipsis whitespace-nowrap">
                health.plk.moph.go.th/reports/district-table
              </div>
            </div>

            {/* App content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-[120px] lg:w-[140px] bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col shrink-0">
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-700">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-bold tracking-wide">PLK Health</span>
                </div>
                <nav className="flex-1 py-2 space-y-0.5 px-1.5">
                  {[
                    { icon: Home, label: "Dashboard", active: false },
                    { icon: Table2, label: "ตารางข้อมูล", active: true },
                    { icon: Map, label: "แผนที่", active: false },
                    { icon: FileText, label: "รายงาน", active: false },
                    { icon: Settings, label: "ตั้งค่า", active: false },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[10px] font-medium cursor-pointer transition-colors ${item.active ? "bg-violet-500/20 text-violet-300" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`}>
                      <item.icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Table content */}
              <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
                {/* Top toolbar */}
                <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-100 shrink-0">
                  <div>
                    <h2 className="text-xs lg:text-sm font-bold text-slate-800">ตารางสรุปข้อมูลรายอำเภอ</h2>
                    <p className="text-[9px] text-slate-400">จังหวัดพิษณุโลก — 9 อำเภอ · 158 หน่วยบริการ · ปีงบประมาณ 2568</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[9px] text-slate-500 border border-slate-150 cursor-pointer hover:bg-slate-200 transition-colors">
                      <Filter className="w-3 h-3" />
                      <span>ตัวกรอง</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[9px] text-slate-500 border border-slate-150 cursor-pointer hover:bg-slate-200 transition-colors">
                      <Download className="w-3 h-3" />
                      <span>ส่งออก</span>
                    </div>
                  </div>
                </div>

                {/* Summary mini stats */}
                <div className="grid grid-cols-3 gap-2.5 px-4 py-2 shrink-0">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-100 px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[9px] text-slate-500">ส่งข้อมูลครบ</span>
                    <span className="text-[10px] font-extrabold text-emerald-700 ml-auto">6 อำเภอ</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-100 px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-[9px] text-slate-500">ส่งล่าช้า</span>
                    <span className="text-[10px] font-extrabold text-amber-700 ml-auto">2 อำเภอ</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-100 px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-[9px] text-slate-500">ต้องตรวจสอบ</span>
                    <span className="text-[10px] font-extrabold text-red-700 ml-auto">1 อำเภอ</span>
                  </div>
                </div>

                {/* Data Table */}
                <div className="flex-1 px-4 pb-2 overflow-hidden">
                  <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden h-full flex flex-col">
                    <table className="w-full text-[9px] lg:text-[10px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                          <th className="text-left px-3 py-2 font-bold text-slate-500 w-[30px]">#</th>
                          <th className="text-left px-3 py-2 font-bold text-slate-500">
                            <div className="flex items-center gap-1">อำเภอ <ArrowUpDown className="w-2.5 h-2.5" /></div>
                          </th>
                          <th className="text-center px-3 py-2 font-bold text-slate-500">หน่วยบริการ</th>
                          <th className="text-right px-3 py-2 font-bold text-slate-500">
                            <div className="flex items-center gap-1 justify-end">ผู้รับบริการ <ArrowUpDown className="w-2.5 h-2.5" /></div>
                          </th>
                          <th className="text-center px-3 py-2 font-bold text-slate-500">ส่ง HDC (%)</th>
                          <th className="text-center px-3 py-2 font-bold text-slate-500 w-[150px]">ความครอบคลุม (%)</th>
                          <th className="text-center px-3 py-2 font-bold text-slate-500">สถานะ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {districts.map((d, i) => {
                          const st = statusConfig[d.status];
                          const StatusIcon = st.icon;
                          return (
                            <tr key={d.name} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                              <td className="px-3 py-[6px] text-slate-400 font-medium">{i + 1}</td>
                              <td className="px-3 py-[6px] font-bold text-slate-700">{d.name}</td>
                              <td className="px-3 py-[6px] text-center text-slate-600">{d.units}</td>
                              <td className="px-3 py-[6px] text-right text-slate-700 font-semibold tabular-nums">{d.patients.toLocaleString()}</td>
                              <td className="px-3 py-[6px] text-center">
                                <span className={`font-bold ${d.hdc === 100 ? "text-emerald-600" : d.hdc >= 90 ? "text-amber-600" : "text-red-600"}`}>
                                  {d.hdc}
                                </span>
                              </td>
                              <td className="px-3 py-[6px]">
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full transition-all ${d.coverage >= 95 ? "bg-emerald-400" : d.coverage >= 90 ? "bg-amber-400" : "bg-red-400"}`}
                                      style={{ width: `${d.coverage}%` }}
                                    />
                                  </div>
                                  <span className="text-[9px] font-bold text-slate-500 w-[32px] text-right tabular-nums">{d.coverage}</span>
                                </div>
                              </td>
                              <td className="px-3 py-[6px] text-center">
                                <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] font-bold border ${st.bg} ${st.color} ${st.border}`}>
                                  <StatusIcon className="w-2.5 h-2.5" />
                                  {st.label}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* Table footer */}
                    <div className="mt-auto flex items-center justify-between px-3 py-1.5 bg-slate-50 border-t border-slate-100 text-[8px] text-slate-400">
                      <span>แสดง 1–9 จาก 9 อำเภอ</span>
                      <span>อัปเดตล่าสุด: 10 มิ.ย. 2568 เวลา 08:30 น.</span>
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
