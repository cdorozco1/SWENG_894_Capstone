// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the tests for the backend

//  Imports/dependencies
const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

// Before/after each test, connect to the DB, and disconnect from db.
// Need to make a test DB in the future
  beforeEach((done) => {
    mongoose.connect(process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  });
  
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });

    // UT-010, create a new income entry, verify it was posted successfully using GET
    test("GET income transaction from /api/v1/transactions", async () => {
      const post = await Post.create({ 
          income: "Income", 
          text: "Paycheck",
          transtype:"Income",
          amount:1200,
          date:"2021-10-22T00:00:00.000Z",
          createdAt: Date.now()
      });
    });

    
      await supertest(app).get("/api/v1/transactions")
        // Expect 200 response
        .expect(200)
        .then((response) => {
          // Check type and length
          expect(Array.isArray(response.body)).toBeTruthy();
          expect(response.body.length).toEqual(1);
    
          // Check data corresponds to posted data
          expect(response.body[0]._id).toBe(post.id);
          expect(response.body[0].income).toBe(post.income);
          expect(response.body[0].text).toBe(post.text);
          expect(response.body[0].transtype).toBe(post.transtype);
          expect(response.body[0].amount).toBe(post.amount);
          expect(response.body[0].date).toBe(post.date);
          expect(response.body[0].createdAt).toBe(post.createdAt);
        });

  // UT-011, create a new expense entry, verify it was posted successfully using GET
  test("GET expense transaction from /api/v1/transactions", async () => {
    const post = await Post.create({ 
        income: "Expense", 
        text: "Car parts",
        transtype:"Leisure",
        amount:-500,
        date:"2021-10-22T00:00:00.000Z",
        createdAt: Date.now()
    });
  });

  
    await supertest(app).get("/api/v1/transactions")
      // Expect 200 response
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
  
        // Check data corresponds to posted data
        expect(response.body[0]._id).toBe(post.id);
        expect(response.body[0].income).toBe(post.income);
        expect(response.body[0].text).toBe(post.text);
        expect(response.body[0].transtype).toBe(post.transtype);
        expect(response.body[0].amount).toBe(post.amount);
        expect(response.body[0].date).toBe(post.date);
        expect(response.body[0].createdAt).toBe(post.createdAt);
      });
  });

    // UT-012, post a new income entry, verify response and data in DB
    test("POST income to /api/v1/transactions", async () => {
      const data = { 
        income: "Income", 
        text: "Paycheck",
        transtype:"Income",
        amount:1200,
        date:"2021-10-22T00:00:00.000Z",
        createdAt: Date.now()
      };
    
      await supertest(app).post("/api/v1/transactions")
        .send(data)
        .expect(201)
        .then(async (response) => {
          // Check the response
          expect(response.body._id).toBeTruthy();
          expect(response.body.income).toBe(data.income);
          expect(response.body.text).toBe(data.text);
          expect(response.body.transtype).toBe(data.transtype);
          expect(response.body.amount).toBe(data.amount);
          expect(response.body.date).toBe(data.date);
          expect(response.body.createdAt).toBe(data.createdAt);
    
          // Check data in the database
          const post = await Post.findOne({ _id: response.body._id });
          expect(post).toBeTruthy();
          expect(post.income).toBe(data.income);
          expect(post.text).toBe(data.text);
          expect(post.transtype).toBe(data.transtype);
          expect(post.amount).toBe(data.amount);
          expect(post.date).toBe(data.date);
          expect(post.createdAt).toBe(data.createdAt);

        });
    });

    // UT-013, post a new expense entry, verify response and data in DB
    test("POST expense to /api/v1/transactions", async () => {
      const data = { 
        income: "Expense", 
        text: "Lawnmower",
        transtype:"Home",
        amount:-500,
        date:"2021-10-22T00:00:00.000Z",
        createdAt: Date.now()
      };
    
      await supertest(app).post("/api/v1/transactions")
        .send(data)
        .expect(201)
        .then(async (response) => {
          // Check the response
          expect(response.body._id).toBeTruthy();
          expect(response.body.income).toBe(data.income);
          expect(response.body.text).toBe(data.text);
          expect(response.body.transtype).toBe(data.transtype);
          expect(response.body.amount).toBe(data.amount);
          expect(response.body.date).toBe(data.date);
          expect(response.body.createdAt).toBe(data.createdAt);
    
          // Check data in the database
          const post = await Post.findOne({ _id: response.body._id });
          expect(post).toBeTruthy();
          expect(post.income).toBe(data.income);
          expect(post.text).toBe(data.text);
          expect(post.transtype).toBe(data.transtype);
          expect(post.amount).toBe(data.amount);
          expect(post.date).toBe(data.date);
          expect(post.createdAt).toBe(data.createdAt);

        });
    });

    // UT-014, create an income transaction, delete and verify it was deleted
    test("DELETE income transaction from /api/v1/transactions", async () => {
      const post = await Post.create({ 
        income: "Income", 
        text: "Paycheck",
        transtype:"Income",
        amount:1200,
        date:"2021-10-22T00:00:00.000Z",
        createdAt: Date.now()
      });
    
      await supertest(app)
        .delete("/api/v1/transactions" + post.id)
        .expect(200)
        .then(async () => {
          expect(await Post.findOne({ _id: post.id })).toBeFalsy();
        });
    });
  
    // UT-015, create an expense transaction, delete and verify it was deleted
    test("DELETE income transaction from /api/v1/transactions", async () => {
      const post = await Post.create({ 
        income: "Expense", 
        text: "Bicycle",
        transtype:"Leisure",
        amount:1200,
        date:"2021-10-22T00:00:00.000Z",
        createdAt: Date.now()
      });
    
      await supertest(app)
        .delete("/api/v1/transactions" + post.id)
        .expect(200)
        .then(async () => {
          expect(await Post.findOne({ _id: post.id })).toBeFalsy();
        });
    });