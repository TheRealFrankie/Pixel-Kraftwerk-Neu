import React from 'react';
import { MUTED, PETROL, BORDER } from '@/lib/theme';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  /** @deprecated Wird nicht mehr verwendet – Breadcrumbs sind immer hell */
  overlay?: boolean;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span style={{ color: BORDER }} aria-hidden="true">/</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                style={{ color: MUTED }}
                className="transition-colors duration-200 hover:underline"
                onMouseEnter={(e) => (e.currentTarget.style.color = PETROL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ color: MUTED }} className="font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
