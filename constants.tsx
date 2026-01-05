
import { Transaction, Budget, Category } from './types';

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: '1', name: 'Uber Ride', amount: -24.50, category: 'Transport', time: '2:30 PM', date: 'Today', icon: 'local_taxi', color: '#d9f99d' },
  { id: '2', name: 'ASOS Design', amount: -120.00, category: 'Shopping', time: '10:15 AM', date: 'Today', icon: 'shopping_bag', color: '#fbcfe8' },
  { id: '3', name: 'Starbucks', amount: -6.50, category: 'Food', time: '8:45 AM', date: 'Today', icon: 'coffee', color: '#ffffff' },
  { id: '4', name: 'Freelance Pay', amount: 1500.00, category: 'Income', time: '4:00 PM', date: 'Yesterday', icon: 'payments', color: '#ffbfa8' },
  { id: '5', name: 'Whole Foods', amount: -85.20, category: 'Food', time: '12:30 PM', date: 'Yesterday', icon: 'grocery', color: '#d9f99d' },
  { id: '6', name: 'Netflix', amount: -15.99, category: 'Subscription', time: 'Auto', date: 'Oct 24', icon: 'movie', color: '#ffffff' },
];

export const INITIAL_BUDGETS: Budget[] = [
  { id: 'b1', name: 'Food & Drink', limit: 500, spent: 450, category: 'Food', icon: 'lunch_dining', color: '#d9f99d' },
  { id: 'b2', name: 'Transport', limit: 200, spent: 120, category: 'Transport', icon: 'directions_car', color: '#bfdbfe' },
  { id: 'b3', name: 'Shopping', limit: 500, spent: 225, category: 'Shopping', icon: 'shopping_bag', color: '#fbcfe8' },
  { id: 'b4', name: 'Utilities', limit: 150, spent: 150, category: 'Utilities', icon: 'bolt', color: '#ffffff' },
];

export const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4ANnOx_JSBer534OKCE5DRUpxQLgqpsV8AQ7TwjOR40199ToiPf8Hj-AI7_hvUiG2fGzgRzS4dgO0PMYoQ--5oILEZiQ4cAICWV5Y5jCEdqCULYCURkBlLt1KRIzshjyVpTE_o3NHp-6tMobxLIACj43CaXfI-yvjx6bRcS4Aq2NDvALPSPvDh6uOII34ZC3MGAy0eaqBDPss-jm6hypIzsku3EYwGocXkvVHpiU8m-3S2dPhw6DZrbYNSWv68m_QOayO4AYsIo9";
