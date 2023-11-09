export default async function startMonitoring({ name, email, id }) {
  if (process.env.NODE_ENV === 'production') {
    const LogRocket = (await import('logrocket')).default
    LogRocket.init('acfgqb/voidr-images-frontend')
    LogRocket.identify(id, {
      name,
      email,
    })
  }
}
