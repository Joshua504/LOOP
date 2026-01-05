
import React, { useState, useEffect } from 'react';
import { AppScreen, Transaction, Budget } from './types';
import { INITIAL_TRANSACTIONS, INITIAL_BUDGETS } from './constants';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';
import Settings from './components/Settings';
import TransactionDetail from './components/TransactionDetail';
import NewBudget from './components/NewBudget';
import Onboarding from './components/Onboarding';
import Notifications from './components/Notifications';
import Nav from './components/Nav';
import Header from './components/Header';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.ONBOARDING);
  const [transactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [budgets, setBudgets] = useState<Budget[]>(INITIAL_BUDGETS);
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);
  const [selectedBudgetId, setSelectedBudgetId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigateTo = (screen: AppScreen, id?: string) => {
    if (id) {
      if (screen === AppScreen.TRANSACTION_DETAIL) setSelectedTransactionId(id);
      if (screen === AppScreen.EDIT_BUDGET) setSelectedBudgetId(id);
    }
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const selectedTransaction = transactions.find(t => t.id === selectedTransactionId);
  const selectedBudget = budgets.find(b => b.id === selectedBudgetId);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.ONBOARDING:
        return <Onboarding onComplete={() => navigateTo(AppScreen.DASHBOARD)} />;
      case AppScreen.DASHBOARD:
        return <Dashboard budgets={budgets} onNavigate={navigateTo} />;
      case AppScreen.TRANSACTIONS:
        return <Transactions transactions={transactions} onNavigate={navigateTo} />;
      case AppScreen.BUDGETS:
        return <Budgets budgets={budgets} onNavigate={navigateTo} />;
      case AppScreen.SETTINGS:
        return <Settings 
          isDarkMode={isDarkMode} 
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
          onNavigate={navigateTo} 
        />;
      case AppScreen.TRANSACTION_DETAIL:
        return <TransactionDetail transaction={selectedTransaction} onBack={() => navigateTo(AppScreen.TRANSACTIONS)} />;
      case AppScreen.NEW_BUDGET:
        return <NewBudget onBack={() => navigateTo(AppScreen.BUDGETS)} onSave={(b) => {
          setBudgets([...budgets, { ...b, id: Date.now().toString(), spent: 0 }]);
          navigateTo(AppScreen.BUDGETS);
        }} />;
      case AppScreen.EDIT_BUDGET:
        return <NewBudget isEdit budget={selectedBudget} onBack={() => navigateTo(AppScreen.BUDGETS)} onSave={(updated) => {
          setBudgets(budgets.map(b => b.id === updated.id ? updated : b));
          navigateTo(AppScreen.BUDGETS);
        }} onDelete={(id) => {
          setBudgets(budgets.filter(b => b.id !== id));
          navigateTo(AppScreen.BUDGETS);
        }} />;
      case AppScreen.NOTIFICATIONS:
        return <Notifications onBack={() => navigateTo(AppScreen.DASHBOARD)} />;
      default:
        return <Dashboard budgets={budgets} onNavigate={navigateTo} />;
    }
  };

  const showNav = ![AppScreen.ONBOARDING, AppScreen.TRANSACTION_DETAIL, AppScreen.NEW_BUDGET, AppScreen.EDIT_BUDGET, AppScreen.NOTIFICATIONS].includes(currentScreen);
  const showHeader = showNav;

  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-white dark:bg-background-dark border-x-2 border-neo-black dark:border-white/10 flex flex-col">
      {showHeader && <Header onNavigate={navigateTo} screen={currentScreen} />}
      <main className="flex-1 flex flex-col overflow-x-hidden">
        {renderScreen()}
      </main>
      {showNav && <Nav currentScreen={currentScreen} onNavigate={navigateTo} />}
    </div>
  );
};

export default App;
