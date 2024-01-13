import React, { useEffect, useRef } from "react";

const EmailSection = () => {
  const splineViewerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.0.28/build/spline-viewer.js";
    document.head.appendChild(script);

    script.onload = () => {
      if (splineViewerRef.current) {
        const splineViewer = splineViewerRef.current;
        splineViewer.url =
          "https://prod.spline.design/ShhuLGt9LDqyRPgT/scene.splinecode";
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="z-10">
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
      </div>
      <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#00FFFF] hover:[#85C1E9]--600 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-20 right-0 z-9999 spline-container">
        <spline-viewer
          ref={splineViewerRef}
          style={{
            width: "100vw",
            height: "100vh", // Adjust the height as needed
            left: "75%",
            transform: "translateY(60%)",
          }}
        ></spline-viewer>
      </div>
    </section>
  );
};

export default EmailSection;
