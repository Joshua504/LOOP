
export type Category = 'Food' | 'Transport' | 'Shopping' | 'Utilities' | 'Income' | 'Subscription';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: Category;
  time: string;
  date: string;
  icon: string;
  color: string;
  location?: string;
  notes?: string;
}

export interface Budget {
  id: string;
  name: string;
  limit: number;
  spent: number;
  category: Category;
  icon: string;
  color: string;
}

export enum AppScreen {
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  TRANSACTIONS = 'TRANSACTIONS',
  BUDGETS = 'BUDGETS',
  SETTINGS = 'SETTINGS',
  TRANSACTION_DETAIL = 'TRANSACTION_DETAIL',
  NEW_BUDGET = 'NEW_BUDGET',
  EDIT_BUDGET = 'EDIT_BUDGET',
  NOTIFICATIONS = 'NOTIFICATIONS'
}
