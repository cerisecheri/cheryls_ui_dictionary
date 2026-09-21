'use client';
// needed because this has interactive state (on/off)

import { useState } from 'react';

export default function TogglePreview() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
  onClick={() => setEnabled(!enabled)}
  className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
    enabled ? 'bg-brand-pink' : 'bg-brand-dark/30'
  }`}
    >
  <span
    className={`block w-6 h-6 bg-brand-dark rounded-full transition-transform duration-300 ${
      enabled ? 'translate-x-6' : 'translate-x-0'
    }`}
  />
</button>
  );
}