export function capitalize(str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function printDate(timestamp) {
  const d = new Date(timestamp)
  return d.toUTCString().split(" ").slice(0,4).join(" ")
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const random = (Math.random() * 16) | 0;
    const value = character === 'x' ? random : (random & 0x3) | 0x8;

    return value.toString(16);
  });
}