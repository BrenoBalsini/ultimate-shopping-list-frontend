import React from 'react';
import { useTranslation } from 'react-i18next';

const Pantry: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('pantry.title')}
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-400">{t('pantry.empty')}</p>
        </div>
      </div>
    </div>
  );
};
export default Pantry;
