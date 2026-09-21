'use client';

import { useState } from 'react';

export default function ButtonsPreview() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className="font-heading bg-brand-yellow text-brand-dark font-black px-4 py-2 rounded-xl
                 active:scale-90 transition-all cursor-pointer hover:bg-[#FFD3D4]"
    >
      {clicked ? 'Tada!' : 'Click me'}
    </button>

  );
}