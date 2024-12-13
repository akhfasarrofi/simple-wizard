/**
 * Checks if the given value is empty.
 *
 * This function determines whether a value is considered "empty." A value is deemed empty if:
 * - It is `null` or `undefined`.
 * - It is an object with no keys.
 * - It is an array with no items.
 * - It is a string with no characters.
 * - It is a number equal to `0`.
 *
 * @template T - The type of the value being checked.
 * @param value - The value to check.
 * @returns `true` if the value is empty, otherwise `false`.
 *
 * @example
 * // Example 1: Checking null or undefined
 * console.log(isEmpty(null)); // true
 * console.log(isEmpty(undefined)); // true
 *
 * // Example 2: Checking objects
 * console.log(isEmpty({})); // true
 * console.log(isEmpty({ key: 'value' })); // false
 *
 * // Example 3: Checking arrays
 * console.log(isEmpty([])); // true
 * console.log(isEmpty([1, 2, 3])); // false
 *
 * // Example 4: Checking strings
 * console.log(isEmpty('')); // true
 * console.log(isEmpty('Hello, World!')); // false
 *
 * // Example 5: Checking numbers
 * console.log(isEmpty(0)); // true
 * console.log(isEmpty(42)); // false
 */
function isEmpty<T>(value: T): boolean {
  // If value is null or undefined, return true
  if (value == null || typeof value === 'undefined') {
    return true
  }

  // If value is an object, check if it has any keys
  if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.keys(value).length === 0
  }

  // If value is an array, check if it has any items
  if (Array.isArray(value)) {
    return value.length === 0
  }

  // If value is a string, check if it has any characters
  if (typeof value === 'string') {
    return value.length === 0
  }

  // If value is a number, check if it is 0
  if (typeof value === 'number') {
    return value === 0
  }

  return false
}

export default isEmpty
