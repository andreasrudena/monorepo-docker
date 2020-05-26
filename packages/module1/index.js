import { module2 } from 'module2';

export function module1() {
  return `Hi from module 1, and module 2 says: ${module2()}`;
};