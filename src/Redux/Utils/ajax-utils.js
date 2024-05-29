


export function objectToUrl(url, object) {
  const encoded = Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
    .replace(/[a-zA-Z0-9]+[=](null)(&)/g, '')
    .replace(/(&)[a-zA-Z0-9]+[=](null)/g, '')
  // .replace(/[a-zA-Z0-9]+[=]([\s]+)?(&)/g, '')
  // .replace(/(&)[a-zA-Z0-9]+[=]+([\s]+)?(?![a-zA-Z0-9-])/g, '')
  return `${url}?${encoded}`
}

export function objectToUrlTable(url, object) {
  const encoded = Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
    .replace(/[a-zA-Z0-9]+[=](null)(&)/g, '')
    .replace(/(&)[a-zA-Z0-9]+[=](null)/g, '')
    .replace(/[a-zA-Z0-9]+[=]([\s]+)?(&)/g, '')
    .replace(/(&)[a-zA-Z0-9]+[=]+([\s]+)?(?![a-zA-Z0-9-])/g, '')
  return `${url}?${encoded}`
}
