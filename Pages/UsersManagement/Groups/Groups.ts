type TData = {
  GroupName: string;
  ExternalEmail: string;
  Users: string;
  Description: string;
};

class Groups {
  async GoToCreateGroup(page: any, expect: any) {
    await page.getByRole("button", { name: "Create Group" }).click();
    await expect.toHaveURL("/users-management/groups/create");
  }

  async GoToEditGroup(page: any, expect: any) {}
  async GoToShowGroup(page: any, expect: any) {}
  async CreateGroup(page: any, expect: any, Data: TData) {
    await page.getByTestId("name").fill(Data.GroupName);
    await page
      .getByRole("textbox", { name: "Enter External Email" })
      .fill(Data.ExternalEmail);

    await page.locator(".form-input.py-2").click();

    if ((await page.locator(".m_c0783ff9").count()) > 0) {
      console.log("Found Users");
      await page.locator(".m_c0783ff9", { hasText: Data.Users }).click();
    }

    await page.getByTestId("description").fill(Data.Description);
  }

  EditGroup() {}
  ShowGroup() {}
}

export default Groups;
