/**
 * Creates a debounced version of the provided function.
 *
 * A debounced function delays the execution of the given `func`
 * until after `delay` milliseconds have elapsed since the last time
 * the debounced function was invoked. This is useful for rate-limiting
 * events like resizing, scrolling, or typing.
 *
 * @template F - The type of the function to debounce.
 * @param func - The function to debounce.
 * @param delay - The delay in milliseconds before the function is executed.
 * @returns A debounced version of the function.
 *
 * @example
 * // Create a debounced function
 * const log = (message: string) => console.log(message);
 * const debouncedLog = debounce(log, 300);
 *
 * // Call the debounced function multiple times
 * debouncedLog("Hello"); // Will not immediately log
 * debouncedLog("World"); // Previous call is canceled
 *
 * // After 300ms of no calls, "World" will be logged
 */
function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  delay: number,
): ((...args: Parameters<F>) => void) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<F>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
      timeoutId = null
    }, delay)
  }
}

export default debounce
