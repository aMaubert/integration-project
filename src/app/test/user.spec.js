import {Compare} from '../core/controllers';

const comparator = new Compare();

describe('Compare 2 text', () => {

  it('should return true with null and null', () => {
    expect(comparator.compare(null, null)).toBe(true);
  });

  it('should return false with null and Text1 ', () => {

    expect(comparator.compare(null, 'Text1')).toEqual(false);

  });

  it('should return false with null and Text2 ', () => {

    expect(comparator.compare(null, 'Text2')).toEqual(false);

  });
  it('should return false with Text2 and Text1 ', () => {

    expect(comparator.compare('Text2', 'Text1')).toEqual(false);

  });
  it('should return true with Text1 and Text1 ', () => {

    expect(comparator.compare('Text1', 'Text1')).toEqual(true);

  });

  it('should return true with text1 and Text1 ', () => {

    expect(comparator.compare('text1', 'Text1')).toEqual(true);

  });

  it('should return true with text1 and tEXT1 ', () => {

    expect(comparator.compare('text1', 'tEXT1')).toEqual(true);

  });



});
