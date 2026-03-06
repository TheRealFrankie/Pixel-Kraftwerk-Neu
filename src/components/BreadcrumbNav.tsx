import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  overlay?: boolean;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, overlay }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={
        overlay
          ? 'text-sm text-light-300/80 drop-shadow-md'
          : 'text-sm text-light-400'
      }
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className={overlay ? 'text-light-300/50' : 'text-light-400/50'} aria-hidden="true">/</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className={
                  overlay
                    ? 'hover:text-primary-400 transition-colors duration-200'
                    : 'hover:text-primary-400 transition-colors duration-200'
                }
              >
                {item.label}
              </a>
            ) : (
              <span className={overlay ? 'text-light-100' : 'text-light-200'}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
