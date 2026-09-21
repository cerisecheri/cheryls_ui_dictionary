'use client';

import { useState } from 'react';
import { Topic } from '@/data/topics';
import { previewComponents } from '@/components/previews';

type Props = {
  topic: Topic;
  // this comes in from [slug]/page.tsx — the object we found
  // via topics.find()
};

export default function TopicView({ topic }: Props) {
  
  const [showCode, setShowCode] = useState(false);

  const Preview = previewComponents[topic.slug];

  return (
    <div className="w-full min-w-0 px-4 max-w-4xl mx-auto mt-5">
      <h1 className="font-heading text-4xl font-black text-brand-dark">{topic.title}</h1>
      
      
      <p className="font-body text-brand-dark font-semibold mt-2 opacity-90">
        {topic.description}
      </p>

      <div className="bg-brand-dark rounded-3xl p-6 mt-8 border-4 border-brand-dark shadow-[4px_4px_4px_0px_#00000040]">
        <div className="flex justify-end mb-4">
          <button
            
            onClick={() => setShowCode(!showCode)}
            className="font-heading bg-brand-pink text-brand-dark font-black px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-[#FFD3D4]"
          >
            {showCode ? 'show preview' : 'show code'}
            
          </button>
        </div>

        {showCode ? (
          <pre className="bg-brand-yellow text-brand-dark text-sm p-4 rounded-xl overflow-x-auto w-full max-w-full box-border">
            <code className='whitespace-pre'>{topic.code}</code>
          </pre>
        ) : (
          <div className="bg-brand-light-pink p-8 rounded-xl flex items-center justify-center">
            {Preview && <Preview />}
          </div>
        )}
      </div>

    <p className='font-body text-brand-dark font-semibold mt-8 opacity-90'>
      {topic.explanation}
    </p>

    </div>
  );
}