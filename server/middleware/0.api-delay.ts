export default defineEventHandler(async (event) => {
  if (event.path.startsWith('/api/')) {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
})
