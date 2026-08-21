import { Reveal } from "@/components/motion";

export function CampusVideoReveal() {
  return (
    <section className="relative w-full z-0 pointer-events-none">
      
      {/* 
        The absolute wrapper that starts HIGHER than this section, 
        overlapping the previous section (AboutBannerSection). 
        We make it exactly tall enough to cover the offset and the transparent spacer.
      */}
      <div className="absolute left-0 right-0 h-[300vh] -top-[100vh] -z-10">
        
        {/* 
          The sticky container. As soon as the top of the absolute wrapper 
          hits the top of the screen, this video sticks. 
        */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/campus-video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-white text-center w-full max-w-5xl mx-auto pb-20">
            <Reveal variant="rise">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
                Discover Our Campus
              </h2>
            </Reveal>
            <Reveal variant="rise" delay={0.2}>
              <p className="font-sans text-lg md:text-2xl text-white/90 max-w-3xl font-medium mx-auto">
                A vibrant residential ecosystem designed for innovation, focus, and collaboration. Experience student life from a new perspective.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 
        The Transparent Spacer
        Making this 200vh means the user has to scroll for an entire viewport height 
        WHILE the video is fully revealed and fixed, creating a dramatic pause.
      */}
      <div className="h-[150vh] md:h-[200vh] w-full bg-transparent" aria-hidden="true" />
    </section>
  );
}
