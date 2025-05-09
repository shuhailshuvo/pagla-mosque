'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
    console.log('Current language:', i18n.language); // Log the current language
  return (
    <div style={{width:50}}>
        {i18n.language === 'en' ? 
            <button onClick={() => i18n.changeLanguage('bn')}>বাংলা</button>
        :
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
        }

      {/* <h1>{t('welcome')}</h1>
      <p>{t('date_label')}</p> */}
    </div>
  );
};

export default LanguageSwitcher;
