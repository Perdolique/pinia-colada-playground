export type NotificationType = 'info'

export const notificationKeys = {
  root: ['notifications'],
  byType: (type: NotificationType) => [...notificationKeys.root, 'byType', type],

  destinationsByType: (type: NotificationType) => [
    ...notificationKeys.byType(type),
    'destinations',
  ]
} as const
