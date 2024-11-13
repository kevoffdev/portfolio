import React from 'react';

import { SOCIALS } from '@/lib/Contstants';

const Right = () => {
  return (
    <aside className="sticky top-0 flex h-screen items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        {SOCIALS.map((route) => (
          <a href={route.href} key={route.name} target="_blank" title={route.name}>
            <div className="cursor-pointer rounded-xl border border-primary bg-foreground p-4 text-lg opacity-70 transition-colors hover:border-secondary hover:text-secondary hover:opacity-100">
              {route.icon}
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
};
export default Right;
