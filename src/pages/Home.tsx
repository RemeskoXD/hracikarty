import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, History, ShieldCheck, Truck, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const craftRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: craftScroll } = useScroll({
    target: craftRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  
  const aboutImageY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);
  const craftImageY = useTransform(craftScroll, [0, 1], ["-20%", "20%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  // Split text animation
  const titleText = "Karty s tradicí.";
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10" />
          <img
            src="https://web2.itnahodinu.cz/karty/web/867878678.webp"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-60 grayscale-[30%]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-x-4 gap-y-2 mb-8"
            >
              {titleText.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={titleVariants}
                  className={`text-6xl md:text-8xl lg:text-[8rem] font-serif font-light text-white leading-[1.1] tracking-tight ${word === 'tradicí.' ? 'italic text-white/90' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-light"
            >
              Jsme hrdým pokračovatelem více než 140leté tradice výroby hracích karet s typickým koníkem. Standardní i reklamní karty, pexesa a pivní tácky.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
            >
              <a
                href="#produkty"
                className="group relative inline-flex items-center justify-center pb-2 text-sm uppercase tracking-[0.2em] font-medium text-white overflow-hidden transition-all"
              >
                <span className="relative flex items-center gap-3">
                  Prohlédnout produkty
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
              <Link
                to="/navody"
                className="group relative inline-flex items-center justify-center pb-2 text-sm uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white overflow-hidden transition-all"
              >
                <span className="relative flex items-center gap-3">
                  Novinky a návody
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Objevte více</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="bg-slate-950 text-white py-8 overflow-hidden flex whitespace-nowrap border-b border-white/5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 items-center text-xs uppercase tracking-[0.4em] font-medium text-white/40"
        >
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>Tradiční výroba</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>Od roku 1884</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>Česká kvalita</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>Olomouc</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Categories Section */}
      <section id="produkty" className="py-32 md:py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-light text-slate-900 mb-8 tracking-tight">
                Naše produkty
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Vyrábíme široké spektrum karetních a papírenských produktů s důrazem na nekompromisní kvalitu a tradici.
              </p>
            </div>
            <div className="hidden md:block w-32 h-px bg-slate-200 mb-4"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20"
          >
            {[
              { title: 'Standardní karty', image: 'https://web2.itnahodinu.cz/karty/web/vejir_karty_standard.webp', desc: 'Klasické mariášové a canastové karty' },
              { title: 'Reklamní karty', image: 'https://web2.itnahodinu.cz/karty/web/vejir_mycards.webp', desc: 'Karty s vlastním potiskem' },
              { title: 'Pexesa', image: 'https://web2.itnahodinu.cz/karty/web/vejir_pexesa_standard.webp', desc: 'Tradiční pexesa pro děti i dospělé' },
              { title: 'Pivní tácky', image: 'https://web2.itnahodinu.cz/karty/web/vejir_tacky.webp', desc: 'Originální pivní tácky' },
              { title: 'Speciální edice', image: 'https://web2.itnahodinu.cz/karty/web/ebcadc849f.webp', desc: 'Limitované a speciální edice karet' },
              { title: 'Fanshop', image: 'https://web2.itnahodinu.cz/karty/web/dhoasdhajsd.webp', desc: 'Trička, mikiny a další doplňky' },
            ].map((cat, i) => (
              <motion.a
                variants={item}
                key={cat.title}
                href="#"
                className={`group flex flex-col ${i % 3 === 1 ? 'lg:mt-16' : i % 3 === 2 ? 'lg:mt-32' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-50 mb-8 relative">
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-medium uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Prozkoumat</span>
                  </div>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-slate-900 group-hover:text-slate-600 transition-colors">{cat.title}</h3>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <p className="text-slate-500 text-sm font-light mt-2">{cat.desc}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="o-nas" ref={aboutRef} className="py-32 md:py-48 bg-slate-50 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-slate-400 mb-6">O nás</div>
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 leading-[1.1] tracking-tight">
                Tradice od roku <span className="italic text-slate-500">1884</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                Původní společnost Hrací karty s.r.o. byla založena v roce 2010, kdy převzala výrobu hracích karet od závodu Obchodní tiskárny Kolín. V roce 2011 se na trh dostaly první karty pod značkou Hrací karty, s. r. o.
              </p>
              <p className="text-lg text-slate-500 mb-16 leading-relaxed font-light">
                V současné době je výroba i distribuce karet soustředěna v Olomouci. Ročně odtud vyjede téměř milion balíčků karet, což z nás dělá největšího výrobce karet u nás.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {[
                  { icon: History, title: '140+ let', desc: 'Historie výroby' },
                  { icon: CheckCircle2, title: '1 000 000', desc: 'Balíčků ročně' },
                  { icon: ShieldCheck, title: 'Kvalita', desc: 'Speciální materiály' },
                  { icon: Truck, title: 'Distribuce', desc: 'Po celé ČR i do zahraničí' },
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-slate-200 rounded-full">
                      <feature.icon className="w-4 h-4 text-slate-900 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif mb-1 text-slate-900">{feature.title}</h3>
                      <p className="text-slate-500 text-sm font-light">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative lg:ml-10 h-[600px] md:h-[800px] overflow-hidden">
              <motion.div 
                style={{ y: aboutImageY }}
                className="absolute inset-0 -top-[20%] -bottom-[20%]"
              >
                <img
                  src="https://web2.itnahodinu.cz/karty/web/79869.webp"
                  alt="Kolekce karet"
                  className="w-full h-full object-cover grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 bg-white p-12 max-w-sm hidden md:block"
              >
                <p className="text-7xl font-serif font-light mb-4 tracking-tighter text-slate-900">1884</p>
                <div className="w-12 h-px bg-slate-200 mb-6"></div>
                <p className="text-slate-500 font-light text-sm leading-relaxed">Rok založení původní tradice výroby karet s koníkem.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section ref={craftRef} className="relative py-32 md:py-48 bg-slate-950 text-white flex items-center justify-center min-h-screen overflow-hidden">
        <motion.div style={{ y: craftImageY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/80 z-10" />
          <img
            src="https://web2.itnahodinu.cz/karty/web/isdhkasjhdioas.webp"
            alt="Craftsmanship"
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/40 mb-10">Řemeslo</div>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-light mb-12 leading-[1.1] tracking-tight">
              Dokonalost spočívá <br className="hidden md:block" />
              <span className="italic text-white/60">v detailech</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-16">
              Každá karta, která opustí naši výrobu, je výsledkem pečlivé práce, precizního tisku a vášně pro řemeslo, kterou si předáváme z generace na generaci.
            </p>
            
            <a
              href="#kontakt"
              className="group relative inline-flex items-center justify-center pb-2 text-sm uppercase tracking-[0.2em] font-medium text-white overflow-hidden transition-all"
            >
              <span className="relative flex items-center gap-3">
                Poptat vlastní karty
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog/Tutorials Highlight */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-light text-slate-900 mb-6 tracking-tight">
                Novinky & <span className="italic text-slate-400">Příběhy</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                to="/navody"
                className="hidden md:inline-flex items-center gap-3 pb-2 text-xs uppercase tracking-[0.2em] font-medium text-slate-900 relative group overflow-hidden"
              >
                <span className="relative flex items-center gap-3">
                  Všechny články 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16"
          >
            {[
              { title: 'Nové věci pro Vás ve Fanshopu', category: 'Novinky', image: 'https://web2.itnahodinu.cz/karty/web/owwdihauihdfiuas.webp' },
              { title: 'Karty Radosti - Spolupráce pro dobrou věc', category: 'Projekty', image: 'https://web2.itnahodinu.cz/karty/web/8687587579.webp' },
              { title: '140 let výroby karet s koníkem', category: 'Historie', image: 'https://web2.itnahodinu.cz/karty/web/79869.webp' },
            ].map((post, i) => (
              <motion.div variants={item} key={i}>
                <Link
                  to={`/navody/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex flex-col h-full"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 mb-8 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-900">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif text-slate-900 group-hover:text-slate-500 transition-colors leading-snug mb-4">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-3 text-slate-400 font-light text-sm group-hover:text-slate-900 transition-colors">
                      Číst více <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 md:hidden text-center">
            <Link
              to="/navody"
              className="inline-flex items-center justify-center gap-3 pb-2 text-xs uppercase tracking-[0.2em] font-medium text-slate-900 relative group overflow-hidden"
            >
              <span className="relative flex items-center gap-3">
                Všechny články 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
