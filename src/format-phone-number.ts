import { formatPhone } from './regex'

/**
 * Formats a phone number string into a specific format.
 *
 * This function takes a phone number string, removes any non-numeric characters,
 * and formats it into the pattern `XXXX-XXXX-XXXX` if the input matches the required structure.
 * If the input is invalid or does not match the format, it returns `null`.
 *
 * @param phoneNumberString - The phone number string to be formatted.
 * @returns The formatted phone number string in the format `XXXX-XXXX-XXXX`, or `null` if the input is invalid.
 *
 * @example
 * // Assuming `formatPhone` is a regex that matches a 12-digit phone number.
 * import { formatPhone } from './regex'; // Example: /^\d{4}(\d{4})(\d{4})$/
 *
 * const validPhone = "123456789012";
 * console.log(formatPhoneNumber(validPhone)); // "1234-5678-9012"
 *
 * const invalidPhone = "12345";
 * console.log(formatPhoneNumber(invalidPhone)); // null
 *
 * const phoneWithExtraChars = "(123) 456-789012";
 * console.log(formatPhoneNumber(phoneWithExtraChars)); // "1234-5678-9012"
 *
 * const emptyPhone = "";
 * console.log(formatPhoneNumber(emptyPhone)); // null
 */
function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
  const match = cleaned.match(formatPhone)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return null
}

export default formatPhoneNumber
