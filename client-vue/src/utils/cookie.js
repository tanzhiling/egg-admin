import Cookies from 'js-cookie'
export const getCookie = name => {
  return Cookies.get(name)
}

export const setCookie = (name, value, expires) => {
  return Cookies.set(name, value, { expires })
}

export const removeCookie = name => {
  return Cookies.remove(name)
}
