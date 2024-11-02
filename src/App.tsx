import './index.css';
import { useState } from 'react';
import image from './assets/images/29.png';
import Toggle from './components/Toggle';
import { texts } from './assets/translations.js';

function App() {
  const [language, setLanguage] = useState<'en' | 'sv'>('sv');

  console.log(language, texts[language].title);
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-zinc-200 h-screen w-screen relative">
      <Toggle language={language} setLanguage={setLanguage} />
      <div className="flex flex-col items-center h-[80%] leading-8">
        <p className="text-[27px] sm:text-[35px] font-Caveat text-[#FBC7CA]">
          {texts[language].title}
        </p>
        <p className="text-[23px] sm:text-[28px] font-Caveat text-[#FBC7CA]">
          {texts[language].subTitle}
        </p>
        <p className="text-[23px] sm:text-[28px] font-Caveat text-[#FBC7CA]">
          {texts[language].description}
        </p>
        <img
          src={image}
          alt="gamer43"
          className="-mt-8 sm:-mt-12 w-[400px] sm:w-[650px]"
        />
      </div>
    </div>
  );
}

export default App;
