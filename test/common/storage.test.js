const StorageService = require('../../src/lib/StorageService');

describe('test lib > storage', () => {
  it('test get item', () => {
    const expected = 'one';
    const _storage = new StorageService('test');
    _storage.clear();
    _storage.setItem('foo', 'one');
    const result = _storage.getItem('foo');
    expect(result).eql(expected);
  });

  it('test remove item', () => {
    const _storage = new StorageService('test');
    _storage.setItem('foo', 'one');
    _storage.removeItem('foo');
    const item = _storage.getItem('foo');
    expect(item).to.be.null;
  });

  it('test get value not found', () => {
    const _storage = new StorageService('test');
    _storage.clear();
    const result = _storage.getItem('foo');
    expect(result).to.be.null;
  });

  it('test clear items', () => {
    const _storage = new StorageService('test');
    _storage.clear();
    const expected = _storage.countKeys();
    _storage.setItem('foo', 'one');
    _storage.clear();
    const result = _storage.countKeys();
    expect(result).eql(expected);
  });
});
