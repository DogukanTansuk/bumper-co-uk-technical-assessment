export function getCurrentUrl(pathname: string) {
  return pathname.split(/[?#]/)[0]
}

export function checkIsActive(pathname: string, url: string, exact = false) {
  const current = getCurrentUrl(pathname)
  if (!current || !url) {
    return false
  }

  if (current === url) {
    return true
  }

  if (current.indexOf(url) > -1 && !exact) {
    return true
  }

  return false
}

export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname
