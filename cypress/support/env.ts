export const getUserName = () => Cypress.env('userName')
export const getPassword = () => Cypress.env('password')
export const getLogin = () => Cypress.env('login')
export const getPasswordConfirmation = () => Cypress.env('passwordConfirmation')
export const getFirstName = () => Cypress.env('firstName')
export const getLastName = () => Cypress.env('lastName')
export const getMail = () => Cypress.env('mail')
export const getNewPassword = () => Cypress.env('newPassword')
export const getNewPasswordConfirmation = () =>
  Cypress.env('newPasswordConfirmation')
export const getInvalidMail = () => Cypress.env('invalidMail')
export const getUniqueLogin = () => Cypress.env('uniqueLogin')
export const getTwoFaCodes = (): string[] => {
  const codesString = Cypress.env('twoFaCodes')

  if (!codesString) {
    throw new Error('CYPRESS_twoFaCodes is missing. Check your .env file.')
  }
  return codesString.split(',').map((code: string) => code.trim()).filter((code: string) => code.length > 0)
}
