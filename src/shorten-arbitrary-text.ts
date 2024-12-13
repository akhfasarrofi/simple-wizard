/**
 * Shortens an arbitrary text to a specified length.
 *
 * This function truncates the given text to the specified length and appends
 * an ellipsis (`...`) if the text exceeds the maximum length. If the text length
 * is less than or equal to the specified length, it returns the original text.
 *
 * @param text - The text to be shortened.
 * @param truncate - The maximum length of the shortened text.
 * @returns The shortened text with an ellipsis if it exceeds the maximum length, or the original text.
 *
 * @example
 * // Example 1: Shortening a long text
 * const longText = "This is a very long text that needs to be shortened.";
 * const shortenedText = shortenArbitraryText(longText, 20);
 * console.log(shortenedText); // "This is a very long..."
 *
 * // Example 2: Text within the maximum length
 * const shortText = "Short text";
 * const result = shortenArbitraryText(shortText, 20);
 * console.log(result); // "Short text"
 *
 * // Example 3: Edge case with exact length
 * const exactLengthText = "Exact length text";
 * const exactResult = shortenArbitraryText(exactLengthText, 17);
 * console.log(exactResult); // "Exact length text"
 */
function shortenArbitraryText(text: string, truncate: number): string {
  if (text.length > truncate) {
    return `${text.slice(0, truncate)}...`
  }
  return text
}

export default shortenArbitraryText
