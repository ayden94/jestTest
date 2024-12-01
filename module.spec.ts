import { obj } from './module';
jest.mock('./module');

test('module', () => {
  console.dir(obj.method)
  expect(obj.method()).toBe("method1");
  expect(obj.props).toBe("a");
})