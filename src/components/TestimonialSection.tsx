import React from 'react';

export function TestimonialSection() {
  return (
    <section className="bg-background py-24 px-6 md:px-12 lg:py-32 border-t border-foreground/10 overflow-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center">
        <p className="text-primary text-[11px] md:text-sm font-bold uppercase tracking-[0.16em] mb-4">
          3940+ Happy Students & Alumni
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground text-center max-w-2xl mb-16 md:mb-24">
          Don't just take our words
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {/* Testimonial 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 max-w-2xl">
            <img 
              className="h-60 w-full sm:w-auto rounded-none object-cover" 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400" 
              alt="Donald Jackman" 
            />
            <div className="flex flex-col justify-between sm:h-60 py-2">
              <div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                    </svg>
                  ))}
                </div>
                <p className="max-w-[320px] text-foreground/70 text-[15px] sm:text-base leading-relaxed mt-6 font-medium italic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud aliquip”
                </p>
              </div>
              <p className="text-xl font-black uppercase tracking-tight mt-6 sm:mt-0">Donald Jackman</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 max-w-2xl">
            <img 
              className="h-60 w-full sm:w-auto rounded-none object-cover" 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400" 
              alt="James Washington" 
            />
            <div className="flex flex-col justify-between sm:h-60 py-2">
              <div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                    </svg>
                  ))}
                </div>
                <p className="max-w-[320px] text-foreground/70 text-[15px] sm:text-base leading-relaxed mt-6 font-medium italic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud aliquip”
                </p>
              </div>
              <p className="text-xl font-black uppercase tracking-tight mt-6 sm:mt-0">James Washington</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
