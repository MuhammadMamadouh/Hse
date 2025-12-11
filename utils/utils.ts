import { expect } from "@playwright/test";

const safeAction = async (action: () => Promise<any>) => {
  try {
    await action();
  } catch (err) {
    console.log("معلش حنكمل ", err);
  }
};

const CheckFilteredData = (result: [], expectedData: any) => {
  //حل عبقري
  expect(result).toEqual(Array(result.length).fill(expectedData));
};

export { safeAction, CheckFilteredData };
