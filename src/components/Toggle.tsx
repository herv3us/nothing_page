function Toggle({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: Function;
}) {
  const toggleLanguage = () => {
    setLanguage((prevLang: string) => (prevLang === 'sv' ? 'en' : 'sv'));
  };

  return (
    <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
      {/* Toggle switch */}
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-4 sm:w-14 sm:h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            language === 'sv' ? 'bg-indigo-700 ' : 'bg-[#f9d5d7]'
          }`}
          onClick={toggleLanguage}
        >
          {/* Switch circle */}
          <div
            className={`h-[10px] w-[10px] sm:h-6 sm:w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              language === 'sv' ? '' : 'translate-x-[14px] sm:translate-x-6'
            }`}
          />
        </div>
        {/* Labels under the toggle */}
        <div className="flex gap-x-2 justify-between w-full mt-1 text-white text-[7px] sm:text-[9px]">
          <span className={`${language === 'sv' ? 'text-indigo-900' : ''}`}>
            Svenska
          </span>
          <span className={`${language === 'en' ? 'text-[#FBC7CA] ' : ''}`}>
            English
          </span>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
