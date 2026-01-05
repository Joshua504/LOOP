
import React from 'react';
import { Budget, AppScreen } from '../types';

interface BudgetsProps {
  budgets: Budget[];
  onNavigate: (screen: AppScreen, id?: string) => void;
}

const Budgets: React.FC<BudgetsProps> = ({ budgets, onNavigate }) => {
  return (
    <div className="flex flex-col gap-6 p-5 pb-32">
      <section className="relative w-full rounded-2xl bg-accent-red border-2 border-neo-black shadow-neo p-6 flex flex-col gap-4 group">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-neo-black font-bold text-sm uppercase tracking-widest mb-1">Total Monthly Budget</p>
            <h1 className="text-neo-black text-5xl font-bold tracking-tighter">$3,250</h1>
          </div>
          <div className="bg-neo-white rounded-full p-2 border-2 border-neo-black rotate-12">
            <span className="material-symbols-outlined text-neo-black text-3xl">savings</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-neo-black uppercase tracking-wide">
            <span>Spent: $1,240</span>
            <span>Left: $2,010</span>
          </div>
          <div className="h-5 w-full rounded-full border-2 border-neo-black bg-white overflow-hidden relative">
            <div className="h-full w-[38%] bg-neo-black absolute top-0 left-0"></div>
            <div className="h-full w-full absolute top-0 left-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '10px 10px' }}></div>
          </div>
        </div>
      </section>

      <button 
        onClick={() => onNavigate(AppScreen.NEW_BUDGET)}
        className="w-full py-4 bg-neo-black text-white rounded-xl border-2 border-neo-black shadow-neo hover:translate-y-[2px] hover:shadow-none transition-all active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-2 group"
      >
        <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add_circle</span>
        <span className="font-bold text-lg uppercase tracking-wide">Add New Budget</span>
      </button>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-bold text-xl text-neo-black dark:text-white">Active Budgets</h3>
          <button className="text-sm font-bold underline decoration-2 underline-offset-2">Filter</button>
        </div>
        
        {budgets.map(budget => (
          <article 
            key={budget.id}
            onClick={() => onNavigate(AppScreen.EDIT_BUDGET, budget.id)}
            style={{ backgroundColor: budget.color }}
            className="flex flex-col gap-3 rounded-2xl border-2 border-neo-black p-4 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="size-12 flex items-center justify-center rounded-xl bg-white border-2 border-neo-black -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <span className="material-symbols-outlined text-neo-black">{budget.icon}</span>
                </div>
                <div>
                  <h4 className="text-neo-black font-bold text-lg leading-none">{budget.name}</h4>
                  <span className="text-xs font-bold text-neo-black/60">Limit: ${budget.limit.toFixed(2)}</span>
                </div>
              </div>
              <button className="size-8 flex items-center justify-center rounded-full bg-white border-2 border-neo-black hover:bg-gray-100">
                <span className="material-symbols-outlined text-sm font-bold">edit</span>
              </button>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span>${budget.spent} spent</span>
                <span className={`px-1 rounded-md border border-neo-black bg-white ${budget.spent/budget.limit > 0.9 ? 'text-red-600' : 'text-neo-black'}`}>
                  {Math.round((budget.spent / budget.limit) * 100)}%
                </span>
              </div>
              <div className="h-4 w-full rounded-full border-2 border-neo-black bg-white overflow-hidden">
                <div 
                  className="h-full bg-neo-black" 
                  style={{ width: `${Math.min(100, (budget.spent / budget.limit) * 100)}%` }}
                ></div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Budgets;
