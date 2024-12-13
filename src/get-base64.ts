/**
 * Converts a file to its base64 representation.
 *
 * @param file - The file to convert.
 * @returns A promise that resolves to the base64 representation of the file as a string.
 *
 * @example
 * // Example 1: Convert an image file to base64
 * const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
 * if (fileInput?.files?.[0]) {
 *   getBase64(fileInput.files[0])
 *     .then((base64) => {
 *       console.log('Base64 representation:', base64);
 *     })
 *     .catch((error) => {
 *       console.error('Error converting file to base64:', error);
 *     });
 * }
 *
 * @example
 * // Example 2: Handling errors
 * const file = new File(['invalid-content'], 'test.txt', { type: 'text/plain' });
 * getBase64(file)
 *   .then((base64) => {
 *     console.log('Base64:', base64);
 *   })
 *   .catch((error) => {
 *     console.error('Failed to convert file:', error.message);
 *   });
 */
function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

export default getBase64
