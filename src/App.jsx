
// import React, { useState, useEffect } from 'react';
// import WorkflowContainer from './components/myworkflow/WorkflowContainer';
// import Sidebar from './components/Sidebar';
// import HomeComponent from './components/myworkflow/HomeComponent';
// // Import the MyReports component
// import MyReports from './components/MyReports';
// import CashFlowProjection from './components/workspace/CashFlowProjection';
// import ARAPAgingScreen from './components/workspace/ARAPAgingScreen';
// import VarianceBudgetScreen from './components/workspace/VarianceBudgetScreen';
// import WorkspaceUI from './components/WorkspaceUI';
// import KnowledgeManagementPage from './components/knowledge/KnowledgeManagementPage';


// const App = () => {
//   // State to track the active view/navigation
//   const [activeView, setActiveView] = useState('home'); // Default to home view

//   // Handle navigation changes from sidebar
//   const handleNavigation = (view) => {
//     setActiveView(view);
//   };

//   // Render the appropriate component based on activeView
//   const renderContent = () => {
//     switch (activeView) {
//       case 'home':
//         return <HomeComponent onNavigate={handleNavigation} />;
//       case 'myWorkflows':
//         return <WorkflowContainer />;
//       case 'myReports':
//         return <MyReports />; // Render the MyReports component
//       case 'actuals':
//         return <CashFlowProjection />;  // Show Cash Flow Projection for "Cash-Flow Projection" menu item
//       case 'cash':
//         return <ARAPAgingScreen />;  // Show AR/AP Aging for "AR/AP Aging" menu item
//       case 'headcount':
//         return <VarianceBudgetScreen />; // Show Variance Budget Screen for "Variances vs Budget" menu item
//       case 'dashboards': 
//         return <WorkspaceUI />;
//       case 'configuration':
//         return <KnowledgeManagementPage />; // Show Knowledge Management Page when Configuration is clicked
//       default:
//         return (
//           <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
//             <div className="text-xl font-medium text-gray-700 mb-2">
//               {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
//             </div>
//             <p className="text-gray-500 mb-4">This section is currently empty.</p>
//             <button 
//               className="px-4 py-2 bg-blue-600 text-white rounded-md"
//               onClick={() => setActiveView('home')}
//             >
//               Back to Home
//             </button>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar component */}
//       <Sidebar activeView={activeView} onNavigate={handleNavigation} />
      
//       {/* Main content area */}
//       <div className="flex-1 flex overflow-hidden">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import WorkflowContainer from './components/myworkflow/WorkflowContainer';
// import Sidebar from './components/Sidebar';
// import HomeComponent from './components/myworkflow/HomeComponent';
// import MyReports from './components/MyReports';
// import CashFlowProjection from './components/workspace/CashFlowProjection';
// import ARAPAgingScreen from './components/workspace/ARAPAgingScreen';
// import VarianceBudgetScreen from './components/workspace/VarianceBudgetScreen';
// import WorkspaceUI from './components/WorkspaceUI';
// import KnowledgeManagementPage from './components/knowledge/KnowledgeManagementPage';
// import LoginScreen from './components/LoginScreen';

// const App = () => {
//   // Add state for authentication
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [activeView, setActiveView] = useState('home');

//   // Handle authentication state change
//   const handleLogin = (status) => {
//     setIsAuthenticated(status);
//   };

//   // Handle navigation changes from sidebar
//   const handleNavigation = (view) => {
//     setActiveView(view);
//   };

//   // Render the appropriate component based on activeView
//   const renderContent = () => {
//     switch (activeView) {
//       case 'home':
//         return <HomeComponent onNavigate={handleNavigation} />;
//       case 'myWorkflows':
//         return <WorkflowContainer />;
//       case 'myReports':
//         return <MyReports />;
//       case 'actuals':
//         return <CashFlowProjection />;
//       case 'cash':
//         return <ARAPAgingScreen />;
//       case 'headcount':
//         return <VarianceBudgetScreen />;
//       case 'dashboards': 
//         return <WorkspaceUI />;
//       case 'configuration':
//         return <KnowledgeManagementPage />;
//       default:
//         return (
//           <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
//             <div className="text-xl font-medium text-gray-700 mb-2">
//               {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
//             </div>
//             <p className="text-gray-500 mb-4">This section is currently empty.</p>
//             <button 
//               className="px-4 py-2 bg-blue-600 text-white rounded-md"
//               onClick={() => setActiveView('home')}
//             >
//               Back to Home
//             </button>
//           </div>
//         );
//     }
//   };

//   // Conditional rendering based on authentication state
//   if (!isAuthenticated) {
//     return <LoginScreen onLogin={handleLogin} />;
//   }

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar component */}
//       <Sidebar activeView={activeView} onNavigate={handleNavigation} />
      
//       {/* Main content area */}
//       <div className="flex-1 flex overflow-hidden">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import WorkflowContainer from './components/myworkflow/WorkflowContainer';
import Sidebar from './components/Sidebar';
import HomeComponent from './components/myworkflow/HomeComponent';
import MyReports from './components/MyReports';
import CashFlowProjection from './components/workspace/CashFlowProjection';
import ARAPAgingScreen from './components/workspace/ARAPAgingScreen';
import VarianceBudgetScreen from './components/workspace/VarianceBudgetScreen';
import WorkspaceUI from './components/WorkspaceUI';
import KnowledgeManagementPage from './components/knowledge/KnowledgeManagementPage';
import LoginScreen from './components/LoginScreen';
import UsecaseContainer from './components/usecase/RealEstateContainer';
import RealEstateContainer from './components/usecase/RealEstateContainer';

const App = () => {
  // Check localStorage for authentication status on initial load
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem('activeView') || 'home';
  });

  // Update localStorage when authentication state changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // Update localStorage when active view changes
  useEffect(() => {
    localStorage.setItem('activeView', activeView);
  }, [activeView]);

  // Handle authentication state change
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    // Optionally clear any user-specific data from localStorage
    localStorage.removeItem('isAuthenticated');
  };

  // Handle navigation changes from sidebar
  const handleNavigation = (view) => {
    setActiveView(view);
  };

  // Render the appropriate component based on activeView
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeComponent onNavigate={handleNavigation} />;
      case 'myWorkflows':
        return <WorkflowContainer />;
        case 'realEstate':
          return <RealEstateContainer />;
      case 'myReports':
        return <MyReports />;
      case 'actuals':
        return <CashFlowProjection />;
      case 'cash':
        return <ARAPAgingScreen />;
      case 'headcount':
        return <VarianceBudgetScreen />;
      case 'dashboards': 
        return <WorkspaceUI />;
      case 'configuration':
        return <KnowledgeManagementPage />;
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
            <div className="text-xl font-medium text-gray-700 mb-2">
              {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
            </div>
            <p className="text-gray-500 mb-4">This section is currently empty.</p>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setActiveView('home')}
            >
              Back to Home
            </button>
          </div>
        );
    }
  };

  // Conditional rendering based on authentication state
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar component with logout handler */}
      <Sidebar 
        activeView={activeView} 
        onNavigate={handleNavigation} 
        onLogout={handleLogout}
      />
      
      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;