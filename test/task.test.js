import request from "supertest";
import server from "../src/server";

describe("GET /tasks/:id", () => {
  it("should return the task if it exists", async () => {
    const taskId = "80dcf2aa-a9bf-47d5-8ae7-d92baaf2dbcc";
    const response = await request(server).get(`/tasks/${taskId}`).expect(200);

    expect(response.body.id).toBe(taskId);
    expect(response.body.title).toBe("A simple test");
    expect(response.body.description).toBe("A simple description of tasks");
    expect(response.body.status).toBe("PENDING");
    expect(response.body.slugify).toBe("A-simple-test");
    expect(response.body.createdAt).not.toBeNul();
    expect(response.body.updatedAt).not.toBeNul();
    expect(response.body.enabled).toBe(true);
  });

  it("should return 404 if the task does not exist", async () => {
    const nonExistingTaskId = "80dcf2aa-a9bf-47d5-8ae7-111111111";

    await request(app).get(`/tasks/${nonExistingTaskId}`).expect(404);
  });
});
