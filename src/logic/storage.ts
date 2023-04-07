import { useStorageLocal } from '~/composables/useStorageLocal'


export const taskList = useStorageLocal('tasks', [])
export const favoritesStorage = useStorageLocal('store-name', 'Name')
