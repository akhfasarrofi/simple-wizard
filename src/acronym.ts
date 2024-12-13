/**
 * Generates an acronym and a corresponding background based on the input name.
 *
 * @param {string} name - The input name from which to generate the acronym.
 * @returns {IAcronymResult} An object containing the generated background and acronym.
 */
interface IAcronymResult {
  background: string
  acronym: string
}
/**
 * @example
 * // Usage example:
 * const { acronym, background } = getAcronym(full_name);
 * console.log(result); // { background: 'linear-gradient(to top, #439bfd, #6dd5ed)', acronym: 'JD' }
 */

const liniearGradient = [
  'linear-gradient(to top, #439bfd, #6dd5ed)',
  'linear-gradient(to top, #11998e, #38ef7d)',
  'linear-gradient(to top, #fc4a1a, #f7b733)',
  'linear-gradient(to top, #ff9966, #ff5e62)',
  'linear-gradient(to top, #7f00ff, #e100ff)',
  'linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)',
  'linear-gradient(to top, #D387AB, #E899DC)',
  'linear-gradient(to top, #96E4DF, #4DCCC6)',
]

function acronym(name: string): IAcronymResult {
  const splitName = name?.split(' ')
  let acronym: string = name || ''

  if (splitName && splitName.length > 1) {
    acronym = splitName.reduce(
      (response, word) => response + (word[0] || ''),
      '',
    )
  }

  acronym = acronym.slice(0, 2).toUpperCase()

  const randomColorIndex
    = (name || '')
      .split('')
      .reduce((arr, next) => arr + (next.charCodeAt(0) || 0), 0)
      % liniearGradient.length

  return { background: liniearGradient[randomColorIndex]!, acronym }
}

export default acronym
