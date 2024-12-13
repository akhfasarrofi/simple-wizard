/**
 * Checks if a value is present in an array.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search.
 * @param value - The value to search for.
 * @param fromIndex - The index to start searching from. Default is 0.
 * @returns `true` if the value is found in the array, otherwise `false`.
 *
 * @example
 * // Example 1: Basic usage
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(includes(numbers, 3)); // Output: true
 *
 * @example
 * // Example 2: Searching from a specific index
 * const fruits = ['apple', 'banana', 'cherry', 'date'];
 * console.log(includes(fruits, 'banana', 2)); // Output: false
 *
 * @example
 * // Example 3: Using with an empty array
 * const emptyArray: number[] = [];
 * console.log(includes(emptyArray, 1)); // Output: false
 */
function includes<T>(array: T[], value: T, fromIndex: number = 0): boolean {
  for (let i = fromIndex; i < array.length; i += 1) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}

export default includes
