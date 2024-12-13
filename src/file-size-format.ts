/**
 * Checks if the given file size is less than 2 MB.
 *
 * This function is commonly used to validate file uploads
 * by ensuring the file size does not exceed the 2 MB limit.
 *
 * @param size - The size of the file in bytes.
 * @returns `true` if the file size is less than 2 MB, otherwise `false`.
 *
 * @example
 * const fileSize = 1.5 * 1024 * 1024; // 1.5 MB in bytes
 * console.log(isLt2M(fileSize)); // true
 *
 * const largeFileSize = 3 * 1024 * 1024; // 3 MB in bytes
 * console.log(isLt2M(largeFileSize)); // false
 */
export const isLt2M = (size: number): boolean => size / 1024 / 1024 < 2

/**
 * Checks if the given file size is less than 1 MB.
 *
 * This function helps enforce stricter size limits, useful for scenarios
 * where smaller file sizes are required.
 *
 * @param size - The size of the file in bytes.
 * @returns `true` if the file size is less than 1 MB, otherwise `false`.
 *
 * @example
 * const fileSize = 0.8 * 1024 * 1024; // 0.8 MB in bytes
 * console.log(isLt1M(fileSize)); // true
 *
 * const largeFileSize = 1.2 * 1024 * 1024; // 1.2 MB in bytes
 * console.log(isLt1M(largeFileSize)); // false
 */
export const isLt1M = (size: number): boolean => size / 1024 / 1024 < 1

/**
 * Checks if the given file is a JPG or PNG image.
 *
 * This function is useful for file type validation during image uploads.
 *
 * @param file - The file to be validated.
 * @returns `true` if the file type is 'image/jpeg' or 'image/png', otherwise `false`.
 *
 * @example
 * const jpgFile = new File([], "image.jpg", { type: "image/jpeg" });
 * console.log(isJpgOrPng(jpgFile)); // true
 *
 * const pngFile = new File([], "image.png", { type: "image/png" });
 * console.log(isJpgOrPng(pngFile)); // true
 *
 * const pdfFile = new File([], "document.pdf", { type: "application/pdf" });
 * console.log(isJpgOrPng(pdfFile)); // false
 */
export function isJpgOrPng(file: File): boolean {
  return file.type === 'image/jpeg' || file.type === 'image/png'
}
