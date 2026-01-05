
import React, { useState } from 'react';
import { Budget, AppScreen } from '../types';

interface NewBudgetProps {
  isEdit?: boolean;
  budget?: Budget;
  onBack: () => void;
  onSave: (budget: Budget) => void;
  onDelete?: (id: string) => void;
}

const NewBudget: React.FC<NewBudgetProps> = ({ isEdit, budget, onBack, onSave, onDelete }) => {
  const [name, setName] = useState(budget?.name || '');
  const [limit, setLimit] = useState(budget?.limit || 0);
  const [category, setCategory] = useState(budget?.category || 'Food');
  const [color, setColor] = useState(budget?.color || '#d9f99d');

  const categories: { label: string, icon: string, color: string }[] = [
    { label: 'Food', icon: 'lunch_dining', color: '#d9f99d' },
    { label: 'Transport', icon: 'directions_car', color: '#bfdbfe' },
    { label: 'Shopping', icon: 'shopping_bag', color: '#fbcfe8' },
    { label: 'Bills', icon: 'receipt_long', color: '#ffffff' },
    { label: 'Fun', icon: 'stadia_controller', color: '#fef08a' },
    { label: 'Other', icon: 'add', color: '#e5e7eb' },
  ];

  const handleSave = () => {
    const catData = categories.find(c => c.label === category) || categories[0];
    onSave({
      id: budget?.id || '',
      name,
      limit,
      spent: budget?.spent || 0,
      category: category as any,
      icon: catData.icon,
      color: catData.color
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neo-white dark:bg-[#2C241B] px-5 py-4 border-b-2 border-neo-black dark:border-white/10">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-white border-2 border-neo-black shadow-neo-sm">
          <span className="material-symbols-outlined text-neo-black">arrow_back</span>
        </button>
        <h2 className="text-neo-black dark:text-white text-xl font-bold uppercase tracking-tight">
          {isEdit ? 'Edit Budget' : 'New Budget'}
        </h2>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 flex flex-col gap-6 p-5 pb-40">
        <section className={`relative w-full rounded-2xl border-2 border-neo-black shadow-neo p-8 flex flex-col items-center justify-center text-center overflow-hidden group`} style={{ backgroundColor: color }}>
          <div className="absolute -right-6 -top-6 size-24 bg-white/20 rounded-full border-2 border-neo-black"></div>
          <div className="relative z-10 bg-white border-2 border-neo-black p-4 rounded-full shadow-neo-sm mb-4">
            <span className="material-symbols-outlined text-4xl text-neo-black">
              {categories.find(c => c.label === category)?.icon || 'account_balance_wallet'}
            </span>
          </div>
          <h1 className="relative z-10 text-neo-black text-2xl font-bold tracking-tight">
            {name || 'Create a Pot'}
          </h1>
          <p className="relative z-10 text-neo-black/70 text-sm font-medium mt-1">Set a goal and track your spending</p>
        </section>

        <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-wider text-neo-black dark:text-white ml-1">Budget Name</label>
            <input 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-white dark:bg-stone-800 rounded-xl border-2 border-neo-black dark:border-white px-4 py-3 text-lg font-bold focus:shadow-neo shadow-neo-sm transition-all text-neo-black dark:text-white outline-none" 
              placeholder="e.g. Weekly Groceries" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-wider text-neo-black dark:text-white ml-1">Limit Amount</label>
            <div className="relative group transition-transform">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-2xl text-neo-black dark:text-white">$</span>
              <input 
                type="number"
                value={limit}
                onChange={e => setLimit(Number(e.target.value))}
                className="w-full bg-white dark:bg-stone-800 rounded-xl border-2 border-neo-black dark:border-white pl-10 pr-4 py-4 text-3xl font-bold focus:shadow-neo shadow-neo-sm transition-all text-neo-black dark:text-white outline-none" 
                placeholder="0.00" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-wider text-neo-black dark:text-white ml-1">Category</label>
            <div className="grid grid-cols-3 gap-3">
              {categories.map(cat => (
                <button
                  key={cat.label}
                  onClick={() => {
                    setCategory(cat.label);
                    setColor(cat.color);
                  }}
                  className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl border-2 border-neo-black cursor-pointer shadow-neo-sm transition-all ${category === cat.label ? 'bg-primary translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white dark:bg-stone-800'}`}
                >
                  <span className="material-symbols-outlined">{cat.icon}</span>
                  <span className="text-xs font-bold">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-neo-white/90 dark:bg-neo-black/90 backdrop-blur-md border-t-2 border-neo-black z-40 max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          <button 
            onClick={handleSave}
            className="w-full py-4 bg-primary text-neo-black rounded-xl border-2 border-neo-black shadow-neo text-lg font-bold uppercase tracking-wide hover:-translate-y-1 active:translate-y-[2px] transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined font-bold">save</span>
            {isEdit ? 'Update Budget' : 'Save Budget'}
          </button>
          {isEdit && onDelete && (
            <button 
              onClick={() => budget && onDelete(budget.id)}
              className="w-full py-3 bg-accent-red text-neo-black rounded-xl border-2 border-neo-black shadow-neo-sm font-bold"
            >
              Delete Budget
            </button>
          )}
          <button 
            onClick={onBack}
            className="w-full py-3 bg-white dark:bg-stone-800 text-neo-black dark:text-white rounded-xl border-2 border-neo-black dark:border-white shadow-neo-sm font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBudget;
