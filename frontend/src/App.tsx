/*
import React from 'react';
import Index from './pages/Index';

const App = () => {
  return <Index />;
};

export default App;
*/

import React from 'react';
import Index from './pages/Index';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Index />
      </main>
    </div>
  );
};

export default App;
