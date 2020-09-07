import { customerModel } from "./customer-model";

describe("customerModel", () => {
  it("should create an instance", () => {
    expect(new customerModel()).toBeTruthy();
  });
});
