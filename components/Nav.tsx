
import React from 'react';
import { AppScreen } from '../types';

interface NavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Nav: React.FC<NavProps> = ({ currentScreen, onNavigate }) => {
  const items = [
    { screen: AppScreen.DASHBOARD, icon: 'home', label: 'Home' },
    { screen: AppScreen.TRANSACTIONS, icon: 'receipt_long', label: 'Transactions' },
    { screen: AppScreen.BUDGETS, icon: 'pie_chart', label: 'Budgets' },
    { screen: AppScreen.SETTINGS, icon: 'settings', label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] max-w-[95%] w-auto">
      <div className="bg-neo-black dark:bg-[#1A1A1A] border-2 border-neo-black dark:border-white/20 p-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-neo-lg">
        {items.map(item => {
          const isActive = currentScreen === item.screen;
          return isActive ? (
            <button 
              key={item.screen}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-neo-black border-2 border-neo-black active:translate-y-[1px] transition-all"
            >
              <span className="material-symbols-outlined text-2xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              <span className="text-sm font-bold">{item.label}</span>
            </button>
          ) : (
            <button 
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 active:scale-95 transition-all group border border-transparent hover:border-white/20"
            >
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
