interface Notification {
  id: string;
  type: string;
}

export default defineEventHandler(async () => {
  const storage = useStorage('db')
  const notifications = await storage.getItem<Notification[]>('notifications') ?? []

  if (notifications.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No notifications found'
    })
  }

  return notifications
})
