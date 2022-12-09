import deleteFunction from '../../utils/deleteFunction';

describe('Delete activities from array', () => {
  test('Delete an item from array', () => {
    const fitActivities = [
      { name: 'Gym', image: 'image.jpg', index: 1 },
      { name: 'Swim', image: 'image2.jpg', index: 2 },
      { name: 'Gym', image: 'image3.jpg', index: 3 },
    ];
    deleteFunction(fitActivities, 1);
    expect(fitActivities).toHaveLength(2);
  });

  test('Test if there is no activity in the array', () => {
    const fitActivities = [];
    deleteFunction(fitActivities, 1);
    expect(fitActivities).toHaveLength(0);
  });
});
