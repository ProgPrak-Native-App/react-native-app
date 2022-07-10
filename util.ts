/**
 * Partitions an array into an object of subarrays by the result of a given key function.
 * @example
 * // returns { A: ['Anna', 'Albert'], B: 'Benny' }
 * partitionBy(['Anna', 'Albert', 'Benny'], (element) => element.charAt(0))
 * @param array The input array. Not mutated.
 * @param keyFunction A function mapping each element of the input array to a string which will serve as its key in the
 * returned object.
 * @return An object containing one entry per distinct key returned by the key function. The value of each entry is a
 * new array of all the input elements which the key function mapped to that key.
 */
export function partitionBy<T>(array: T[], keyFunction: (element: T) => string): Record<string, T[]> {
  const result: Record<string, T[]> = {};
  array.forEach((element) => {
    const key = keyFunction(element);
    if (key in result) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  });
  return result;
}
