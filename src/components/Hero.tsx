import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Haotian Li
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              computer eng @ university of michigan
              interested in backend, consumer apps, and web3
              currently seeking internships for 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center text-muted-foreground mt-16"
          >
            <div className="flex f  lex-col items-center animate-bounce">
              <p className="text-sm mb-2">Scroll to explore</p>
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-pulse floating" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-pulse floating-delayed" />
    </section>
  );
}