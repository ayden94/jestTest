import { obj } from './module';
jest.mock('./module');

test('module', () => {
  console.log(obj.method) // 존재함
  expect(obj.method()).toBe("method1"); // obj.method()가 Expected: "method1" 하지만 실제로는 Received: undefined 뜸
  expect(obj.props).toBe("a");
})