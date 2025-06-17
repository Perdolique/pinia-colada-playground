import { notificationKeys, type NotificationType } from '../keys/notifications';

export const getNotificationsByType = defineQueryOptions((type: NotificationType) => ({
  key: notificationKeys.byType(type),
  enabled: import.meta.client === true,

  query() {
    return $fetch('/api/notifications', {
      query: {
        type
      }
    })
  }
}))

export const getDestinationsByType = defineQueryOptions((type: NotificationType) => ({
  key: notificationKeys.destinationsByType(type),
  enabled: import.meta.client === true,

  query() {
    return $fetch('/api/notifications/destinations', {
      query: {
        type
      }
    })
  }
}))
