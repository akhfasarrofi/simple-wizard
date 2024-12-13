/**
 * Formats a number according to the specified locale.
 *
 * This function formats a given number into a locale-specific string representation,
 * such as adding commas for thousands or periods for decimals based on the provided locale.
 *
 * @param value - The number to format.
 * @param format - The locale format to use for formatting the number.
 *                 Supported values are `'id-ID'` (Indonesian) and `'en-EN'` (English).
 * @returns The formatted number as a string.
 *
 * @example
 * // Example 1: Formatting in Indonesian locale
 * const formattedID = numberFormatter(1234567.89, 'id-ID');
 * console.log(formattedID); // "1.234.567,89"
 *
 * // Example 2: Formatting in English locale
 * const formattedEN = numberFormatter(1234567.89, 'en-EN');
 * console.log(formattedEN); // "1,234,567.89"
 *
 * // Example 3: Formatting integers
 * const formattedInt = numberFormatter(1000000, 'en-EN');
 * console.log(formattedInt); // "1,000,000"
 */
function numberFormatter(value: number, format: 'id-ID' | 'en-EN'): string {
  return value.toLocaleString(format)
}

export default numberFormatter
