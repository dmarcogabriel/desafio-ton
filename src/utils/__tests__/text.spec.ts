import {breakLongText} from '../text.util';

describe('utils/text', () => {
  it('should pass on not break text', () => {
    expect(breakLongText('1234567890123456')).toBe('1234567890123456');
    expect(breakLongText('12345678901234567')).toBe('12345678901234567');
  });

  it('should pass on break text', () => {
    expect(breakLongText('123456789012345678')).toBe('12345678901234567...');
  });
});
