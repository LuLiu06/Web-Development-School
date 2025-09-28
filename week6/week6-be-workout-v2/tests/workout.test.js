const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");
const { describe, beforeEach } = require("node:test");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  it("should return workouts as JSON", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should successfully add a new workout", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });
});

describe("CRUD operations for a single workout", () => {
  let workoutId = null;

  beforeEach(async () => {
    await Workout.deleteMany({});
    const res = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send({
        title: "My workout",
        reps: 8,
        load: 80,
      });
    console.error('创建 workout 返回的数据:', res.body);
    workoutId = res.body._id;  
  });

  it("should read a single workout by ID", async () => {
    const res = await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(res.body.title).toBe("My workout");
    expect(res.body.reps).toBe(8);
    expect(res.body.load).toBe(80);
    expect(res.body._id).toBe(workoutId);
  });

  it("should update a workout", async () => {
    const update = { title: "Updated workout", reps: 20 };
    const res = await api
      .put(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .send(update)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(res.body.title).toBe("Updated workout");
    expect(res.body.reps).toBe(20);
    expect(res.body.load).toBe(80);
  });

  it("should delete a workout", async () => {
    await api
      .delete(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200);   

    const workoutsAfter = await Workout.find({});
    expect(workoutsAfter).toHaveLength(0);
  });

})


afterAll(() => {
  mongoose.connection.close();
});
