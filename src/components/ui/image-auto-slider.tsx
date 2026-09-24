import React from 'react';

export interface InfrastructureSlide {
  image: string;
  title: string;
  desc?: string;
}

interface ImageAutoSliderProps {
  slides?: InfrastructureSlide[];
}

const DEFAULT_INFRASTRUCTURE_SLIDES: InfrastructureSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    title: 'Computer Labs for Online Exams',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    title: 'Interview & Evaluation Cabins',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    title: 'Dedicated AC Group Discussion Rooms',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    title: 'AC Auditoriums & Seminar Halls',
  },
  {
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    title: 'Centres of Excellence Labs',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    title: 'Mechatronics & CAD Rigs',
  },
  {
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    title: 'Career Counselling Suites',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    title: 'Hardware & Systems QA Labs',
  },
];

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  slides = DEFAULT_INFRASTRUCTURE_SLIDES,
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {slides.map((item, index) => (
          <div key={index} className="space-y-2.5">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border/40 bg-muted shadow-xs">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/eligibility_hero.jpg';
                }}
              />
            </div>
            <h3 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
