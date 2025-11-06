import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('settings.title', 'Settings')}
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t('settings.preferences', 'Preferences')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('settings.comingSoon', 'User preferences and settings coming soon!')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
