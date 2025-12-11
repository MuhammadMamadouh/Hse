import Groups from "./Groups/Groups";

class UserManagement {
  async GoToUsers(page: any) {}
  async GoToGroups(page: any, expect: any) {
    await page.getByRole("link", { name: "Groups" }).click();
    await expect(page).toHaveURL("/users-management/groups");
  }
  async GoToRoles(page: any) {}
}

export default UserManagement;
