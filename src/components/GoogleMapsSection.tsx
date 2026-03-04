'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

// Originaler Google-Locator-HTML-Code, 1:1 übernommen
const LOCATOR_HTML = `<!--
  Copyright 2023 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!DOCTYPE html>
<html>
  <head>
    <title>Locator</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }

      gmpx-store-locator {
        width: 100%;
        height: 100%;

        /* These parameters customize the appearance of Locator Plus. See the documentation at
           https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
           for more information. */
        --gmpx-color-surface: #fff;
        --gmpx-color-on-surface: #212121;
        --gmpx-color-on-surface-variant: #757575;
        --gmpx-color-primary: #1967d2;
        --gmpx-color-outline: #e0e0e0;
        --gmpx-fixed-panel-width-row-layout: 28.5em;
        --gmpx-fixed-panel-height-column-layout: 65%;
        --gmpx-font-family-base: "Roboto", sans-serif;
        --gmpx-font-family-headings: "Roboto", sans-serif;
        --gmpx-font-size-base: 0.875rem;
        --gmpx-hours-color-open: #188038;
        --gmpx-hours-color-closed: #d50000;
        --gmpx-rating-color: #ffb300;
        --gmpx-rating-color-empty: #e0e0e0;
      }
    </style>
    <script>
      const CONFIGURATION = {
        "locations": [
          {"title":"Pixel Kraftwerk | KI - Automatisierungen","address1":"Neuer Weg 9A","address2":"Groitzsch, Germany","coords":{"lat":51.1522468,"lng":12.2794798},"placeId":"ChIJny0EN6XvpkcRSXRfTgqw7vU"}
        ],
        "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
        "mapsApiKey": "AIzaSyCFbuIbTkYPRiJNY7DXPP_76rPX7eXQHbg",
        "capabilities": {"input":false,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false,"actions":false}
      };

    </script>
    <script type="module">
      document.addEventListener('DOMContentLoaded', async () => {
        await customElements.whenDefined('gmpx-store-locator');
        const locator = document.querySelector('gmpx-store-locator');
        locator.configureFromQuickBuilder(CONFIGURATION);
      });
    </script>
  </head>
  <body>
    <script
      type="module"
      src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"
    ></script>

    <!-- Uses components from the Extended Component Library; see
         https://github.com/googlemaps/extended-component-library for more information
         on these HTML tags and how to configure them. -->
    <gmpx-api-loader
      key="AIzaSyCFbuIbTkYPRiJNY7DXPP_76rPX7eXQHbg"
      solution-channel="GMP_QB_locatorplus_v11_c"
    ></gmpx-api-loader>
    <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
  </body>
</html>`;

const GoogleMapsSection: React.FC = () => {
  const address = `${businessInfo.address.streetAddress}, ${businessInfo.address.postalCode} ${businessInfo.address.addressLocality}`;
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="py-16 bg-dark-400">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Unser <span className="text-primary-500">Standort</span>
            </h2>
            <div className="flex items-center justify-center text-light-200 mb-2">
              <MapPin size={20} className="mr-2 text-primary-500" />
              <p className="text-lg">
                {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
              </p>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[450px] bg-dark-500 border-2 border-dark-100 overflow-hidden">
            <div className="absolute inset-0">
              <iframe
                srcDoc={LOCATOR_HTML}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Maps Standort Pixel Kraftwerk"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-dark-500/95 border border-primary-500/30 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="text-primary-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-light-100 font-heading font-bold mb-1">
                    {businessInfo.name}
                  </h3>
                  <p className="text-light-200 text-sm">
                    {businessInfo.address.streetAddress}<br />
                    {businessInfo.address.postalCode} {businessInfo.address.addressLocality}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir//${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary-500 text-sm font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
