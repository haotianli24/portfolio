import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'SQL'],
    placeholder: true
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux', 'AWS'],
    placeholder: true
  },
  {
    title: 'Frameworks',
    icon: Layers,
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'TailwindCSS', 'Three.js'],
    placeholder: true
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glow-card p-6 h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      className="text-center"
                    >
                      <div className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors duration-200 group cursor-pointer">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {category.placeholder && (
                  <p className="text-xs text-muted-foreground text-center mt-4 italic">
                    * Skills list will be updated with your specific technologies
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}