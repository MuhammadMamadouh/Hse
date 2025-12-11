import MasterData from "../MasterData/MasterData";
import UserManagement from "../UsersManagement/UsersManagement";

class Home {
  async GoToUsersManagement(page: any, expect: any) {
    await page.getByRole("link", { name: "Users Management" }).click();
    await expect(page).toHaveURL("/users-management");
    return new UserManagement();
  }
  async GoToMasterData(page: any, expect: any) {
    page.getByRole("link", { name: "Master Data" }).click();
    await expect(page).toHaveURL("/master-data");
    return new MasterData();
  }
}

export default Home;
