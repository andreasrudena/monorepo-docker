import { module1 } from './index';

test('should return result', () => {
  expect(module1()).toEqual('Hi from module 1, and module 2 says: Hi from module 2');
});