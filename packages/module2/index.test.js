import { module2 } from './index';
import { module1 } from 'module1';

test('should return result', () => {
  expect(module2()).toEqual('Hi from module 2');
});

test('should work to include untranspiled source from other module', () => {
  expect(module1()).toEqual('Hi from module 1, and module 2 says: Hi from module 2');
});