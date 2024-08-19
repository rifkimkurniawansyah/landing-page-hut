import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <header className="flex justify-between items-center p-4 md:p-8 bg-red-00">
        <img
          src="../src/assets/logo79.png"
          alt="Logo 79"
          className="w-32 md:w-40 h-auto"
        />
        <Navbar />
      </header>
      <Hero />
    </div>
  );
}

export default App;
