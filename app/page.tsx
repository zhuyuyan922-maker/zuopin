"use client";
import { useState } from "react";
import Link from "next/link";

const base = "/samplezuopinji";

const videos = [
  { file: base + "/guoxue.mp4", likes: "87", comments: "5", collects: "23", shares: "6" },
  { file: base + "/tiangan.mp4", likes: "274", comments: "49", collects: "68", shares: "17" },
  { file: base + "/jing.mp4", likes: "3,299", comments: "392", collects: "680", shares: "709" },
  { file: base + "/mbti.mp4", likes: "733", comments: "17", collects: "86", shares: "47" },
];

const stats = [
  { v: "5,552", l: "粉丝", icon: "􀉭", color: "#007AFF" },
  { v: "7.5万+", l: "获赞", icon: "􀊰", color: "#FF3B30" },
  { v: "150万+", l: "总曝光", icon: "􀎵", color: "#FF9500" },
  { v: "4,000+", l: "私域用户", icon: "􀌲", color: "#34C759" },
  { v: "3.8万", l: "APP下载", icon: "􀌁", color: "#AF52DE" },
  { v: "236条", l: "发布内容", icon: "􀏅", color: "#5AC8FA" },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const v = videos[idx];

  return (
    <main style={s.main}>
      {/* 导航 */}
      <div style={s.wrap}>
        <nav style={s.nav}>
          <span style={s.brand}>忘机阁 · 玄中易</span>
          <Link href="/photography" style={s.navLink}>摄影作品</Link>
        </nav>

        {/* 标题 */}
        <p style={s.label}>抖音运营案例</p>
        <h1 style={s.h1}>国学/易学垂类账号运营</h1>
        <p style={s.desc}>
          运营忘机阁-玄中易账号，策划内容236条，总曝光150万+，搭建私域转化链路沉淀用户4000+，APP下载量3.8万。
        </p>

        {/* Apple 风数据卡片 */}
        <div style={s.cardGrid}>
          {stats.map((item) => (
            <div key={item.l} style={s.card}>
              <div style={{ ...s.iconCircle, background: item.color + "12" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke={item.color} strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="3" fill={item.color} />
                </svg>
              </div>
              <div style={s.num}>{item.v}</div>
              <div style={s.lbl}>{item.l}</div>
            </div>
          ))}
        </div>

        {/* 视频区 — 与卡片同宽 */}
        <div style={s.videoWrap}>
          <div style={s.videoBox}>
            <video key={v.file} src={v.file} controls style={s.video} preload="metadata" />
          </div>
          <div style={s.videoBar}>
            <div style={s.metrics}>
              <span>♥ {v.likes}</span>
              <span>💬 {v.comments}</span>
              <span>★ {v.collects}</span>
              <span>↗ {v.shares}</span>
            </div>
            <div style={s.arrows}>
              <button onClick={() => setIdx((idx - 1 + videos.length) % videos.length)} style={s.arrowBtn}>←</button>
              <span style={s.page}>{idx + 1} / {videos.length}</span>
              <button onClick={() => setIdx((idx + 1) % videos.length)} style={s.arrowBtn}>→</button>
            </div>
          </div>
        </div>

        <footer style={s.footer}>© 2026</footer>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #f6f2ff 0%, #edf6fa 35%, #faf7f0 70%, #f8f4ff 100%)",
    color: "#1d1d1f",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC', sans-serif",
  },
  wrap: { maxWidth: 820, margin: "0 auto", padding: "0 20px" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" },
  brand: { fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" },
  navLink: { fontSize: 13, color: "#86868b", textDecoration: "none" },
  label: { fontSize: 11, fontWeight: 500, letterSpacing: 2.5, color: "#86868b", textTransform: "uppercase", marginBottom: 10, marginTop: 28 },
  h1: { fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 12, marginTop: 0 },
  desc: { fontSize: 15, color: "#86868b", lineHeight: 1.6, marginBottom: 42, maxWidth: 420 },

  // 卡片网格
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))",
    gap: 12,
    marginBottom: 12,
  },
  card: {
    background: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(24px) saturate(1.2)",
    WebkitBackdropFilter: "blur(24px) saturate(1.2)",
    borderRadius: 18,
    padding: "20px 16px 18px",
    border: "1px solid rgba(255,255,255,0.7)",
    boxShadow: "0 0.5px 0 0 rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03), 0 3px 8px rgba(0,0,0,0.02)",
  },
  iconCircle: {
    width: 30, height: 30, borderRadius: 15,
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: 14,
  },
  num: { fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 },
  lbl: { fontSize: 11, color: "#999", marginTop: 6 },

  // 视频区
  videoWrap: { maxWidth: "100%" },
  videoBox: {
    aspectRatio: "16/9",
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(24px) saturate(1.2)",
    WebkitBackdropFilter: "blur(24px) saturate(1.2)",
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.7)",
    boxShadow: "0 0.5px 0 0 rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.03), 0 6px 16px rgba(0,0,0,0.03)",
  },
  video: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  videoBar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginTop: 12, marginBottom: 48,
  },
  metrics: { display: "flex", gap: 18, fontSize: 13, color: "#999", fontWeight: 500 },
  arrows: { display: "flex", alignItems: "center", gap: 6 },
  arrowBtn: {
    width: 28, height: 28, borderRadius: 14, border: "none",
    background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, color: "#666", cursor: "pointer",
    boxShadow: "0 0.5px 1px rgba(0,0,0,0.04)",
  },
  page: { fontSize: 11, color: "#999", fontWeight: 500, minWidth: 28, textAlign: "center" },
  footer: { fontSize: 11, color: "#c0c0c0", padding: "20px 0 28px" },
};
