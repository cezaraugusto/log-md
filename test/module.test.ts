import log from '../src';

describe('blah', () => {
  it('works', () => {
    expect(log('## hello world')).toEqual('hello world');
  });
});
