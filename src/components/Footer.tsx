import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex flex-col group inline-block">
              {!logoError ? (
                <img 
                  src="https://web2.itnahodinu.cz/karty/web/LOGO1.webp" 
                  alt="Hrací karty" 
                  className="h-24 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <>
                  <span className="font-serif text-3xl text-slate-900 tracking-tight">
                    Hrací karty
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase mt-2 text-slate-400 font-medium">
                    Založeno 1884
                  </span>
                </>
              )}
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm font-light">
              Společnost Hrací karty 1884 s.r.o. je hrdým pokračovatelem již více než 140ti leté tradice výroby hracích karet s typickým koníkem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 group"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 group"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-slate-900 font-serif text-xl mb-8 tracking-tight">Produkty</h3>
            <ul className="space-y-5 text-sm font-light">
              {['Standardní karty', 'Reklamní karty', 'Pexesa', 'Pivní tácky', 'Fanshop'].map((item) => (
                <li key={item}>
                  <a href="#" className="group relative inline-flex items-center pb-1 text-slate-500 hover:text-slate-900 transition-colors">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-serif text-xl mb-8 tracking-tight">Informace</h3>
            <ul className="space-y-5 text-sm font-light">
              {['O nás', 'Technologie', 'Obchodní podmínky', 'Ochrana osobních údajů', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href="#" className="group relative inline-flex items-center pb-1 text-slate-500 hover:text-slate-900 transition-colors">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 font-serif text-xl mb-8 tracking-tight">Kontakt</h3>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                <span className="leading-relaxed text-slate-500">Hrací karty 1884 s.r.o.<br />Olomouc<br />Česká republika</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-slate-400" />
                <a href="#" className="group relative inline-flex items-center pb-1 text-slate-500 hover:text-slate-900 transition-colors">
                  +420 123 456 789
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="#" className="group relative inline-flex items-center pb-1 text-slate-500 hover:text-slate-900 transition-colors">
                  info@hracikarty.cz
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Hrací karty 1884 s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Vytvořil: Mescon digital s.r.o.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
