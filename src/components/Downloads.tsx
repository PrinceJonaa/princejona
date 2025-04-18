/**
 * Downloads Component
 * Placeholder for embedded Instagram feed and multimedia grid.
 * Swap the Instagram embed src with your own when ready.
 */
import React from "react";

const mockPosts = [
  {
    title: "Voice Note – Divine Recall",
    type: "audio",
    desc: "A raw download on aligning memory with Presencee.",
  },
  {
    title: "Clip – Unmasking Limitation",
    type: "video",
    desc: "Reflection on transcending inherited beliefs.",
  },
  {
    title: "Blog – Mirrors and Seeds",
    type: "text",
    desc: "Short written exploration: each action is a mirror, each thought a seed.",
  },
];

const Downloads: React.FC = () => (
  <section style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    gap: 32,
    width: "100%",
    minHeight: "100vh"
  }}>
    <h1 style={{ color: "#fff", fontSize: 32, marginBottom: 18, textShadow: "0 2px 8px #0008" }}>Downloads from the Field</h1>
    <div style={{
      background: "#fff",
      borderRadius: "1.5rem",
      boxShadow: "0 4px 24px #0001",
      padding: 24,
      marginBottom: 28,
      width: "100%",
      maxWidth: 420
    }}>
      {/* Placeholder Instagram embed */}
      <iframe
        src="https://www.instagram.com/princejonaa/embed"
        width="100%"
        height="380"
        frameBorder={0}
        style={{ borderRadius: 14, background: "#eee", minHeight: 320 }}
        title="Instagram Embed"
        allow="autoplay; encrypted-media"
      />
      <div style={{ fontSize: 14, color: "var(--color-text-muted)", marginTop: 6 }}>
        (Instagram feed: @princejonaa)
      </div>
    </div>
    <div style={{
      display: "flex",
      gap: 28,
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {mockPosts.map((post, idx) => (
        <div
          key={post.title}
          style={{
            background: "#33374d",
            color: "var(--color-text-main)",
            borderRadius: "1rem",
            width: 175,
            minHeight: 110,
            padding: 20,
            boxShadow: "0 2px 16px #0003",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-accent)" }}>
            {post.type === "audio" ? "🔊" : post.type === "video" ? "🎥" : "✍️"}
            {" "}
            {post.title}
          </div>
          <div style={{ fontSize: 14, color: "var(--color-text-main)" }}>{post.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Downloads;
