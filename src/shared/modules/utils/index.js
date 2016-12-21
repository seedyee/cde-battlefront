export const isEmptyObj = (obj) => Object.keys(obj).length === 0

export const formatDate = (timestamp) => {
  const myDate = new Date(timestamp)
  const year = myDate.getFullYear()
  const month = myDate.getMonth() + 1
  const day = myDate.getDate()
  return `${year}-${month}-${day}`
}
