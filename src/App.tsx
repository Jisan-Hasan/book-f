import { Outlet } from 'react-router-dom';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
