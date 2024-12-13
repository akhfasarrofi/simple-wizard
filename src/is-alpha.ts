/**
 * Checks if a character is an alphabet.
 * @param char - The character to check.
 * @returns True if the character is an alphabet, false otherwise.
 */
function isAlpha(char: string): boolean {
  return /^[a-z]+$/i.test(char)
}

export default isAlpha
