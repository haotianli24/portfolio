import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    title: 'Software Developer',
    company: 'The Corso Group',
    duration: 'Jun 2025 - Present',
    location: 'Ann Arbor, MI',
    description: 'Developing innovative software solutions and contributing to cutting-edge projects.',
    icon: Building2
  },
  {
    title: 'Augmented Reality Software Developer',
    company: 'CLAWS',
    duration: 'Sep 2024 - Present',
    location: 'University of Michigan',
    description: 'Working on AR applications and immersive technology solutions for space research.',
    icon: Building2
  },
  {
    title: 'Research Assistant',
    company: 'Michigan State University',
    duration: 'Sep 2023 - April 2024',
    location: 'East Lansing, MI',
    description: 'Conducted research in computer engineering and contributed to academic publications.',
    icon: Building2
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="glow-card p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                {index < experiences.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-border" />
                )}
              </div>
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}