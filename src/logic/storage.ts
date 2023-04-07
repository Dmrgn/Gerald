import { useStorageLocal } from '~/composables/useStorageLocal'

export const favoritesStorage = useStorageLocal('store-name', 'Name')
