
import React from 'react';
import { Transaction, AppScreen } from '../types';

interface TransactionsProps {
  transactions: Transaction[];
  onNavigate: (screen: AppScreen, id?: string) => void;
}

const Transactions: React.FC<TransactionsProps> = ({ transactions, onNavigate }) => {
  const grouped = transactions.reduce((acc, t) => {
    if (!acc[t.date]) acc[t.date] = [];
    acc[t.date].push(t);
    return acc;
  }, {} as Record<string, Transaction[]>);

  return (
    <div className="flex flex-col gap-6 p-5 pb-32">
      <section className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 pt-1">
        {['All', 'Income', 'Expenses', 'Pending'].map((filter, i) => (
          <button 
            key={filter}
            className={`shrink-0 px-6 py-2 rounded-full border-2 border-neo-black shadow-neo-sm text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-neo-black text-white' : 'bg-neo-white dark:bg-[#2C241B] text-neo-black dark:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="relative w-full rounded-2xl bg-accent-blue dark:bg-[#1e2a45] border-2 border-neo-black shadow-neo p-5 flex items-center justify-between">
        <div>
          <p className="text-neo-black/80 dark:text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Total Spent (Oct)</p>
          <h2 className="text-neo-black dark:text-white text-3xl font-bold tracking-tighter">-$3,420<span className="text-lg opacity-60">.50</span></h2>
        </div>
        <div className="size-12 bg-white rounded-full border-2 border-neo-black flex items-center justify-center">
          <span className="material-symbols-outlined text-neo-black">calendar_month</span>
        </div>
      </section>

      <div className="flex flex-col gap-6">
        {/* Fix: Casting Object.entries result to ensure correct type inference for 'items' */}
        {(Object.entries(grouped) as [string, Transaction[]][]).map(([date, items]) => (
          <div key={date}>
            <h3 className="text-neo-black dark:text-white font-bold text-lg mb-3 pl-1 flex items-center gap-2">
              {date} <span className="text-xs bg-neo-black/10 dark:bg-white/10 text-neo-black dark:text-white px-2 py-0.5 rounded-md border border-neo-black/10">{items.length}</span>
            </h3>
            <div className="flex flex-col gap-3">
              {items.map(t => (
                <div 
                  key={t.id}
                  onClick={() => onNavigate(AppScreen.TRANSACTION_DETAIL, t.id)}
                  style={{ backgroundColor: t.color }}
                  className="group relative flex items-center justify-between p-3 rounded-2xl border-2 border-neo-black shadow-neo hover:translate-y-[1px] hover:shadow-neo-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-12 flex items-center justify-center rounded-full bg-white border-2 border-neo-black shrink-0">
                      <span className="material-symbols-outlined text-neo-black">{t.icon}</span>
                    </div>
                    <div>
                      <p className="text-neo-black dark:text-white font-bold leading-tight">{t.name}</p>
                      <p className="text-neo-black/70 dark:text-white/70 text-xs font-bold">{t.category} • {t.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${t.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-neo-black dark:text-white'}`}>
                      {t.amount > 0 ? '+' : ''}{t.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
