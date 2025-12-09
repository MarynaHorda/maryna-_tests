export function generateRandomFutureDate(): string {
  const randomDays = Math.floor(Math.random() * 335) + 30

  const futureDate = new Date()

  futureDate.setDate(futureDate.getDate() + randomDays)

  const year = futureDate.getFullYear()
  const month = String(futureDate.getMonth() + 1).padStart(2, '0')
  const day = String(futureDate.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
