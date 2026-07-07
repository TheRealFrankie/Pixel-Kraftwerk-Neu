import React from 'react';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const PremiumCard: React.FC<PremiumCardProps> = ({ children, className = '', highlight = false }) => (
  <div
    className={`rounded-2xl border bg-white p-6 shadow-card ${className}`}
    style={{ borderColor: highlight ? 'rgba(14,124,114,0.3)' : '#E4E9E7' }}
  >
    {children}
  </div>
);

export default PremiumCard;
