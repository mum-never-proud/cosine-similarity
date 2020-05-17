const cosineSimilarity = require('../cosine-similarity');

describe('cosine similarity', () => {
  it('should throw TypeError when any of the two parameters is not an Array', () => {
    expect(() => cosineSimilarity()).toThrow(TypeError);
    expect(() => cosineSimilarity([1, 2])).toThrow(TypeError);
    expect(() => cosineSimilarity('tadaa', [1, 2])).toThrow(TypeError);
  });

  it('should compute cosine similarity between two arrays', () => {
    expect(cosineSimilarity([ 5, 23, 2, 5, 9 ], [ 3, 21, 2, 5, 14 ])).toEqual(0.975);
  });
});
