import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ListDetail: React.FC = () => {
  const { t } = useTranslation();
  const { listId } = useParams<{ listId: string }>();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('list.detail')}
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-400">
            List ID: {listId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
