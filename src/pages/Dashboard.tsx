import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLists } from '../hooks/useLists';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lists, loading, fetchLists, deleteList } = useLists();

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  const handleCreateList = () => {
    navigate('/lists/new');
  };

  const handleViewList = (listId: string) => {
    navigate(`/lists/${listId}`);
  };

  const handleDeleteList = async (listId: string) => {
    if (window.confirm(t('lists.confirmDelete'))) {
      await deleteList(listId);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('dashboard.title')}
          </h1>
          <button
            onClick={handleCreateList}
            className="px-4 py-2 bg-olo text-white rounded-md hover:bg-olo-600 focus:outline-none focus:ring-2 focus:ring-olo focus:ring-offset-2"
          >
            {t('lists.createNew')}
          </button>
        </div>

        {lists.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('lists.empty')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lists.map((list) => (
              <div
                key={list._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleViewList(list._id)}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {list.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {list.description || t('lists.noDescription')}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {list.itemCount || 0} {t('lists.items')}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteList(list._id);
                    }}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    {t('common.delete')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
