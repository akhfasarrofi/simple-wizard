/**
 * Checks if a value is null.
 *
 * This function evaluates whether the provided value is strictly equal to `null`.
 *
 * @template T - The type of the value being checked.
 * @param value - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 *
 * @example
 * // Example 1: Checking a null value
 * const result1 = isNull(null);
 * console.log(result1); // true
 *
 * // Example 2: Checking an undefined value
 * const result2 = isNull(undefined);
 * console.log(result2); // false
 *
 * // Example 3: Checking a non-null value
 * const result3 = isNull(42);
 * console.log(result3); // false
 *
 * // Example 4: Checking an empty object
 * const result4 = isNull({});
 * console.log(result4); // false
 */
function isNull<T>(value: T): boolean {
  return value === null
}

export default isNull
