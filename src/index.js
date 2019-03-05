/**
 * @param preferences - an preferencesay of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
if (preferences.length < 3) return 0;

  let counter = 0;

  let i = 0;

  while (i < preferences.length) {

    let first = preferences[i];

    if (!first===0) {
      i ++;
      continue;
    }
    let second = preferences[first - 1];
    if (!second===0) {
      i ++;
      continue;
    }
    let third = preferences[second - 1];
    if (!third || third === first) {
      i ++;
      continue;
    }
    if (preferences[third - 1] === first) {
      counter ++;
      preferences[i] = 0;
      preferences[first - 1] = 0;
      preferences[second - 1] = 0;
    }
    i ++;
  }
  return counter;
}