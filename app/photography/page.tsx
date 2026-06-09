"use client";
import Link from "next/link";
import Image from "next/image";

const B = "/samplezuopinji";

const photos = [
  { src: B + "/end1.png", title: "作品一" },
  { src: B + "/end3.jpg", title: "作品二" },
  { src: B + "/end4.png", title: "作品三" },
  { src: B + "/end5.png", title: "作品四" },
  { src: B + "/end7.png", title: "作品五" },
];

export default function Photography() {
  return (
    <main style={s.main}>
      <div style={s.wrap}>
        <nav style={s.nav}>
          <Link href="/" style={s.back}>← 返回</Link>
          <span style={s.navTitle}>摄影作品</span>
          <div style={{ width: 50 }} />
        </nav>

        <p style={s.label}>Photography</p>
        <h1 style={s.h1}>摄影作品</h1>

        {/* 单列完整展示 */}
        <div style={s.list}>
          {photos.map((p) => (
            <div key={p.src} style={s.card}>
              <Image
                src={p.src}
                alt={p.title}
                width={1200}
                height={800}
                style={s.img}
                sizes="(max-width: 900px) 100vw, 820px"
              />
              <div style={s.caption}>
                <span style={s.dot} />
                {p.title}
              </div>
            </div>
          ))}
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
  wrap: { maxWidth: 860, margin: "0 auto", padding: "0 20px" },
  nav: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 0",
  },
  back: { fontSize: 13, color: "#86868b", textDecoration: "none", fontWeight: 500 },
  navTitle: { fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" },

  label: {
    fontSize: 11, fontWeight: 500, letterSpacing: 2.5, color: "#86868b",
    textTransform: "uppercase", marginBottom: 10, marginTop: 28,
  },
  h1: {
    fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.025em",
    marginBottom: 40, marginTop: 0,
  },

  // 单列卡片列表
  list: { display: "flex", flexDirection: "column", gap: 32, marginBottom: 48 },
  card: {
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "0 0.5px 0 0 rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.03), 0 4px 10px rgba(0,0,0,0.02)",
  },
  img: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  caption: {
    display: "flex", alignItems: "center", gap: 8,
    padding: "14px 18px",
    fontSize: 13, fontWeight: 500, color: "#86868b",
    borderTop: "1px solid rgba(0,0,0,0.04)",
  },
  dot: {
    width: 6, height: 6, borderRadius: 3,
    background: "#86868b", display: "inline-block",
  },

  footer: { fontSize: 11, color: "#c0c0c0", padding: "20px 0 28px" },
};
