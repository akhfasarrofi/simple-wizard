/**
 * Finds the first element in the array that satisfies the provided testing function.
 *
 * This function allows searching for an object in an array by partially matching
 * its properties with the provided condition object. It is useful for finding specific
 * items in a collection based on partial criteria.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to search.
 * @param condition - An object containing the properties and values to match.
 * @returns The first matching element, or `undefined` if no element matches the condition.
 *
 * @example
 * interface User {
 *   id: number;
 *   name: string;
 *   age: number;
 * }
 *
 * const users: User[] = [
 *   { id: 1, name: "Alice", age: 25 },
 *   { id: 2, name: "Bob", age: 30 },
 *   { id: 3, name: "Charlie", age: 35 },
 * ];
 *
 * // Find user by name
 * const result1 = find(users, { name: "Alice" });
 * console.log(result1); // { id: 1, name: "Alice", age: 25 }
 *
 * // Find user by age
 * const result2 = find(users, { age: 30 });
 * console.log(result2); // { id: 2, name: "Bob", age: 30 }
 *
 * // Find user by name and age
 * const result3 = find(users, { name: "Charlie", age: 35 });
 * console.log(result3); // { id: 3, name: "Charlie", age: 35 }
 *
 * // No match
 * const result4 = find(users, { name: "Dave" });
 * console.log(result4); // undefined
 */
function find<T>(array: T[], condition: Partial<T>): T | undefined {
  if (Object.keys(condition).length === 0) {
    return undefined
  }

  return array.find((item) => {
    return (Object.keys(condition) as Array<keyof T>).every(
      key => item[key] === condition[key],
    )
  })
}

export default find
