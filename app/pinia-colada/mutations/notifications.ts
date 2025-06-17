import { notificationKeys, type NotificationType } from '../keys/notifications';

export const useCreateNotification = defineMutation(() => {
  const { mutate, ...mutation } = useMutation({
    mutation(type: NotificationType) {

      return $fetch('/api/notifications', {
        method: 'POST',

        body: {
          type
        }
      })
    },

    onSuccess(data, type) {
      const cache = useQueryCache()

      cache.setQueryData(notificationKeys.byType(type), data)
    }
  })

  function createNotification(type: NotificationType) {
    return mutate(type)
  }

  return {
    createNotification,
    ...mutation
  }
})

export const useDeleteNotification = defineMutation(() => {
  const { mutate, ...mutation } = useMutation({
    mutation(type: NotificationType) {
      return $fetch('/api/notifications', {
        method: 'DELETE',

        body: {
          type
        }
      })
    },

    onSuccess(data, type) {
      const cache = useQueryCache()

      const destinationEntries = cache.getEntries({
        key: notificationKeys.destinationsByType(type)
      })

      console.log('Deleting destinations from cache:', destinationEntries)

      for (const entry of destinationEntries) {
        cache.remove(entry)
      }

      cache.setQueryData(notificationKeys.byType(type), undefined)
    }
  })

  function deleteNotification(type: NotificationType) {
    return mutate(type)
  }

  return {
    deleteNotification,
    ...mutation
  }
})
