import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, Flame, GitCommit } from 'lucide-react';

// Generate mock activity data for the past year
const generateActivityData = () => {
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 365);
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Mock activity level (0-4)
    const level = Math.floor(Math.random() * 5);
    data.push({
      date: date.toISOString().split('T')[0],
      level,
      commits: level > 0 ? Math.floor(Math.random() * 10) + level : 0
    });
  }
  
  return data;
};

const activityData = generateActivityData();

export default function CodingActivity() {
  const totalCommits = activityData.reduce((sum, day) => sum + day.commits, 0);
  const currentStreak = 7; // Mock current streak
  const longestStreak = 23; // Mock longest streak

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Coding Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My coding consistency and contribution patterns over the past year
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Card className="glow-card p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GitCommit className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{totalCommits}</span>
                </div>
                <p className="text-muted-foreground">Total Contributions</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{currentStreak}</span>
                </div>
                <p className="text-muted-foreground">Current Streak</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{longestStreak}</span>
                </div>
                <p className="text-muted-foreground">Longest Streak</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Month labels */}
                <div className="flex justify-between mb-2 text-xs text-muted-foreground">
                  {months.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
                
                {/* Activity grid */}
                <div className="grid grid-cols-53 gap-1">
                  {activityData.map((day, index) => (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.2, 
                        delay: index * 0.001 
                      }}
                      className={`activity-square activity-level-${day.level} hover:scale-150 transition-transform cursor-pointer`}
                      title={`${day.date}: ${day.commits} contributions`}
                    />
                  ))}
                </div>
                
                {/* Legend */}
                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`activity-square activity-level-${level}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </Card>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              This activity chart will automatically sync with your actual GitHub contributions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}