export const Cookies = () => {
  //get cookies
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  // set cookies
  function setCookie(name, value, options = {}) {
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    }

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
      encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }

    document.cookie = updatedCookie
  }

  function deleteCookie(name) {
    setCookie(name, '', {
      'max-age': -1
    })
  }

  // эти я написал сам
  function getCook(name) {
    return getCookie(name) ? JSON.parse(getCookie(name)) : null
  }
  function setCook(name, data, ...args) {
    return data ? setCookie(name, JSON.stringify(data), ...args) : null
  }

  return { getCook, setCook, deleteCookie }
}
