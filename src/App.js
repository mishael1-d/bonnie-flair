import Navbar from './components/Navbar/Webnavbar'
import Home from './pages/Home';
import './index.css';
import Payment from './pages/Payment';



function App() {
  return (
    <div className='app'>
       <Navbar />
       <Home />
       <Payment />
    </div>
  );
}

export default App;
