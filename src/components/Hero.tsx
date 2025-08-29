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

      <div className="container mx-auto px-6 py-20 relative z-10 mt-36">
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
              <span className="block">computer eng @ university of michigan</span>
              <span className="block">interested in backend, consumer apps, and web3</span>
              <span className="block">currently seeking internships for 2026</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => {
                navigator.clipboard.writeText('howtian@umich.edu');
                const button = event?.target as HTMLElement;
                if (button) {
                  const textElement = button.querySelector('span');
                  if (textElement) {
                    textElement.textContent = 'howtian@umich.edu';
                  }
                }
                // Show toast notification
                const toast = document.createElement('div');
                toast.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg z-50 backdrop-blur-sm';
                toast.textContent = 'Email copied to clipboard!';
                document.body.appendChild(toast);
                
                // Remove toast after 3 seconds
                setTimeout(() => {
                  if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                  }
                }, 3000);
              }}
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href="https://github.com/haotianli24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href="https://www.linkedin.com/in/haotian-li24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col items-center animate-bounce mt-48">
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