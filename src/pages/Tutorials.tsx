import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ChevronRight } from 'lucide-react';

export default function Tutorials() {
  const posts = [
    { title: 'Nové věci pro Vás ve Fanshopu', category: 'Novinky', image: 'https://web2.itnahodinu.cz/karty/web/owwdihauihdfiuas.webp', date: '12. 10. 2024', excerpt: 'Máme pro Vás mariášové karty, speciálně vydané ke 140ti letům výroby karet s koníkem. Dále speciální karetní škatulku a oblečení.' },
    { title: 'Karty Radosti - Spolupráce pro dobrou věc', category: 'Projekty', image: 'https://web2.itnahodinu.cz/karty/web/8687587579.webp', date: '05. 10. 2024', excerpt: 'Byli jsme osloveni, zda nechceme být součástí projektu nadačního fondu Kapka naděje na podporu dětí.' },
    { title: '140 let výroby karet s koníkem', category: 'Historie', image: 'https://web2.itnahodinu.cz/karty/web/79869.webp', date: '28. 09. 2024', excerpt: 'Přečtěte si o naší bohaté historii, která sahá až do roku 1884 a pokračuje dodnes v Olomouci.' },
    { title: 'Jak se vyrábí hrací karty', category: 'Technologie', image: 'https://web2.itnahodinu.cz/karty/web/isdhkasjhdioas.webp', date: '15. 09. 2024', excerpt: 'Nahlédněte pod pokličku naší výroby. Od návrhu přes tisk až po finální lakování a řezání.' },
    { title: 'Pexesa pro nejmenší', category: 'Produkty', image: 'https://web2.itnahodinu.cz/karty/web/vejir_pexesa_standard.webp', date: '01. 09. 2024', excerpt: 'Představujeme novou kolekci pexes s tradičními i moderními motivy pro celou rodinu.' },
    { title: 'Pivní tácky na míru', category: 'Produkty', image: 'https://web2.itnahodinu.cz/karty/web/vejir_tacky.webp', date: '20. 08. 2024', excerpt: 'Vyrábíme pivní tácky z kvalitní lepenky s možností vlastního potisku pro vaši restauraci či pivovar.' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <div className="pt-32 pb-32 md:pt-48 md:pb-48 bg-white min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-10 relative">
          <div className="absolute -top-20 -left-10 text-[15rem] font-serif font-bold text-slate-50 opacity-50 select-none pointer-events-none z-0 whitespace-nowrap hidden md:block tracking-tighter">
            Příběhy
          </div>
          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-slate-400 mb-6"
            >
              Magazín
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-light text-slate-900 mb-8 tracking-tight leading-[1.1]"
            >
              Novinky & <span className="italic text-slate-400">Příběhy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed"
            >
              Sledujte dění kolem tradiční výroby hracích karet, objevujte nové produkty a ponořte se do zajímavostí z naší bohaté historie.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 64 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden md:block h-px bg-slate-200 mb-4"
          ></motion.div>
        </div>

        {/* Filters & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20 border-b border-slate-100 pb-8"
        >
          <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
            {['Vše', 'Novinky', 'Historie', 'Produkty', 'Projekty'].map((filter, i) => (
              <button
                key={filter}
                className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap relative group pb-2 ${
                  i === 0 
                    ? 'text-slate-900' 
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {filter}
                {i === 0 && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900"></span>}
                {i !== 0 && <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            <input
              type="text"
              placeholder="Hledat..."
              className="w-full pl-8 pr-4 py-2 border-b border-slate-200 bg-transparent focus:outline-none focus:border-slate-900 transition-colors font-sans text-sm text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
        >
          {posts.map((post, i) => (
            <motion.div variants={item} key={post.title}>
              <Link
                to={`/navody/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group flex flex-col h-full ${i % 3 === 1 ? 'lg:mt-16' : i % 3 === 2 ? 'lg:mt-32' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative mb-8">
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-medium uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Číst článek</span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-900 z-20">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-slate-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 line-clamp-2 flex-grow leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-slate-900 font-medium text-xs mt-auto uppercase tracking-[0.2em] group-hover:text-slate-500 transition-colors">
                    Číst článek 
                    <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 flex justify-center"
        >
          <button className="group relative inline-flex items-center justify-center pb-2 text-xs uppercase tracking-[0.2em] font-medium text-slate-900 overflow-hidden transition-all">
            <span className="relative flex items-center gap-3">
              Načíst další články
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
          </button>
        </motion.div>

      </div>
    </div>
  );
}
