jest.mock('./module', () => ({
  obj: {
    method: jest.fn().mockReturnValue("method1"),
    props: "a"
  }
}));
import { obj } from './module';

test('module', () => {
  expect(obj.method()).toBe("method1");
  expect(obj.props).toBe("a");
})