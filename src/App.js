import { Outlet } from 'react-router-dom';
import { BankProvider } from './utils/BankContext';
import MyNavBar, { NavBar } from './components/MyNavBar';

function App() {
  return (
    <BankProvider>
      <div className="container">
        <MyNavBar/>
        <Outlet/>
      </div>
    </BankProvider>
  );
}

export default App;
