import { useEffect, useRef } from "react";

export function CampusVideoReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Video must start muted so autoPlay works (browser policy).
    // Scrolling = user interaction, so we can safely unmute when section enters view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          video.muted = false;
          video.play().catch(() => { video.muted = true; });
        } else {
          video.muted = true;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full z-0 pointer-events-none">
      <div className="absolute left-0 right-0 h-[300vh] -top-[100vh] -z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/campus-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="h-[150vh] md:h-[200vh] w-full bg-transparent" aria-hidden="true" />
    </section>
  );
}
