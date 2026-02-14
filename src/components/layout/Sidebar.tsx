import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, LayoutDashboard, Wallet, 
  Landmark, Settings, ChevronLeft, ChevronRight, 
  Activity, Zap, History, CreditCard, PieChart as PieIcon
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ activeTab, onTabChange, isCollapsed, onToggle }: SidebarProps) => {
  const navItems = [
    { id: 'overview', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'npa-forecast', name: 'Overview', icon: PieIcon },
    { id: 'portfolio', name: 'Wallet', icon: Wallet },
    { id: 'intervention', name: 'Loans', icon: Activity },
    { id: 'reputation', name: 'Investments', icon: Landmark },
    { id: 'settings', name: 'Cards', icon: CreditCard },
  ];

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? 100 : 260 }}
      className="h-screen bg-white text-slate-500 flex flex-col transition-all duration-300 relative z-50 border-r border-orange-100"
    >
      {/* Brand Header */}
      <div className="h-24 flex items-center px-8">
        <div className="bg-orange-600 p-2.5 rounded-2xl shrink-0 shadow-lg shadow-orange-500/20">
          <ShieldCheck className="text-white h-6 w-6" />
        </div>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-4 truncate"
          >
            <h1 className="text-slate-900 font-extrabold text-xl tracking-tighter leading-none">Risk-AI</h1>
          </motion.div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group relative ${
              activeTab === item.id 
                ? 'bg-orange-50 text-orange-600 font-bold' 
                : 'hover:bg-orange-50/50 hover:text-slate-900'
            }`}
          >
            <item.icon size={20} className={`${activeTab === item.id ? 'text-orange-600' : 'text-slate-400'}`} />
            {!isCollapsed && (
              <span className="text-[14px] tracking-tight truncate">
                {item.name}
              </span>
            )}
            {activeTab === item.id && !isCollapsed && (
              <div className="absolute left-0 w-1 h-6 bg-orange-600 rounded-r-full" />
            )}
          </button>
        ))}
      </nav>

      {/* Ad Card (from image) */}
      {!isCollapsed && (
        <div className="p-6">
          <div className="bg-gradient-to-br from-orange-100 to-[#FDEBD0] p-5 rounded-[2rem] relative overflow-hidden group border border-orange-200/50 shadow-sm">
             <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
             <p className="text-orange-600 font-black text-2xl leading-tight relative z-10">100%</p>
             <p className="text-orange-900 font-bold text-xs relative z-10 mb-1">Paperless Insight</p>
             <p className="text-[9px] text-orange-800/60 font-bold uppercase tracking-widest relative z-10 mb-4 leading-tight">Instant Risk<br/>Approval Engine</p>
             <button className="relative z-10 w-full bg-slate-900 text-white py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all">
               Apply now
             </button>
          </div>
        </div>
      )}

      {/* Footer / Toggle */}
      <div className="p-6">
        <button 
          onClick={onToggle}
          className="w-full h-12 flex items-center justify-center rounded-2xl bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-all text-slate-400"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
