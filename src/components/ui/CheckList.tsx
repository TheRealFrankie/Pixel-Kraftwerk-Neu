import React from 'react';

interface CheckListProps {
  items: (string | React.ReactNode)[];
  variant?: 'green' | 'red';
  className?: string;
}

const CheckList: React.FC<CheckListProps> = ({ items, variant = 'green', className = '' }) => {
  const stroke = variant === 'red' ? '#B91C1C' : '#0E7C72';
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#404B48' }}>
          <svg
            className="flex-shrink-0 mt-0.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="7.5" stroke="#E4E9E7" />
            <path
              d="M5 8l2.5 2.5L11 5.5"
              stroke={stroke}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
