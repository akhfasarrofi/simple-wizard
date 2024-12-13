/**
 * Creates a new object by omitting specified keys from the source object.
 *
 * This function returns a new object that includes all properties from the
 * source object except for the keys specified in the `keysToOmit` array.
 *
 * @template T - The type of the source object.
 * @param obj - The source object from which keys should be omitted.
 * @param keysToOmit - An array of keys to omit from the source object.
 * @returns A new object with the specified keys omitted.
 *
 * @example
 * // Example 1: Omitting specific keys
 * const user = { id: 1, name: 'John', age: 30, email: 'john@example.com' };
 * const result = omit(user, ['age', 'email']);
 * console.log(result); // { id: 1, name: 'John' }
 *
 * // Example 2: Omitting no keys
 * const data = { key: 'value', flag: true };
 * const noOmission = omit(data, []);
 * console.log(noOmission); // { key: 'value', flag: true }
 *
 * // Example 3: Edge case with non-existent keys
 * const sample = { a: 1, b: 2 };
 * const omitted = omit(sample, ['c']);
 * console.log(omitted); // { a: 1, b: 2 }
 */
function omit<T>(obj: T, keysToOmit: (keyof T)[]): Partial<T> {
  const result: Partial<T> = {}

  Object.keys(obj as object).forEach((key: string) => {
    if (!keysToOmit.includes(key as keyof T)) {
      result[key as keyof T] = obj[key as keyof T]
    }
  })

  return result
}

export default omit
