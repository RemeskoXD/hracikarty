import { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Produkty', id: 'produkty', suit: '♠', color: 'text-slate-900', rotate: -8 },
    { name: 'O nás', id: 'o-nas', suit: '♥', color: 'text-red-700', rotate: -2 },
    { name: 'Výroba', id: 'technologie', suit: '♣', color: 'text-slate-900', rotate: 4 },
    { name: 'Magazín', id: 'navody', path: '/navody', suit: '♦', color: 'text-red-700', rotate: 10 },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setClickedId(link.id);

    // Throw animation takes about 600ms
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setClickedId(null);
      
      if (link.path) {
        navigate(link.path);
      } else {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 600);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-700 ${isScrolled ? 'h-24' : 'h-32'}`}>
          
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50 group">
            {!logoError ? (
              <img 
                src="https://web2.itnahodinu.cz/karty/web/LOGO1.webp" 
                alt="Hrací karty" 
                className={`h-16 md:h-20 w-auto object-contain transition-all duration-500 ${!isScrolled ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : ''}`}
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <span className={`font-serif text-2xl leading-none tracking-wide transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
                  Hrací karty
                </span>
                <span className={`text-[9px] font-medium tracking-[0.3em] uppercase mt-1.5 transition-colors duration-500 ${isScrolled ? 'text-slate-500' : 'text-white/80 drop-shadow-md'}`}>
                  Založeno 1884
                </span>
              </>
            )}
          </Link>

          {/* Desktop Nav (Cards) */}
          <nav className="hidden md:flex items-center h-full">
            <div className="flex items-center mt-4">
              {navLinks.map((link, i) => {
                const isClicked = clickedId === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.path || `/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={false}
                    animate={isClicked ? {
                      y: -500,
                      x: (Math.random() - 0.5) * 300,
                      rotate: (Math.random() - 0.5) * 720,
                      scale: 0.5,
                      opacity: 0,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    } : {
                      y: isScrolled ? -20 : 0,
                      rotate: isScrolled ? (i - 1.5) * 2 : link.rotate, // Tighter fan when scrolled
                      scale: isScrolled ? 0.9 : 1,
                    }}
                    whileHover={!isClicked ? {
                      y: isScrolled ? 10 : -20,
                      rotate: 0,
                      scale: 1.05,
                      zIndex: 50,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    } : {}}
                    className={`relative bg-white border border-slate-200 rounded-xl shadow-lg flex flex-col justify-between p-2 w-24 h-36 ${link.color} ${i !== 0 ? '-ml-8' : ''} transform-gpu cursor-pointer`}
                    style={{
                      zIndex: i,
                      transformOrigin: "bottom center"
                    }}
                  >
                    {/* Inner Border */}
                    <div className="absolute inset-1 border border-slate-100 rounded-lg pointer-events-none"></div>
                    
                    {/* Top Suit */}
                    <div className="text-base font-bold leading-none relative z-10">{link.suit}</div>
                    
                    {/* Center Text */}
                    <div className="flex-grow flex items-center justify-center relative z-10">
                      <span className="font-serif text-sm font-medium text-center leading-tight px-1">
                        {link.name}
                      </span>
                    </div>
                    
                    {/* Bottom Suit */}
                    <div className="text-base font-bold leading-none self-end rotate-180 relative z-10">{link.suit}</div>
                  </motion.a>
                );
              })}
            </div>

            {/* Shopping Bag & Divider */}
            <div className="ml-10 flex items-center gap-6">
              <div className={`w-px h-8 transition-colors duration-500 ${isScrolled ? 'bg-slate-200' : 'bg-white/30'}`}></div>
              <button className={`p-2 transition-all relative group ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}>
                <ShoppingBag className="w-6 h-6 stroke-[1.5] group-hover:scale-110 transition-transform" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full border border-white"></span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button className={`p-2 transition-all relative ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full border border-white"></span>
            </button>
            <button
              className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7 stroke-[1.5]" /> : <Menu className="w-7 h-7 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav (Card Fan) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full flex items-center justify-center mt-20">
              {navLinks.map((link, i) => {
                const isClicked = clickedId === link.id;
                const angle = (i - (navLinks.length - 1) / 2) * 20; // Fan spread
                
                return (
                  <motion.a
                    key={link.id}
                    href={link.path || `/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ y: 800, rotate: 0, scale: 0.5 }}
                    animate={isClicked ? {
                      y: -800,
                      rotate: angle + 360,
                      scale: 1.2,
                      opacity: 0,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    } : {
                      y: Math.abs(angle) * 1.5, // Drop outer cards slightly
                      x: angle * 1.5, // Spread horizontally
                      rotate: angle,
                      scale: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15, 
                        delay: i * 0.1 
                      }
                    }}
                    whileHover={!isClicked ? {
                      y: -40,
                      scale: 1.1,
                      zIndex: 50,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    } : {}}
                    className={`absolute bg-white border-2 border-slate-200 rounded-2xl shadow-2xl flex flex-col justify-between p-4 w-48 h-72 ${link.color} cursor-pointer`}
                    style={{
                      zIndex: i + 10,
                      transformOrigin: "bottom center"
                    }}
                  >
                    <div className="absolute inset-1.5 border border-slate-100 rounded-xl pointer-events-none"></div>
                    
                    <div className="text-3xl font-bold leading-none relative z-10">{link.suit}</div>
                    <div className="flex-grow flex items-center justify-center relative z-10">
                      <span className="font-serif text-3xl font-medium text-center leading-tight">
                        {link.name}
                      </span>
                    </div>
                    <div className="text-3xl font-bold leading-none self-end rotate-180 relative z-10">{link.suit}</div>
                  </motion.a>
                );
              })}
            </div>
            
            {/* Close hint */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.2em] font-medium"
            >
              Vyberte kartu
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
