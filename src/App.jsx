import { useEffect, useState } from 'react'

function App({children}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div
      className="
        h-screen 
        w-screen 
        pt-6
        
        text-center
        bg-gradient-to-r 
        from-sky-400 
        to-blue-500
      "
    >
      <div
        className={`
        container
        mx-auto
        backdrop-blur-xlg
        bg-white/60
        rounded
        text-slate-700
        transition-opacity
        duration-1000
        ${isLoading ? "opacity-0" : "opacity-1"}
      `}
      >
       {children}
      </div>
    </div>
  )
}

App.propTypes;

export default App
