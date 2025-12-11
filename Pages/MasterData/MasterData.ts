import OrganizationHierarchy from "./OrganizationHierarchy/OrganizationHierarchy";
import Hazards from "./Hazards/Hazards";
import Consequences from "./Consequences/Consequences";

class MasterData {
  async GoToOrganizationHierarchy(page: any, expect: any) {
    await page.getByRole("link", { name: "Organization Hierarchy" }).click();
    await expect(page).toHaveURL("/master-data/organization-hierarchy");
    return new OrganizationHierarchy();
  }
  async GoToHazards(page: any, expect: any) {
    await page.getByRole("link", { name: "Hazards" }).click();
    await expect(page).toHaveURL("/master-data/hazards");
    return new Hazards();
  }
  async GoToConsequence(page: any, expect: any) {
    await page.getByRole("link", { name: "Consequences" }).click();
    await expect(page).toHaveURL("/master-data/consequences");
    return new Consequences();
  }
}

export default MasterData;
