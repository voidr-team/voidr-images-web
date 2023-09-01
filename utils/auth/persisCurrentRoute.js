function persistCurrentRoute() {
  if (/logout/.test(window.location.href) || window.location.pathname === '/')
    return
  sessionStorage.setItem('returnTo', window.location.href)
}
export default persistCurrentRoute
