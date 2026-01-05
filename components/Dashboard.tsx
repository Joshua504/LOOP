
import React from 'react';
import { AppScreen, Budget } from '../types';

interface DashboardProps {
  budgets: Budget[];
  onNavigate: (screen: AppScreen, id?: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ budgets, onNavigate }) => {
  return (
    <div className="flex flex-col gap-6 p-5 pb-32">
      <section className="relative w-full rounded-2xl bg-primary border-2 border-neo-black shadow-neo p-6 flex flex-col items-center justify-center text-center group">
        <div className="absolute top-3 right-3">
          <span className="material-symbols-outlined text-neo-black animate-bounce">savings</span>
        </div>
        <p className="text-neo-black font-bold text-sm uppercase tracking-widest mb-1">Left to Spend</p>
        <h1 className="text-neo-black text-5xl font-bold tracking-tighter mb-2">$1,240<span className="text-2xl opacity-60">.00</span></h1>
        <div className="flex items-center gap-2 bg-neo-white/30 px-3 py-1 rounded-full border border-neo-black/20">
          <span className="material-symbols-outlined text-neo-black text-sm">trending_up</span>
          <span className="text-xs font-bold text-neo-black">+12% vs last month</span>
        </div>
      </section>

      <section className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {['This Month', 'This Week', 'Custom'].map((filter, i) => (
          <button 
            key={filter}
            className={`shrink-0 px-6 py-2 rounded-full border-2 border-neo-black shadow-neo-sm text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-neo-black text-white' : 'bg-neo-white dark:bg-[#2C241B] text-neo-black dark:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-xl border-2 border-neo-black bg-accent-red dark:bg-[#5C3A32] p-4 shadow-neo-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-neo-black text-white p-2 rounded-lg border-2 border-white/20 shrink-0">
              <span className="material-symbols-outlined block">warning</span>
            </div>
            <div>
              <h3 className="text-neo-black dark:text-white font-bold text-lg leading-tight">Overspending Alert!</h3>
              <p className="text-neo-black/80 dark:text-white/80 text-sm font-medium mt-1">Dining budget exceeded by $50.</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate(AppScreen.BUDGETS)}
            className="w-full sm:w-auto px-5 py-2 bg-neo-white dark:bg-[#2C241B] text-neo-black dark:text-white text-sm font-bold rounded-full border-2 border-neo-black shadow-neo-sm hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            Check Details
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {budgets.map(budget => (
          <div 
            key={budget.id}
            onClick={() => onNavigate(AppScreen.EDIT_BUDGET, budget.id)}
            style={{ backgroundColor: budget.color }}
            className="flex flex-col gap-3 rounded-2xl border-2 border-neo-black p-4 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div className="size-10 flex items-center justify-center rounded-full bg-white border-2 border-neo-black">
                <span className="material-symbols-outlined text-neo-black">{budget.icon}</span>
              </div>
              <span className="text-xs font-bold border border-neo-black px-2 py-0.5 rounded-md bg-white text-neo-black">
                {Math.round((budget.spent / budget.limit) * 100)}%
              </span>
            </div>
            <div>
              <p className="text-neo-black font-bold text-lg leading-tight">{budget.name}</p>
              <p className="text-neo-black/70 font-bold text-xs mb-3">${budget.spent} / ${budget.limit}</p>
              <div className="h-3 w-full rounded-full border-2 border-neo-black bg-white overflow-hidden">
                <div 
                  className="h-full bg-neo-black" 
                  style={{ width: `${Math.min(100, (budget.spent / budget.limit) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="fixed bottom-28 right-6 z-40">
        <button 
          onClick={() => onNavigate(AppScreen.NEW_BUDGET)}
          className="flex size-14 items-center justify-center rounded-full bg-primary text-neo-black border-[3px] border-neo-black shadow-neo-lg hover:translate-y-[2px] hover:shadow-neo transition-all active:translate-y-[4px] active:shadow-none group"
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300" style={{ fontSize: '32px', fontWeight: 700 }}>add</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
