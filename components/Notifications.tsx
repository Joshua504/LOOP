
import React from 'react';

const Notifications: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const notifications = [
    { id: 1, title: 'Overspending Alert', text: "You've exceeded your Dining Out budget by $12.50.", time: '2m', color: '#ffbfa8', icon: 'warning', new: true },
    { id: 2, title: 'Payment Received', text: "High-Five! You received $1,200.00 from Freelance Corp.", time: '1h', color: '#d9f99d', icon: 'payments', new: true },
    { id: 3, title: 'Netflix Subscription', text: "Upcoming charge of $15.99 tomorrow. Ensure sufficient funds.", time: '3h', color: '#bfdbfe', icon: 'subscriptions', new: false },
    { id: 4, title: 'Cashback Earned!', text: "You earned $4.20 cashback on your last grocery trip.", time: '1d', color: '#fbcfe8', icon: 'card_giftcard', new: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-neo-white dark:bg-[#2C241B] px-5 py-4 border-b-2 border-neo-black dark:border-white/10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-white border-2 border-neo-black shadow-neo-sm">
            <span className="material-symbols-outlined text-neo-black">arrow_back</span>
          </button>
          <h2 className="text-neo-black dark:text-white text-2xl font-bold tracking-tight">Notifications</h2>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full bg-neo-black dark:bg-white border-2 border-neo-black shadow-neo-sm">
          <span className="material-symbols-outlined text-white dark:text-neo-black">tune</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-6 p-5 pb-32">
        <div className="flex gap-4">
          <button className="flex-1 py-3 bg-primary text-neo-black rounded-xl border-2 border-neo-black shadow-neo font-bold text-sm uppercase">Mark all read</button>
          <button className="flex-1 py-3 bg-white dark:bg-stone-800 text-neo-black dark:text-white rounded-xl border-2 border-neo-black dark:border-white shadow-neo font-bold text-sm uppercase">Clear All</button>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-neo-black dark:text-white uppercase flex items-center gap-2">
            <span className="size-3 bg-neo-black dark:bg-white rounded-full"></span> New
          </h3>
          {notifications.map(n => (
            <div 
              key={n.id}
              style={{ backgroundColor: n.color }}
              className="relative w-full rounded-2xl border-2 border-neo-black shadow-neo p-4 group"
            >
              {n.new && <div className="absolute right-3 top-3 size-3 rounded-full bg-primary border border-neo-black animate-pulse"></div>}
              <div className="flex items-start gap-4">
                <div className="size-12 shrink-0 flex items-center justify-center rounded-full bg-white border-2 border-neo-black">
                  <span className="material-symbols-outlined text-neo-black">{n.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1 pr-4">
                    <h4 className="font-bold text-neo-black leading-tight">{n.title}</h4>
                    <span className="text-xs font-bold text-neo-black/60">{n.time}</span>
                  </div>
                  <p className="text-sm font-medium text-neo-black/80 leading-snug">{n.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
