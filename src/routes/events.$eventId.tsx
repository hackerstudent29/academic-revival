import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { allEvents } from '@/lib/eventsData';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle2, ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Route = createFileRoute('/events/$eventId')({
  loader: async ({ params }) => {
    const event = allEvents.find(e => e.id === params.eventId);
    if (!event) throw notFound();
    return { event };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h2 className="text-3xl font-black font-oswald text-primary mb-2 uppercase">Event Not Found</h2>
      <p className="text-muted-foreground mb-6">The requested event could not be found.</p>
      <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
        Back to Home
      </Link>
    </div>
  ),
  component: EventDetailPage,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div ref={heroRef} className="relative w-full min-h-[60vh] lg:min-h-[70vh] bg-black flex flex-col justify-end pt-32 pb-16 lg:pb-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="mb-6">
            <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest shadow-sm">
              {event.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-5xl">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {event.description}
              </ReactMarkdown>
            </div>
            
            <hr className="my-12 border-border" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tight text-foreground">Have Questions?</h3>
              <p className="text-muted-foreground">If you require any accommodations or have questions about this event, please reach out to the organizing department or contact the MSAJCE main office.</p>
              <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:underline">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-[100px] bg-card border border-border shadow-sm p-8 space-y-8 rounded-[4px]">
              <h3 className="text-xl font-black uppercase tracking-tight border-b border-border pb-4">
                Event Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-sm text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Date</h4>
                    <p className="font-bold text-foreground">{event.date}</p>
                  </div>
                </div>

                {event.time && (
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-sm text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Time</h4>
                      <p className="font-bold text-foreground">{event.time}</p>
                    </div>
                  </div>
                )}

                {event.venue && (
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-sm text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Venue</h4>
                      <p className="font-bold text-black dark:text-white">{event.venue}</p>
                    </div>
                  </div>
                )}
                
                {(event.eligibility || event.teamSize) && (
                  <div className="pt-6 border-t border-border/50 space-y-6">
                    {event.eligibility && (
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-sm text-primary">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Eligibility</h4>
                          <p className="font-bold text-foreground">{event.eligibility}</p>
                        </div>
                      </div>
                    )}
                    
                    {event.teamSize && (
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-sm text-primary">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Team Size</h4>
                          <p className="font-bold text-foreground">{event.teamSize}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-border">
                {event.registrationDeadline && (
                  <p className="text-xs font-bold text-destructive uppercase tracking-widest text-center mb-4">
                    Deadline: {event.registrationDeadline}
                  </p>
                )}
                <button className="w-full group relative flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 text-[13px] font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-primary/90">
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
