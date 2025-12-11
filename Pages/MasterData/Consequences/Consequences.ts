type props = {
  page: any;
  Data?: TData;
  expect: any;
  Empty?: Boolean;
};

type TData = {
  ConsequencesName: string;
  Description: string;
};

class Consequences {
  //Create Consequences
  async GoToCreateConsequences(page: any, expect: any) {
    await page.getByRole("button", { name: "Add Consequence" }).click();
    expect(page).toHaveURL("/master-data/consequences/create");
  }
  async CreateConsequences({ page, Data, expect, Empty }: props) {
    await page.getByTestId("name").fill(Empty ? "" : Data?.ConsequencesName);
    await page.getByTestId("description").fill(Empty ? "" : Data?.Description);

    if (Empty) {
      expect(
        page
          .locator(".mb-3")
          .locator(".text-red-600", { hasText: "This field is required" })
      ).toBeVisible();
    } else {
      await page.getByTestId("save-button").click();
      await expect(page).toHaveURL("/master-data/consequences/create");
      await page.getByRole("button", { name: "OK" }).click();
    }
  }
  //Edit Consequences

  //Filter Consequences
}

export default Consequences;
