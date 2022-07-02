/**
 * Util used to convert a string to a slug
 * @param string common string that can contain spaces, special characters and so on
 * @returns a new string in a slug standard
 *
 * @example
 * const slug = convertStringToSlug('My awesome string');
 *
 * console.log(slug); // 'my-awesome-string'
 */
export default function convertStringToSlug(string: string) {
  return string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
