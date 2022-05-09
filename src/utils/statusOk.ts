export const statusOk = (status: number): boolean => {
  const regex = /^2[0-9][0-9]$/
  return regex.test(status.toString())
}
