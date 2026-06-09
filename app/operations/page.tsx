"use client";
import { useState } from "react";
import Link from "next/link";

const cases = [
  {
    id: 1,
    name: "生活方式账号冷启动",
    tag: "涨粉",
    period: "3个月",
    result: "0 → 10.2万粉",
    detail: "差异化选题 + 固定发布节奏，第三个月单月涨粉 4.3 万完成冷启动。",
    metrics: [
      { label: "最终粉丝", value: "10.2万" },
      { label: "平均播放", value: "28万" },
      { label: "爆款视频", value: "3条 100万+" },
    ],
  },
  {
    id: 2,
    name: "品牌合作专项运营",
    tag: "商业变现",
    period: "6个月",
    result: "GMV 50万+",
    detail: "达人筛选、内容对齐、投放复盘全流程，单场直播最高 GMV 12 万。",
    metrics: [
      { label: "合作达人", value: "23位" },
      { label: "总GMV", value: "50万+" },
      { label: "平均ROI", value: "3.8x" },
    ],
  },
  {
    id: 3,
    name: "矩阵账号规模化",
    tag: "矩阵运营",
    period: "5个月",
    result: "4账号合计 30万粉",
    detail: "搭建内容 SOP，统一视觉与选题，4个垂直账号合计突破 30 万粉。",
    metrics: [
      { label: "账号数量", value: "4个" },
      { label: "合计粉丝", value: "30万+" },
      { label: "月均产出", value: "80条" },
    ],
  },
];

export default function Operations() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-10 py-7 border-b border-white/10">
        <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">← 返回</Link>
        <span className="text-sm tracking-widest text-white/40 uppercase">Operations</span>
      </nav>

      <section className="px-10 py-16 max-w-4xl mx-auto">
        {/* 标题区 */}
        <div className="mb-14">
          <h1 className="text-6xl font-bold mb-4">运营案例</h1>
          <p className="text-white/30 text-base">抖音账号冷启动 · 商业变现 · 矩阵增长</p>
        </div>

        {/* 数据概览 */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { num: "30万+", label: "矩阵粉丝总量" },
            { num: "50万+", label: "商业合作GMV" },
            { num: "3.8x", label: "平均投放ROI" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">{item.num}</div>
              <div className="text-xs text-white/30">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 案例列表 */}
        <div className="space-y-3">
          {cases.map((c) => (
            <div key={c.id} className="bg-white/5 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-7 py-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setActiveCase(activeCase === c.id ? null : c.id)}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-white/10 text-white/50 rounded-full px-3 py-0.5 text-[10px]">{c.tag}</span>
                    <span className="text-white/30 text-xs">{c.period}</span>
                  </div>
                  <div className="text-lg font-semibold">{c.name}</div>
                </div>
                <div className="flex items-center gap-5 text-right">
                  <span className="text-sm text-white/40 hidden md:block">{c.result}</span>
                  <span className="text-white/30 text-xl w-5">{activeCase === c.id ? "−" : "+"}</span>
                </div>
              </button>

              {activeCase === c.id && (
                <div className="px-7 pb-7 border-t border-white/10 pt-5">
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{c.detail}</p>
                  <div className="flex gap-10">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold mb-1">{m.value}</div>
                        <div className="text-xs text-white/30">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
