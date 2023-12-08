export default async function startMonitoring({ name, email, id }) {
  if (process.env.NODE_ENV === 'production') {
    const LogRocket = (await import('logrocket')).default
    LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_KEY)
    LogRocket.identify(id, {
      name,
      email,
    })
  }
}
