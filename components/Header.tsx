
import React from 'react';
import { AppScreen } from '../types';
import { PROFILE_IMG } from '../constants';

interface HeaderProps {
  onNavigate: (screen: AppScreen) => void;
  screen: AppScreen;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, screen }) => {
  const titles: Record<string, { label: string, title: string }> = {
    [AppScreen.DASHBOARD]: { label: 'Hello, Alex!', title: 'Money Moves' },
    [AppScreen.TRANSACTIONS]: { label: 'My Wallet', title: 'Transactions' },
    [AppScreen.BUDGETS]: { label: 'Plan Ahead', title: 'Budget Manager' },
    [AppScreen.SETTINGS]: { label: 'User Profile', title: 'Settings' },
  };

  const { label, title } = titles[screen] || titles[AppScreen.DASHBOARD];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-neo-white dark:bg-[#2C241B] px-5 py-4 border-b-2 border-neo-black dark:border-white/10">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full border-2 border-neo-black dark:border-white overflow-hidden bg-primary/20 cursor-pointer" onClick={() => onNavigate(AppScreen.SETTINGS)}>
          <img className="h-full w-full object-cover" src={PROFILE_IMG} alt="Avatar" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-neo-black/60 dark:text-white/60">{label}</span>
          <h2 className="text-neo-black dark:text-white text-xl font-bold leading-none tracking-tight">{title}</h2>
        </div>
      </div>
      <button 
        onClick={() => onNavigate(AppScreen.NOTIFICATIONS)}
        className="flex size-10 items-center justify-center rounded-full bg-primary border-2 border-neo-black shadow-neo-sm hover:translate-y-[2px] hover:shadow-none transition-all active:translate-y-[2px] active:shadow-none"
      >
        <span className="material-symbols-outlined text-neo-black">notifications</span>
      </button>
    </header>
  );
};

export default Header;
