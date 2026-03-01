import React from 'react';
import { Terminal } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="logo flex items-center space-x-2 group">
      <Terminal className="text-primary-500 group-hover:text-primary-400 transition-colors duration-300" size={28} />
      <div className="font-heading font-bold text-light-100">
        <span>PIXEL_KRAFTWERK</span>
      </div>
    </a>
  );
};

export default Logo;