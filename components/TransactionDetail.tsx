
import React from 'react';
import { Transaction } from '../types';

interface TransactionDetailProps {
  transaction: Transaction | undefined;
  onBack: () => void;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction, onBack }) => {
  if (!transaction) return null;

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex items-center justify-between py-2">
        <button 
          onClick={onBack}
          className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-full shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
        >
          <span className="material-symbols-outlined text-neo-black dark:text-white">arrow_back</span>
        </button>
        <h2 className="text-neo-black dark:text-white text-xl font-bold tracking-tight bg-white dark:bg-stone-800 border-2 border-neo-black dark:border-white px-6 py-2 rounded-full shadow-neo">
          Transaction Details
        </h2>
        <button className="flex items-center justify-center w-12 h-12 bg-white dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-full shadow-neo">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <div className="relative flex flex-col items-center bg-white dark:bg-[#2a2418] border-2 border-neo-black dark:border-white rounded-[2rem] p-8 shadow-neo">
        <div className="absolute -top-3 -right-3 bg-primary border-2 border-neo-black w-10 h-10 rounded-full flex items-center justify-center shadow-neo-sm animate-bounce">
          <span className="material-symbols-outlined text-neo-black text-lg font-bold">receipt</span>
        </div>
        <div className="size-24 rounded-full border-2 border-neo-black overflow-hidden mb-4 shadow-neo-sm flex items-center justify-center bg-white">
          <span className="material-symbols-outlined text-6xl text-neo-black">{transaction.icon}</span>
        </div>
        <h1 className="text-neo-black dark:text-white text-5xl font-bold tracking-tighter mb-1">
          {transaction.amount.toFixed(2)}
        </h1>
        <p className="text-neo-black/60 dark:text-white/60 text-xl font-medium mb-6">{transaction.name}</p>
        <div className="bg-accent-blue/30 dark:bg-white/10 border-2 border-neo-black dark:border-white px-4 py-1.5 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary border border-neo-black"></div>
          <span className="text-neo-black dark:text-white font-bold text-sm uppercase tracking-wide">{transaction.category}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-accent-green/20 dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-2xl p-4 shadow-neo flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-neo-black dark:text-white">schedule</span>
          <div>
            <p className="text-neo-black/60 dark:text-white/40 text-xs font-bold uppercase tracking-wider">Time</p>
            <p className="text-neo-black dark:text-white text-lg font-bold">{transaction.time}</p>
          </div>
        </div>
        <div className="bg-accent-pink/20 dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-2xl p-4 shadow-neo flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-neo-black dark:text-white">calendar_month</span>
          <div>
            <p className="text-neo-black/60 dark:text-white/40 text-xs font-bold uppercase tracking-wider">Date</p>
            <p className="text-neo-black dark:text-white text-lg font-bold">{transaction.date}</p>
          </div>
        </div>
        <div className="col-span-2 bg-white dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-2xl p-4 shadow-neo flex items-center gap-4">
          <div className="bg-gray-200 size-16 rounded-xl flex items-center justify-center border-2 border-neo-black">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div className="flex-1">
            <p className="text-neo-black/60 dark:text-white/40 text-xs font-bold uppercase tracking-wider">Location</p>
            <p className="text-neo-black dark:text-white text-lg font-bold leading-tight">1912 Pike Place, Seattle</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary border-2 border-neo-black">
            <span className="material-symbols-outlined text-neo-black">directions</span>
          </button>
        </div>
      </div>

      <div className="relative bg-white dark:bg-stone-800 border-2 border-neo-black dark:border-white rounded-2xl p-5 shadow-neo">
        <div className="absolute -top-3 left-8 flex gap-2">
          {[1,2,3].map(i => <div key={i} className="w-2 h-6 bg-neo-black dark:bg-white rounded-full"></div>)}
        </div>
        <h3 className="text-neo-black dark:text-white text-lg font-bold mb-2 pt-2 flex items-center gap-2">
          <span className="material-symbols-outlined">edit_note</span> Notes
        </h3>
        <p className="text-neo-black/80 dark:text-white/80">
          Coffee run for the team meeting. Validated parking ticket included in the receipt picture.
        </p>
      </div>

      <div className="mt-auto py-6">
        <button className="w-full bg-primary text-neo-black border-2 border-neo-black rounded-full py-4 text-xl font-bold shadow-neo active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center gap-3">
          <span className="material-symbols-outlined">edit</span> Edit Transaction
        </button>
        <button onClick={onBack} className="mt-4 w-full bg-transparent text-neo-black dark:text-white border-2 border-transparent rounded-full py-3 font-bold opacity-60">
          Delete Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionDetail;
