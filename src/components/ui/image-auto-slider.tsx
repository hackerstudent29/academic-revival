import React from 'react';

export interface InfrastructureSlide {
  image: string;
  title: string;
  desc: string;
}

interface ImageAutoSliderProps {
  slides?: InfrastructureSlide[];
}

const DEFAULT_INFRASTRUCTURE_SLIDES: InfrastructureSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    title: 'Computer Labs for Online Exams',
    desc: 'Well established Computer labs equipped for online skill training and proctored recruitment examinations.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    title: 'Interview & Evaluation Cabins',
    desc: 'Well-furnished air-conditioned rooms designed for written tests, technical evaluations, and face-to-face HR interviews.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    title: 'Dedicated AC Group Discussion Rooms',
    desc: 'Dedicated air-conditioned rooms for conducting group discussions, mock debates, and panel interactions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    title: 'AC Auditoriums & Seminar Halls',
    desc: 'Air-conditioned Auditorium, Seminar Halls, and Meeting Halls for Pre-Placement Talks (PPT) and conclaves.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    title: 'Centres of Excellence Labs',
    desc: 'Specialized lab setups powered by AWS, Cisco, RedHat, and TVS with dedicated hardware testbeds.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    title: 'Mechatronics & CAD Rigs',
    desc: 'Precision CAD/CAM modeling rigs and automotive mechatronics stations for live project work.',
  },
];

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  slides = DEFAULT_INFRASTRUCTURE_SLIDES,
}) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="w-full relative overflow-hidden py-2">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll-track {
          animation: scroll-right 28s linear infinite;
        }

        .infinite-scroll-track:hover {
          animation-play-state: paused;
        }

        .slider-mask-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
      `}</style>

      <div className="slider-mask-container w-full">
        <div className="infinite-scroll-track flex gap-5 sm:gap-6 w-max">
          {duplicatedSlides.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 space-y-2.5 group"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md bg-muted border border-border/40 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover select-none pointer-events-none transition-filter duration-300 group-hover:brightness-105"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-primary text-white text-[10px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                  {`0${(index % slides.length) + 1}`}
                </span>
              </div>
              <div className="space-y-1 px-1">
                <h3 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/80 font-libre font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
