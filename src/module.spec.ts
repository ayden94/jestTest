jest.mock('./module'); import { obj } from './module';

test('module', () => {
  (obj.method as jest.Mock).mockImplementation((callback, num) => callback(num));
  expect(obj.method((num) => num, 3)).toBe(3)
})

test("module2", () => {
  expect(obj.method((num) => num, 3)).toBe(3)
})