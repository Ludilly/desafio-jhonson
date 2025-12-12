"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <style jsx>{`
        .header-container {
          width: 100%;
          background-color: #eb1700;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 60px 120px;
          color: #ffffff;
          position: relative;
          overflow: visible;
        }

        .header-content {
          max-width: 50%;
        }

        .header-title {
          font-size: 64px;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 20px;
          font-family: Arial, sans-serif;
        }

        .header-subtitle {
          font-size: 20px;
          line-height: 1.5;
          font-family: Arial, sans-serif;
          opacity: 0.9;
        }

        .header-image-container {
          width: 50%;
          position: relative;
          overflow: visible;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 40px 20px 60px;
          }

          .header-content {
            max-width: 100%;
          }

          .header-title {
            font-size: 36px;
          }

          .header-subtitle {
            font-size: 16px;
          }

          .header-image-container {
            display: none;
          }
        }
      `}</style>
      <header className="header-container">
        <div className="header-content">
          <h1 className="header-title">
            Your health. <br />
            Your choice.
          </h1>
          <p className="header-subtitle">Our organizational tree</p>
        </div>
        <div className="header-image-container">
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
    </>
  );
}