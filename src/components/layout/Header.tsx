import * as React from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 bg-transparent flex items-center justify-between px-12 sticky top-0 z-40">
      <div className="flex items-center gap-8 flex-1">
        <div className="relative group max-w-md w-full">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
           <input 
             type="text" 
             placeholder="Search..." 
             className="w-full bg-white border border-orange-100 pl-11 pr-4 py-2.5 rounded-2xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 placeholder:text-slate-300 transition-all shadow-sm"
           />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
           <button className="p-2.5 bg-white text-slate-400 hover:text-orange-600 rounded-2xl border border-orange-100 shadow-sm transition-all">
              <Settings size={20} />
           </button>
           <button className="relative p-2.5 bg-white text-slate-400 hover:text-orange-600 rounded-2xl border border-orange-100 shadow-sm transition-all">
              <LogOut size={20} />
           </button>
        </div>

        <div className="flex items-center gap-4 pl-6 border-l border-orange-100">
           <div className="w-11 h-11 rounded-full bg-slate-900 overflow-hidden ring-4 ring-white shadow-lg overflow-hidden flex items-center justify-center">
              <User className="text-white" size={24} />
           </div>
           <div className="hidden md:block">
              <p className="text-[13px] font-black text-slate-900 leading-none">System Admin</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Access</p>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
