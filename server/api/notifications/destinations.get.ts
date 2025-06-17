export default defineEventHandler(async () => {
  const storage = useStorage('db')
  const notifications = await storage.getItem<Notification[]>('notifications') ?? []

  if (notifications.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No notifications found'
    })
  }

  return [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]
})
