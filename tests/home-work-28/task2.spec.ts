import { test, expect, Locator } from "@playwright/test";
import { mainUserEmail, mainUserPassword } from "../../test-data/credentials";
import AuthController from "../../api-controllers/AuthController";

test.describe("Adding cars", () => {
  let sid: string;
  let carID: any;

  test.beforeAll(async ({ request }) => {
    const authController = new AuthController(request);
    sid = await authController.signInAndGetCookies(
      mainUserEmail,
      mainUserPassword
    );
  });

  test("Add car: Valid scenario", async ({ request }) => {
    const response = await request.post("/api/cars", {
      headers: {
        Cookie: `sid=${sid}`,
        "Content-Type": "application/json",
      },
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 150,
      },
    });
    const body = await response.json();
    expect(response.status()).toBe(201);
  });

  test("Add car: Invalid model", async ({ request }) => {
    const response = await request.post("/api/cars", {
      headers: {
        Cookie: `sid=${sid}`,
        "Content-Type": "application/json",
      },
      data: {
        carBrandId: 1,
        carModelId: 9999,
        mileage: 122,
      },
    });
    const body = await response.json();
    expect(response.status()).toBe(404);
    expect(body.message).toContain("Model not found");
  });

  test("Add car: Invalid mileage", async ({ request }) => {
    const response = await request.post("/api/cars", {
      headers: {
        Cookie: `sid=${sid}`,
        "Content-Type": "application/json",
      },
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 1000000,
      },
    });
    const body = await response.json();
    expect(response.status()).toBe(400);
    expect(body.message).toContain("Mileage has to be from 0 to 999999");
  });
});
