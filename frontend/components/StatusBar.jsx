import { useEffect, useState } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black text-white text-xs p-2 flex justify-between font-pixel border-t-2 border-black">
      <span>🕒 {time.toLocaleTimeString()}</span>
      <span>☀️ Weather: Sunny (demo)</span>
    </div>
  );
}