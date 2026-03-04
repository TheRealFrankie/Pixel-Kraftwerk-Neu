import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

interface NAPInfoProps {
  variant?: 'full' | 'minimal' | 'inline';
  showIcons?: boolean;
  className?: string;
}

const NAPInfo: React.FC<NAPInfoProps> = ({
  variant = 'full',
  showIcons = true,
  className = ''
}) => {
  if (variant === 'inline') {
    return (
      <div className={`inline-flex flex-wrap gap-4 items-center ${className}`}>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{businessInfo.address.streetAddress}</span>,{' '}
          <span itemProp="postalCode">{businessInfo.address.postalCode}</span>{' '}
          <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>
        </span>
        <span>|</span>
        <a
          href={`tel:${businessInfo.contact.telephoneE164}`}
          itemProp="telephone"
          className="hover:text-primary-500 transition-colors"
        >
          {businessInfo.contact.telephone}
        </a>
        <span>|</span>
        <a
          href={`mailto:${businessInfo.contact.email}`}
          itemProp="email"
          className="hover:text-primary-500 transition-colors"
        >
          {businessInfo.contact.email}
        </a>
        <span>|</span>
        <span itemProp="openingHours">{businessInfo.openingHoursDisplay}</span>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`space-y-2 text-sm ${className}`}>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div itemProp="streetAddress">{businessInfo.address.streetAddress}</div>
          <div>
            <span itemProp="postalCode">{businessInfo.address.postalCode}</span>{' '}
            <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>
          </div>
        </div>
        <div>
          <a
            href={`tel:${businessInfo.contact.telephoneE164}`}
            itemProp="telephone"
            className="hover:text-primary-500 transition-colors"
          >
            {businessInfo.contact.telephone}
          </a>
        </div>
        <div>
          <a
            href={`mailto:${businessInfo.contact.email}`}
            itemProp="email"
            className="hover:text-primary-500 transition-colors"
          >
            {businessInfo.contact.email}
          </a>
        </div>
        <div itemProp="openingHours">{businessInfo.openingHoursDisplay}</div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-start gap-3">
        {showIcons && (
          <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
        )}
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div className="font-bold text-light-100 mb-1">Adresse</div>
          <div className="text-light-200">
            <div itemProp="streetAddress">{businessInfo.address.streetAddress}</div>
            <div>
              <span itemProp="postalCode">{businessInfo.address.postalCode}</span>{' '}
              <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>
            </div>
            <div itemProp="addressCountry">Deutschland</div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcons && (
          <Phone size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <div className="font-bold text-light-100 mb-1">Telefon</div>
          <a
            href={`tel:${businessInfo.contact.telephoneE164}`}
            itemProp="telephone"
            className="text-light-200 hover:text-primary-500 transition-colors"
          >
            {businessInfo.contact.telephone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcons && (
          <Mail size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <div className="font-bold text-light-100 mb-1">E-Mail</div>
          <a
            href={`mailto:${businessInfo.contact.email}`}
            itemProp="email"
            className="text-light-200 hover:text-primary-500 transition-colors"
          >
            {businessInfo.contact.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcons && (
          <Clock size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <div className="font-bold text-light-100 mb-1">Öffnungszeiten</div>
          <span className="text-light-200" itemProp="openingHours">
            {businessInfo.openingHoursDisplay}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NAPInfo;
