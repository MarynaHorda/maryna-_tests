export function randomWait(min: number = 1000, max: number = 3000): void {
  const waitTime = Math.floor(Math.random() * (max - min + 1)) + min;
  cy.wait(waitTime);
}

