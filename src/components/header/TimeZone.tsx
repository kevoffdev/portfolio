'use client';
import React, { useEffect, useState } from 'react';

const ArgentinaTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const currentTime = new Date().toLocaleTimeString('es-AR', options);
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <h3 className="opacity-60">Hora Local (Argentina/Buenos Aires):</h3>
      <p className="rounded-lg bg-primary px-4 py-3 text-xl">{time}</p>
    </div>
  );
};

export default ArgentinaTime;
