import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const educationData = {
  school: 'University of Michigan - Ann Arbor',
  degree: 'Bachelor of Science in Computer Engineering',
  year: 'Junior (Expected Graduation: 2026)',
  location: 'Ann Arbor, MI',
  gpa: '3.8/4.0' // Placeholder
};

const coursework = [
  'EECS 281 - Data Structures and Algorithms',
  'EECS 280 - Programming (OOP) and Intro Data Structures',
  'EECS 203 - Discrete Mathematics',
  'EECS 485 - Web Systems',
  'EECS 370 - Computer Organization'
];

const activities = [
  'Michigan Blockchain',
  'Collaborative Lab for Advancing Work in Space (CLAWS)',
  'The Corso Group'
];

const awards = [
  'University Honors',
  'Deans List x2'
];

export default function Education() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and extracurricular involvement
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="glow-card p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{educationData.school}</h3>
                  <p className="text-lg text-primary font-medium mb-2">{educationData.degree}</p>
                  <div className="flex flex-wrap gap-6 text-muted-foreground">
                    <span>{educationData.year}</span>
                    <span>{educationData.location}</span>
                    <span className="text-primary font-medium">GPA: {educationData.gpa}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Coursework, Activities, and Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="glow-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Relevant Coursework</h3>
                </div>
                <ul className="space-y-3">
                  {coursework.map((course, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                      • {course}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glow-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Activities</h3>
                </div>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                      • {activity}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glow-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Awards</h3>
                </div>
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                      🏆 {award}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}