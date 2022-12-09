import randomItem from '../../utils/randomItem';

describe('RandomItem', () => {
  test('should get random item from array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const item = randomItem(array);
    expect(array.includes(item)).toBe(true);
  });

  test('should return -1 if array is empty', () => {
    const array = [];
    const item = randomItem(array);
    expect(item).toBe(-1);
  });
});
