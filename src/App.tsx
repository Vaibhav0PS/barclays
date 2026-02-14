import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardView from './views/DashboardView';
import ForecastView from './views/ForecastView';
import PortfolioView from './views/PortfolioView';
import InterventionView from './views/InterventionView';
import ReputationView from './views/ReputationView';
import SettingsView from './views/SettingsView';
import CustomerProfileView from './views/CustomerProfileView';
import { RISK_CUSTOMERS } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  const selectedCustomer = selectedCustomerId
    ? RISK_CUSTOMERS.find((c) => c.id === selectedCustomerId) ?? null
    : null;

  const openCustomerProfile = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setActiveTab('customer-profile');
  };

  const goToOverview = () => {
    setActiveTab('overview');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardView key="overview" onOpenCustomer={openCustomerProfile} />;
      case 'npa-forecast':
        return <ForecastView key="npa-forecast" />;
      case 'portfolio':
        return <PortfolioView key="portfolio" />;
      case 'intervention':
        return <InterventionView key="intervention" />;
      case 'reputation':
        return <ReputationView key="reputation" />;
      case 'settings':
        return <SettingsView key="settings" />;
      case 'customer-profile':
        return <CustomerProfileView key="customer-profile" customer={selectedCustomer} onBack={goToOverview} />;
      default:
        return (
          <div className="p-12 h-full flex items-center justify-center text-slate-300 font-black uppercase tracking-[0.3em] text-xs">
             Module Under Development
          </div>
        );
    }
  };

  // just for test comment to commit

  return (
    <div className="flex bg-[#f8fafc] min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <Header />
        
        <div className="flex-1 relative overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
             {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
