
import React, { useState } from 'react';

const Onboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState<'welcome' | 'login' | 'setup' | 'passcode'>('welcome');

  if (step === 'welcome') {
    return (
      <div className="flex flex-col min-h-screen bg-primary">
        <header className="flex items-center justify-between px-6 py-8">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-neo-black rounded-lg border-2 border-neo-black flex items-center justify-center">
              <span className="material-symbols-outlined text-white">savings</span>
            </div>
            <span className="text-xl font-black text-neo-black tracking-tighter uppercase">Penny<br/>Wise</span>
          </div>
          <button 
            onClick={() => setStep('login')}
            className="text-sm font-bold text-neo-black bg-white/50 px-4 py-2 rounded-full border-2 border-transparent hover:border-neo-black transition-all"
          >
            Log In
          </button>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-neo-black rounded-full translate-x-2 translate-y-2"></div>
            <div className="relative size-72 bg-white border-4 border-neo-black rounded-full flex flex-col items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-[11rem] text-neo-black">face_6</span>
            </div>
          </div>
          <h1 className="text-6xl font-black text-neo-black leading-[0.9] tracking-tighter mb-4">
            MASTER YOUR<br/>
            <span className="text-white" style={{ WebkitTextStroke: '2px #181611' }}>FINANCES</span>
          </h1>
          <p className="text-neo-black font-bold text-lg max-w-[300px] mx-auto">Track, save, and grow your wealth with ease.</p>
        </main>
        <div className="p-6 pb-12">
          <button 
            onClick={() => setStep('setup')}
            className="w-full bg-neo-black text-white border-[3px] border-neo-black rounded-2xl py-5 text-xl font-bold uppercase flex items-center justify-center gap-3"
          >
            Get Started <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'login') {
    return (
      <div className="flex flex-col min-h-screen p-6 bg-accent-blue relative overflow-hidden">
        <div className="absolute -top-10 -left-10 size-40 bg-accent-pink rounded-full border-2 border-neo-black opacity-60"></div>
        <main className="flex-1 flex flex-col justify-center gap-8 relative z-10">
          <div className="text-center">
            <div className="size-20 bg-primary border-4 border-neo-black shadow-neo rounded-full mb-4 inline-flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-neo-black text-4xl">savings</span>
            </div>
            <h1 className="text-4xl font-bold">Money Moves</h1>
            <p className="text-sm font-medium opacity-70">Welcome back! Let's get that bag.</p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="space-y-2">
              <label className="font-bold text-sm ml-2">Email Address</label>
              <input className="block w-full px-4 py-4 rounded-xl border-2 border-neo-black shadow-neo-sm outline-none" placeholder="hello@example.com" />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-sm ml-2">Password</label>
              <input type="password" className="block w-full px-4 py-4 rounded-xl border-2 border-neo-black shadow-neo-sm outline-none" placeholder="••••••••" />
            </div>
            <button onClick={() => setStep('setup')} className="w-full py-4 bg-primary text-neo-black font-bold rounded-xl border-2 border-neo-black shadow-neo uppercase">Log In</button>
          </form>
          <p className="text-center font-bold underline decoration-2 underline-offset-4" onClick={() => setStep('welcome')}>Cancel</p>
        </main>
      </div>
    );
  }

  if (step === 'setup') {
    return (
      <div className="flex flex-col min-h-screen p-6 bg-accent-pink items-center justify-center text-center gap-8">
        <div className="relative size-64 bg-white border-4 border-neo-black rounded-2xl shadow-neo flex items-center justify-center">
          <span className="material-symbols-outlined text-8xl text-neo-black">rocket_launch</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-[0.9]">Welcome<br/>Aboard!</h1>
          <p className="text-lg font-medium opacity-80 px-4">Your account is created. Let's set up your profile.</p>
        </div>
        <button 
          onClick={() => setStep('passcode')}
          className="w-full py-5 bg-primary text-neo-black font-bold text-xl rounded-xl border-2 border-neo-black shadow-neo uppercase flex items-center justify-center gap-2"
        >
          Start Setup <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-6 bg-background-light items-center justify-center text-center gap-8">
      <h1 className="text-4xl font-bold">Secure your bag.</h1>
      <p className="font-medium opacity-60">Create a 4-digit code to keep your data safe.</p>
      <div className="flex gap-4">
        {[1,2,3,4].map(i => <div key={i} className="size-14 bg-white border-2 border-neo-black rounded-xl shadow-neo"></div>)}
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        {[1,2,3,4,5,6,7,8,9, 'back', 0, 'check'].map(k => (
          <button 
            key={k}
            onClick={() => k === 'check' && onComplete()}
            className="size-20 flex items-center justify-center bg-white border-2 border-neo-black rounded-full shadow-neo text-2xl font-bold"
          >
            {k === 'back' ? <span className="material-symbols-outlined">backspace</span> : k === 'check' ? <span className="material-symbols-outlined">check</span> : k}
          </button>
        ))}
      </div>
      <button onClick={onComplete} className="w-full py-4 bg-primary text-neo-black font-bold rounded-xl border-2 border-neo-black shadow-neo uppercase">Continue</button>
    </div>
  );
};

export default Onboarding;
