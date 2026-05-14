export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ACM SVNIT gave me the platform to explore web development and build projects that actually matter.",
      name: "Rahul M.",
      title: "Third Year, CSE",
    },
    {
      quote: "Organizing DotSlash was the highlight of my college life. I learned more about leadership and tech.",
      name: "Sneha K.",
      title: "Final Year, ECE",
    },
    {
      quote: "The open-source contribution drive totally changed my perspective. I landed my first major internship.",
      name: "Aman S.",
      title: "Second Year, CSE",
    },
    {
      quote: "From late-night coding sessions to winning hackathons together, ACM is more than a club—it's a family.",
      name: "Priya V.",
      title: "Third Year, AI",
    },
  ];

  return (
    <section className="section-padding bg-[#000000] border-t border-[#1A1A1A]">
      <div className="container-width">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-12 uppercase tracking-tighter">
          Voices from Our <span className="text-[var(--accent)]">Community</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-[#1A1A1A]">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-8 md:p-12 border-r border-b border-[#1A1A1A] hover:bg-[#0A0A0A] transition-colors flex flex-col justify-between group">
              <p className="font-display text-2xl md:text-3xl leading-tight tracking-tight mb-8">
                "{test.quote}"
              </p>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-white uppercase tracking-widest">{test.name}</span>
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">{test.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
