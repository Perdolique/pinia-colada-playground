interface Notification {
  id: string;
  type: string;
}

export default defineEventHandler(async () => {
  const storage = useStorage('db')
  const notifications = await storage.getItem<Notification[]>('notifications') ?? []

  if (notifications.length > 0) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Notifications already exist'
    })
  }

  const notification = {
    id: Date.now(),
    type: 'info'
  }

  storage.setItem('notifications', [notification])

  return notification
})
