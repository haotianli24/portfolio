import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Haotian Li
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2024. All rights reserved.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}