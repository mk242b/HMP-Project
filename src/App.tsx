import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const gifs = [
  "https://i.pinimg.com/originals/3c/e8/84/3ce884bb29ad1909a2c253354497420f.gif",
  "https://i.pinimg.com/originals/a0/49/60/a04960f00d4c96df70bdd04aa9b58dbd.gif",
  "https://media.tenor.com/NqpgfoS_83gAAAAM/mochi-mochimochi.gif",
  "https://media.tenor.com/C35t4Pf5GlgAAAAj/peach-and-goma-cute.gif",
  "https://media.tenor.com/3fYjK5PvxKIAAAAM/goma-cat-peach-loves-goma.gif"
];

const messages = [
  "Do you love me?",
  "Please think again 🥺",
  "For real, don't leave me alone 😭",
  "Please please please 🙏",
  "Okay, now I'm hiding the 'No' button! 😤"
];

const successGif = "https://media.tenor.com/z-eg2uhf-b0AAAAM/peach-cat-kiss.gif";

export default function App() {
  const [view, setView] = useState<'envelope' | 'question' | 'success'>('envelope');
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    if (noCount < 4) {
      setNoCount(noCount + 1);
    }
  };

  const currentGif = gifs[Math.min(noCount, gifs.length - 1)];
  const currentMessage = messages[Math.min(noCount, messages.length - 1)];

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-[#FFCAD4] font-['Helvetica_Neue',Arial,sans-serif]">
      {/* Background Decorative Hearts */}
      <div className="absolute top-10 left-10 text-[#FFCAD4] opacity-40 transform -rotate-12 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
      <div className="absolute bottom-20 right-20 text-[#FFD1DC] opacity-30 transform rotate-45 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
      <div className="absolute top-1/2 left-20 text-[#FBC4AB] opacity-20 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>

      <div className="w-full max-w-[380px] h-full sm:h-[680px] max-h-[850px] bg-white rounded-[48px] shadow-[0_35px_60px_-15px_rgba(255,182,193,0.3)] border-[12px] border-[#FFE5EC] overflow-hidden relative flex flex-col items-center justify-center py-12 px-6">
        {/* Status Bar Mockup */}
        <div className="absolute top-0 left-0 right-0 h-8 flex justify-end items-center px-10 pt-4 pointer-events-none">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FFE5EC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFE5EC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFE5EC]"></div>
          </div>
        </div>
        <AnimatePresence mode="wait">
        {view === 'envelope' && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.5 } }}
            className="flex flex-col items-center cursor-pointer select-none"
            onClick={() => setView('question')}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative w-48 h-32 bg-[#FFB3C1] rounded-[24px] shadow-lg shadow-pink-200 flex items-center justify-center overflow-hidden border-4 border-[#FF85A2]"
            >
              {/* Envelope Flap styling */}
              <div className="absolute top-0 w-0 h-0 border-l-[96px] border-l-transparent border-r-[96px] border-r-transparent border-t-[60px] border-t-[#FF85A2] z-10" />
              <div className="absolute top-[-2px] w-0 h-0 border-l-[96px] border-l-transparent border-r-[96px] border-r-transparent border-t-[60px] border-t-[#FFE5EC] z-20" />
              
              <Heart className="w-12 h-12 text-white fill-white z-30 animate-pulse mt-4" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg font-serif italic text-[#6B4E53] text-center px-4 leading-snug"
            >
              You have a message! Tap to open ❤️
            </motion.p>
          </motion.div>
        )}

        {view === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center max-w-md w-full"
          >
            <div className="w-56 h-56 bg-[#FFF0F3] rounded-[32px] flex items-center justify-center border-4 border-dashed border-[#FFB3C1] mb-8 relative">
              <motion.img
                key={currentGif}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                src={currentGif}
                alt="Cute cat gif"
                className="w-full h-full object-cover rounded-[28px] z-10"
                draggable="false"
              />
              {/* Artistic Splatter Effect */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#FFCAD4] rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FFE5EC] rounded-full opacity-80 z-0"></div>
            </div>
            
            <motion.h1 
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-serif italic text-[#6B4E53] text-center px-4 leading-snug mb-10 h-16 flex items-center justify-center"
            >
              "{currentMessage}"
            </motion.h1>

            <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 min-h-[160px]">
              <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF85A2] hover:bg-[#FF4D6D] text-white font-bold rounded-[24px] shadow-lg shadow-pink-200 transition-colors flex items-center justify-center z-10 max-w-full"
                animate={{ 
                  fontSize: `${20 + noCount * 4}px`,
                  minWidth: `${120 + noCount * 30}px`,
                  minHeight: `${64 + noCount * 20}px`,
                }}
                transition={{ type: "spring", bounce: 0.5 }}
                onClick={() => setView('success')}
              >
                {noCount === 0 ? 'Yes' : 'YES! ❤️'}
              </motion.button>

              {noCount < 4 && (
                <motion.button
                  layout
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-200 text-gray-500 font-bold rounded-[24px] shadow-md hover:bg-gray-300 transition-colors flex items-center justify-center overflow-hidden break-normal px-4"
                  animate={{
                     fontSize: `${Math.max(14, 20 - noCount * 2)}px`,
                     minWidth: `${Math.max(72, 120 - noCount * 15)}px`,
                     minHeight: `${Math.max(44, 64 - noCount * 6)}px`,
                     opacity: Math.max(0.7, 1 - noCount * 0.1),
                     borderRadius: `${Math.max(12, 24 - noCount * 2)}px`
                  }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  onClick={handleNoClick}
                >
                  No
                </motion.button>
              )}
            </div>
          </motion.div>
        )}

        {view === 'success' && (
          <SuccessView />
        )}
      </AnimatePresence>

      {/* Bottom Decoration for main canvas container */}
      <div className="absolute bottom-6 w-24 h-1.5 bg-[#FFE5EC] rounded-full"></div>
      </div>
    </div>
  );
}

function SuccessView() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fff1f2']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fff1f2']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-start w-full h-full text-center overflow-y-auto [&::-webkit-scrollbar]:hidden pt-2 pb-8 px-1 sm:px-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="w-48 h-48 shrink-0 bg-[#FFF0F3] rounded-[32px] flex items-center justify-center border-4 border-dashed border-[#FFB3C1] mb-8 mt-4 relative">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          src={successGif}
          alt="Happy bears hugging"
          className="w-full h-full object-cover rounded-[28px] z-10 relative"
          draggable="false"
        />
        {/* Artistic Splatter Effect */}
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#FFCAD4] rounded-full opacity-50 z-0"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FFE5EC] rounded-full opacity-80 z-0"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative w-full max-w-[320px] bg-[#fdf8f9] shadow-[0_8px_30px_rgb(255,182,193,0.3)] rounded-r-xl rounded-l-md border border-pink-200 overflow-hidden shrink-0 mb-8"
      >
        {/* Vertical red margin line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-pink-300/50 z-0"></div>
        
        {/* Notebook content */}
        <div 
          className="pt-8 pb-10 pl-10 sm:pl-12 pr-4 text-[#6B4E53] font-serif relative z-10 text-left text-[14px] sm:text-[15px]"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(255, 179, 193, 0.4) 31px, rgba(255, 179, 193, 0.4) 32px)',
            backgroundAttachment: 'local',
            lineHeight: '32px',
          }}
        >
          I wanna talk u smth bby <br />
          D achein krla atwin mr koko mhr khk dh dwy sake soe ag lok mi dh dwy atwt sry pr nww <br />
          Btw zakrr sa lr pyw ka htl ka bby ko sake win srr ny khk dh pr <br />
          But ho case gyi fik khk ya dae atwt ll tgl sry pr kwr tgl top koko ll bby ko chik pr dl <br />
          fwint pyw foc achein m tan thy vuu htin loc prr sry pr nww <br />
          <br />
          <span className="font-bold text-[#FF4D6D] text-[15px] sm:text-[16px]">
            Aynnn chil dl nww bby achein dwy akyrr gyii anrr mhr atuu” shi thwr chin dl ek dh fik nai m lh? 
          </span>
          <Heart className="inline-block w-5 h-5 fill-[#FF85A2] animate-bounce align-middle ml-2 -mt-1" />
        </div>
      </motion.div>
    </motion.div>
  );
}
