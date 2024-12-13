/**
 * Formats a numeric or string value as currency based on the specified format and currency.
 *
 * @param {number | string} value - The numeric or string value to be formatted as currency.
 * @param {'en-US' | 'id-ID'} format - The format to be used for the number representation (e.g., 'en-US' for English, 'id-ID' for Indonesian).
 * @param {'IDR' | 'USD'} currency - The currency code to be used for formatting (e.g., 'IDR' for Indonesian Rupiah, 'USD' for US Dollar).
 * @returns {string} - The formatted currency string.
 *
 * @example
 * // Format a value as USD currency
 * const result = currencyFormatter(1234.56, 'en-US', 'USD');
 * console.log(result); // Output: $1,234.56
 *
 * @example
 * // Format a value as IDR currency
 * const result = currencyFormatter('7890.12', 'id-ID', 'IDR');
 * console.log(result); // Output: Rp 7.890,12
 */
function currencyFormatter(
  value: number | string,
  format: 'en-US' | 'id-ID',
  currency: 'IDR' | 'USD',
): string {
  return Intl.NumberFormat(format, {
    style: 'currency',
    currency,
  }).format(value as number)
}

export default currencyFormatter
