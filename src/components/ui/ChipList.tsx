import React from 'react';

interface ChipListProps {
  items: string[];
  className?: string;
}

const CHECK_SVG = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6l3 3 5-5" stroke="#0E7C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChipList: React.FC<ChipListProps> = ({ items, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border"
        style={{
          background: 'rgba(14,124,114,0.06)',
          color: '#0E7C72',
          borderColor: 'rgba(14,124,114,0.2)',
        }}
      >
        {CHECK_SVG}
        {item}
      </span>
    ))}
  </div>
);

export default ChipList;
