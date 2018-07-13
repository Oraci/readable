export function capitalize(str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function printDate(timestamp) {
  const d = new Date(timestamp)
  return d.toUTCString().split(" ").slice(0,4).join(" ")
}