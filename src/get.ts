/**
 * Retrieves a value from an object using the specified path.
 *
 * @template T - The type of the source object.
 * @template K - The type of the default value.
 * @param obj - The source object.
 * @param path - The path to retrieve the value from the object. The path is specified as a dot-separated string.
 * @param defaultValue - The default value to return if the path is not found or the value is undefined.
 * @returns The value found within the object based on the path, or the default value if the path is not found or results in an undefined value.
 *
 * @example
 * // Example 1: Accessing a nested property
 * const data = { user: { name: 'Alice', age: 25 } };
 * console.log(get(data, 'user.name', 'Unknown')); // Output: 'Alice'
 *
 * @example
 * // Example 2: Handling a missing property
 * const data = { user: { name: 'Alice', age: 25 } };
 * console.log(get(data, 'user.gender', 'Not specified')); // Output: 'Not specified'
 *
 * @example
 * // Example 3: Accessing a deeply nested property
 * const config = { server: { db: { host: 'localhost', port: 5432 } } };
 * console.log(get(config, 'server.db.port', 3306)); // Output: 5432
 *
 * @example
 * // Example 4: Using an invalid path
 * const data = { user: { name: 'Alice' } };
 * console.log(get(data, 'user.details.hobbies', [])); // Output: []
 */
function get<T extends object, K>(obj: T, path: string, defaultValue: K): K | undefined {
  const pathArray = path.split('.')
  let result: unknown = obj

  pathArray.forEach((key) => {
    if (
      result
      && typeof result === 'object'
      && key in (result as Record<string, unknown>)
    ) {
      result = (result as Record<string, unknown>)[key]
    }
    else {
      result = defaultValue
    }
  })

  return result !== undefined ? (result as K) : defaultValue
}

export default get
