import { useState } from 'react';
import './App.css';
import AppBody from './AppComponents/AppBody';
import AppHeader from './AppComponents/AppHeader';

function App() {
  const [portfolio, setPortfolio] = useState('')

  return (
    <div className="App">
      <AppHeader setPortfolio={setPortfolio}/>
      <AppBody portfolio={portfolio}/>
    </div>
  );
}

export default App;
