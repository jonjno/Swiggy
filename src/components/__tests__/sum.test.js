import { sum } from "../sum";

test("sum function should calulate sum", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
