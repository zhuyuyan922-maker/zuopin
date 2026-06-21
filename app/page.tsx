"use client";
import { useState } from "react";

const cases = [
  {
    brand: "忘机阁 · 玄中易",
    label: "抖音运营案例",
    title: "国学/易学垂类账号运营",
    desc: "运营忘机阁-玄中易账号，策划内容236条，总曝光150万+，搭建私域转化链路沉淀用户4000+，APP下载量3.8万。",
    stats: [
      { v: "5,552", l: "粉丝", color: "#007AFF" },
      { v: "7.5万+", l: "获赞", color: "#FF3B30" },
      { v: "150万+", l: "总曝光", color: "#FF9500" },
      { v: "4,000+", l: "私域用户", color: "#34C759" },
      { v: "3.8万", l: "APP下载", color: "#AF52DE" },
      { v: "236条", l: "发布内容", color: "#5AC8FA" },
    ],
    videos: [
      { file: "/zuopin/guoxue.mp4", likes: "87", comments: "5", collects: "23", shares: "6" },
      { file: "/zuopin/tiangan.mp4", likes: "274", comments: "49", collects: "68", shares: "17" },
      { file: "/zuopin/jing.mp4", likes: "3,299", comments: "392", collects: "680", shares: "709" },
      { file: "/zuopin/mbti.mp4", likes: "733", comments: "17", collects: "86", shares: "47" },
    ],
  },
  {
    brand: "芦妈说媒",
    vertical: true,
    label: "抖音运营案例",
    title: "相亲/情感垂类账号运营",
    desc: "代运营芦妈说媒账号，负责内容策划、视频制作与发布，账号定位相亲情感垂类赛道。",
    stats: [
      { v: "代运营", l: "账号性质", color: "#007AFF" },
      { v: "情感", l: "内容垂类", color: "#FF3B30" },
      { v: "3条", l: "样片视频", color: "#FF9500" },
    ],
    videos: [
      { file: "/zuopin/芦妈说媒1.mp4", likes: "—", comments: "—", collects: "—", shares: "—" },
      { file: "/zuopin/芦妈说媒运营2.mp4", likes: "—", comments: "—", collects: "—", shares: "—" },
      { file: "/zuopin/芦妈说媒运营3.mp4", likes: "—", comments: "—", collects: "—", shares: "—" },
    ],
  },
];

export default function Home() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [vidIdx, setVidIdx] = useState(0);
  const c = cases[caseIdx];
  const v = c.videos[vidIdx];

  function switchCase(dir: number) {
    setCaseIdx((caseIdx + dir + cases.length) % cases.length);
    setVidIdx(0);
  }

  return (
    <main style={s.main}>
      <div style={s.wrap}>
        {/* 导航 */}
        <nav style={s.nav}>
          <span style={s.brand}>{c.brand}</span>
          <div style={s.caseNav}>
            <button onClick={() => switchCase(-1)} style={s.caseBtn}>←</button>
            <span style={s.casePage}>{caseIdx + 1} / {cases.length}</span>
            <button onClick={() => switchCase(1)} style={s.caseBtn}>→</button>
          </div>
        </nav>

        {/* 标题 */}
        <p style={s.label}>{c.label}</p>
        <h1 style={s.h1}>{c.title}</h1>
        <p style={s.desc}>{c.desc}</p>

        {/* 数据卡片 */}
        <div style={s.cardGrid}>
          {c.stats.map((item) => (
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

        {/* 视频区 */}
        {c.vertical ? (
          <div style={s.videoWrapV}>
            <div style={s.videoColV}>
              <div style={s.videoBoxV}>
                <video key={v.file} src={v.file} controls style={s.video} preload="metadata" />
              </div>
              <div style={s.videoBar}>
                <div style={s.metrics}>
                  <span>♥ {v.likes}</span><span>💬 {v.comments}</span>
                  <span>★ {v.collects}</span><span>↗ {v.shares}</span>
                </div>
                <div style={s.arrows}>
                  <button onClick={() => setVidIdx((vidIdx - 1 + c.videos.length) % c.videos.length)} style={s.arrowBtn}>←</button>
                  <span style={s.page}>{vidIdx + 1} / {c.videos.length}</span>
                  <button onClick={() => setVidIdx((vidIdx + 1) % c.videos.length)} style={s.arrowBtn}>→</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={s.videoWrap}>
            <div style={s.videoBox}>
              <video key={v.file} src={v.file} controls style={s.video} preload="metadata" />
            </div>
            <div style={s.videoBar}>
              <div style={s.metrics}>
                <span>♥ {v.likes}</span><span>💬 {v.comments}</span>
                <span>★ {v.collects}</span><span>↗ {v.shares}</span>
              </div>
              <div style={s.arrows}>
                <button onClick={() => setVidIdx((vidIdx - 1 + c.videos.length) % c.videos.length)} style={s.arrowBtn}>←</button>
                <span style={s.page}>{vidIdx + 1} / {c.videos.length}</span>
                <button onClick={() => setVidIdx((vidIdx + 1) % c.videos.length)} style={s.arrowBtn}>→</button>
              </div>
            </div>
          </div>
        )}

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
  caseNav: { display: "flex", alignItems: "center", gap: 6 },
  caseBtn: {
    width: 28, height: 28, borderRadius: 14, border: "none",
    background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
    fontSize: 12, color: "#666", cursor: "pointer",
    boxShadow: "0 0.5px 1px rgba(0,0,0,0.04)",
  },
  casePage: { fontSize: 11, color: "#86868b", fontWeight: 500, minWidth: 28, textAlign: "center" },
  label: { fontSize: 11, fontWeight: 500, letterSpacing: 2.5, color: "#86868b", textTransform: "uppercase", marginBottom: 10, marginTop: 28 },
  h1: { fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 12, marginTop: 0 },
  desc: { fontSize: 15, color: "#86868b", lineHeight: 1.6, marginBottom: 42, maxWidth: 420 },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))",
    gap: 12, marginBottom: 12,
  },
  card: {
    background: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(24px) saturate(1.2)",
    WebkitBackdropFilter: "blur(24px) saturate(1.2)",
    borderRadius: 18, padding: "20px 16px 18px",
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
  videoWrap: { maxWidth: "100%" },
  videoWrapV: { display: "flex", justifyContent: "center", marginBottom: 0 },
  videoColV: { display: "flex", flexDirection: "column" as const, width: "min(340px, 65%)" },
  videoBoxV: {
    aspectRatio: "9/16",
    maxHeight: 520,
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(24px) saturate(1.2)",
    WebkitBackdropFilter: "blur(24px) saturate(1.2)",
    borderRadius: 18, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.7)",
    boxShadow: "0 0.5px 0 0 rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.03), 0 6px 16px rgba(0,0,0,0.03)",
  },
  videoBox: {
    aspectRatio: "16/9",
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(24px) saturate(1.2)",
    WebkitBackdropFilter: "blur(24px) saturate(1.2)",
    borderRadius: 18, overflow: "hidden",
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
