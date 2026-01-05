
import React from 'react';
import { AppScreen } from '../types';
import { PROFILE_IMG } from '../constants';

interface SettingsProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (screen: AppScreen) => void;
}

const Settings: React.FC<SettingsProps> = ({ isDarkMode, onToggleDarkMode, onNavigate }) => {
  return (
    <div className="flex flex-col gap-6 p-5 pb-32">
      <section className="relative w-full rounded-2xl bg-accent-green dark:bg-[#364320] border-2 border-neo-black shadow-neo p-6 flex items-center gap-4 group hover:-translate-y-1 hover:shadow-neo-lg transition-all cursor-pointer">
        <div className="relative shrink-0">
          <div className="size-20 rounded-full border-2 border-neo-black overflow-hidden bg-white">
            <img alt="User Avatar" className="h-full w-full object-cover" src={PROFILE_IMG} />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-primary border-2 border-neo-black rounded-full p-1.5">
            <span className="material-symbols-outlined text-sm font-bold block text-neo-black">edit</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-neo-black dark:text-white text-xl font-bold truncate">Alex Johnson</h3>
          <p className="text-neo-black/70 dark:text-white/70 text-sm font-bold truncate">@money_alex</p>
          <div className="mt-2 inline-flex self-start px-3 py-1 bg-white dark:bg-neo-black border-2 border-neo-black rounded-full text-xs font-bold uppercase tracking-wide">
            Pro Member
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-neo-black dark:text-white font-bold text-lg uppercase tracking-wider mb-3 px-1">General</h3>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-neo-white dark:bg-[#2C241B] p-4 rounded-xl border-2 border-neo-black shadow-neo-sm flex items-center justify-between group active:shadow-none active:translate-y-[2px] transition-all">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-accent-blue border-2 border-neo-black flex items-center justify-center text-neo-black">
                <span className="material-symbols-outlined">person</span>
              </div>
              <span className="text-neo-black dark:text-white font-bold text-lg">Personal Info</span>
            </div>
            <span className="material-symbols-outlined text-neo-black dark:text-white group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
          <button className="w-full bg-neo-white dark:bg-[#2C241B] p-4 rounded-xl border-2 border-neo-black shadow-neo-sm flex items-center justify-between group active:shadow-none active:translate-y-[2px] transition-all">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-accent-pink border-2 border-neo-black flex items-center justify-center text-neo-black">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-neo-black dark:text-white font-bold text-lg">Linked Accounts</span>
            </div>
            <span className="material-symbols-outlined text-neo-black dark:text-white group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-neo-black dark:text-white font-bold text-lg uppercase tracking-wider mb-3 px-1">App Preferences</h3>
        <div className="flex flex-col gap-3 bg-neo-white dark:bg-[#2C241B] rounded-2xl border-2 border-neo-black shadow-neo overflow-hidden">
          <PreferenceToggle 
            label="Notifications" 
            icon="notifications" 
            enabled={true} 
            onClick={() => {}} 
          />
          <PreferenceToggle 
            label="Dark Mode" 
            icon="dark_mode" 
            enabled={isDarkMode} 
            onClick={onToggleDarkMode} 
          />
          <PreferenceToggle 
            label="Face ID" 
            icon="lock" 
            enabled={true} 
            onClick={() => {}} 
          />
        </div>
      </section>

      <section className="mt-2">
        <button 
          onClick={() => onNavigate(AppScreen.ONBOARDING)}
          className="w-full bg-accent-red hover:bg-[#ffad91] text-neo-black p-4 rounded-xl border-2 border-neo-black shadow-neo flex items-center justify-center gap-2 group active:shadow-none active:translate-y-[2px] transition-all"
        >
          <span className="material-symbols-outlined font-bold">logout</span>
          <span className="font-bold text-lg uppercase tracking-wider">Log Out</span>
        </button>
        <p className="text-center text-xs font-bold text-neo-black/40 dark:text-white/30 mt-4 uppercase tracking-widest">Version 2.4.0 (Build 302)</p>
      </section>
    </div>
  );
};

const PreferenceToggle = ({ label, icon, enabled, onClick }: { label: string, icon: string, enabled: boolean, onClick: () => void }) => (
  <div className="p-4 flex items-center justify-between border-b-2 border-neo-black last:border-0">
    <div className="flex items-center gap-4">
      <div className="size-10 rounded-full bg-neo-black text-white flex items-center justify-center">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="text-neo-black dark:text-white font-bold text-lg">{label}</span>
    </div>
    <div 
      onClick={onClick}
      className={`relative w-14 h-8 rounded-full border-2 border-neo-black cursor-pointer transition-colors ${enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      <div className={`absolute top-1 size-5 bg-white rounded-full border-2 border-neo-black shadow-sm transition-all ${enabled ? 'right-1' : 'left-1'}`}></div>
    </div>
  </div>
);

export default Settings;
