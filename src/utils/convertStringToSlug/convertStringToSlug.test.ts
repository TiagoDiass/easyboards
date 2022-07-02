import convertStringToSlug from './convertStringToSlug';

describe('Util: convertStringToSlug', () => {
  it('should convert string to slug correctly', () => {
    expect(convertStringToSlug('My new and awesome board')).toBe('my-new-and-awesome-board');
  });
});
