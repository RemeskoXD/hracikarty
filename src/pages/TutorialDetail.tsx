import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function TutorialDetail() {
  const { slug } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // V reálné aplikaci by se data načítala podle slugu
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Neznámý článek';

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen relative">
      
      {/* Hero Header with Parallax */}
      <div className="relative h-[80vh] min-h-[600px] flex items-end justify-center overflow-hidden bg-slate-950 pt-24">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10" />
          <img 
            src="https://web2.itnahodinu.cz/karty/web/8687587579.webp" 
            alt={title} 
            className="w-full h-full object-cover opacity-60 grayscale-[30%]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <Link 
            to="/navody" 
            className="inline-flex items-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Zpět na přehled
          </Link>

          <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/60 mb-8">
            <span className="text-slate-900 bg-white px-4 py-2 font-medium">Novinka</span>
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> 12. 10. 2024</span>
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 5 min čtení</span>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-3 gap-y-2"
          >
            {title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={titleVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-tight"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 py-24 md:py-32">
        
        {/* Author Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col sm:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-100"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-slate-50 overflow-hidden rounded-full">
              <img src="https://picsum.photos/seed/author/100/100" alt="Autor" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-serif text-slate-900 text-xl mb-1">Redakce Hrací Karty</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">Tradiční výroba od roku 1884</div>
            </div>
          </div>
          <button className="group relative inline-flex items-center justify-center pb-2 text-xs uppercase tracking-[0.2em] font-medium text-slate-900 overflow-hidden transition-all">
            <span className="relative flex items-center gap-3">
              <Share2 className="w-4 h-4" />
              Sdílet článek
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
          </button>
        </motion.div>

        {/* Article Body */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:tracking-tight prose-a:text-slate-900 hover:prose-a:text-slate-600 prose-img:shadow-sm"
        >
          <p className="text-2xl md:text-3xl text-slate-900 font-serif font-light leading-relaxed mb-16 italic">
            "Máme pro Vás mariášové karty, speciálně vydané ke 140ti letům výroby karet s koníkem. Dále speciální karetní škatulku, kde najdete zajímavé reprinty karet i jednu novinku."
          </p>

          <h2 className="text-4xl mt-20 mb-10 text-slate-900">Tradiční výroba v Olomouci</h2>
          <p className="text-slate-600 font-light leading-relaxed mb-8">
            Společnost Hrací karty 1884 s.r.o. je hrdým pokračovatelem již více než 140ti leté tradice výroby hracích karet s typickým koníkem. Standardní hrací karty, reklamní hrací karty, ale i pexesa a pivní tácky vyrábíme s použitím kvalitních a speciálních materiálů, které vždy vedou k perfektnímu a originálnímu výsledku.
          </p>
          
          <div className="bg-slate-50 p-12 my-16 border border-slate-100 relative overflow-hidden">
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-slate-400 mb-6">Věděli jste, že?</div>
            <p className="mb-0 text-slate-900 font-serif font-light text-2xl relative z-10 leading-relaxed">
              Ročně z naší výroby v Olomouci vyjede téměř milion balíčků karet. To z nás dělá největšího výrobce karet u nás.
            </p>
          </div>

          <h2 className="text-4xl mt-20 mb-10 text-slate-900">Naše produkty</h2>
          <p className="text-slate-600 font-light leading-relaxed mb-10">
            Uzavřený technologický proces výroby dává velmi široké možnosti spolupráce nejen při výrobě hracích karet, ale v celém spektru papírenské a polygrafické produkce.
          </p>
          <ul className="space-y-6 my-12 list-none pl-0">
            {[
              { title: 'Standardní karty', desc: 'Klasické mariášové, canastové a pokerové karty.' },
              { title: 'Reklamní karty', desc: 'Možnost vlastního potisku pro firmy a organizace.' },
              { title: 'Pexesa a tácky', desc: 'Tradiční papírenské produkty pro zábavu i gastro.' }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-6 bg-white p-8 border border-slate-100 transition-colors hover:bg-slate-50">
                <div className="w-10 h-10 bg-slate-100 flex items-center justify-center shrink-0 mt-1 rounded-full">
                  <ChevronRight className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <strong className="block text-xl text-slate-900 font-serif mb-2">{item.title}</strong>
                  <span className="text-slate-500 font-light">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-4xl mt-20 mb-10 text-slate-900">Závěr</h2>
          <p className="text-slate-600 font-light leading-relaxed">
            Tým lidí, které vyrábět hrací karty opravdu baví, dává naději, že tradice výroby tradičních hracích karet v České republice zůstane zachována i pro další generace.
          </p>
        </motion.article>

        {/* Tags */}
        <div className="mt-32 pt-12 border-t border-slate-100 flex flex-wrap gap-4">
          {['Historie', 'Výroba', 'Olomouc', 'Tradice', '1884'].map(tag => (
            <span key={tag} className="px-6 py-3 bg-white text-slate-500 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white cursor-pointer transition-colors border border-slate-200">
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
