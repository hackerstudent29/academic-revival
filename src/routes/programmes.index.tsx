import { createFileRoute, Link } from '@tanstack/react-router';
import { PageHero } from '@/components/shared/PageHero';
import { ArrowRight, Settings2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/programmes/')({
  component: ProgrammesIndex,
});

const courseTypes = [
  {
    title: "Undergraduate",
    description: "Explore our B.E. and B.Tech programmes designed to build strong foundations in engineering.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    link: "/admissions?level=Undergraduate",
    icon: <Settings2 className="w-6 h-6" />
  },
  {
    title: "Postgraduate",
    description: "Advance your expertise with our specialized M.E. and M.Arch degree programmes.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    link: "/admissions?level=Postgraduate",
    icon: <Settings2 className="w-6 h-6" />
  },
  {
    title: "Research (Ph.D)",
    description: "Push the boundaries of innovation and technology through our doctoral research offerings.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    link: "/admissions?level=Research+(Ph.D)",
    icon: <Settings2 className="w-6 h-6" />
  },
  {
    title: "Value Added Courses",
    description: "Enhance your employability with industry-ready short courses and certifications.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    link: "/admissions",
    icon: <Settings2 className="w-6 h-6" />
  }
];

function ProgrammesIndex() {
  return (
    <main className="bg-background min-h-screen pt-24 md:pt-32">
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseTypes.map((type, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col"
            >
              <Link to={type.link as any} className="block overflow-hidden relative mb-6 aspect-square bg-muted">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-black text-white p-3">
                  {type.icon}
                </div>
              </Link>
              
              <Link to={type.link as any} className="group-hover:text-primary transition-colors">
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{type.title}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {type.description}
              </p>
              
              <Link to={type.link as any} className="text-primary hover:text-primary/80 transition-colors">
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
