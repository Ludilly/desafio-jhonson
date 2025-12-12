"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#EB1700",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 60px 120px",
        color: "#FFFFFF",
        position: "relative",
        overflow: "visible",
      }}
    >
      <style jsx global>{`
        @media (max-width: 768px) {
          header {
            padding: 40px 20px 60px !important;
          }
          .header-content {
            max-width: 100% !important;
          }
          .header-title {
            font-size: 36px !important;
          }
          .header-subtitle {
            font-size: 16px !important;
          }
          .header-image-container {
            display: none !important;
          }
        }
      `}</style>

      <div
        className="header-content"
        style={{ maxWidth: "50%" }}
      >
        <h1
          className="header-title"
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            lineHeight: "1.1",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Your health. <br />
          Your choice.
        </h1>
        <p
          className="header-subtitle"
          style={{
            fontSize: "20px",
            lineHeight: "1.5",
            fontFamily: "Arial, sans-serif",
            opacity: 0.9,
          }}
        >
          Our organizational tree
        </p>
      </div>
      
      <div
        className="header-image-container"
        style={{
          width: "50%",
          position: "relative",
          overflow: "visible",
        }}
      >
        <Image
          src="/img.png"
          alt="Health care people walking"
          width={700}
          height={500}
          style={{
            position: "absolute",
            top: "-170px",
            left: "50%",
            transform: "translateX(-40%)",
            objectFit: "contain",
          }}
        />
      </div>
    </header>
  );
}