import './index.css';
import image from './assets/images/gamer43.png';

function App() {
  return (
    <div className="p-0 m-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-zinc-200 h-screen w-screen">
      <p className="text-lg">There is nothing to see here.</p>
      <img src={image} alt="gamer43" className="w-[400px] sm:w-[850px]" />
      <p className="text-lg">This page is empty.</p>
    </div>
  );
}

export default App;
