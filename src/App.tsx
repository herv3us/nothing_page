import './index.css';
import { useState } from 'react';
import image from './assets/images/29.png';
import Toggle from './components/Toggle';
import { texts } from './assets/translations.js';

function App() {
  const [language, setLanguage] = useState<'en' | 'sv'>('sv');

  console.log(language, texts[language].title);
  return (
    <div className="p-0 m-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-zinc-200 h-screen w-screen relative">
      <Toggle language={language} setLanguage={setLanguage} />
      <p className="text-lg">{texts[language].title}</p>
      <p className="text-lg">{texts[language].subTitle}</p>
      <img src={image} alt="gamer43" className="w-[400px] sm:w-[850px]" />
      <p className="text-lg">{texts[language].description}</p>
    </div>
  );
}

export default App;
