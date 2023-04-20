const {sendRequest} = require ("../helpers/api.helper");
const functions = require("../helpers/functions");
const testData = require("../config/data.json");
const auth = require("../config/auth");

describe("API hometask Test Suite", () => {
    
    it("Get users", async()=> {
        const response = await sendRequest("users");
        expect(response.status).to.equal(200);
    });

    it("API should return 401 error when trying to create a new user without a token", async()=> {
        const response = await sendRequest("users", testData.createUser, "post");
        expect(response.status).to.equal(401);
    });

    it("User should be created with POST request", async()=> {
        const userEmail = functions.userEmail();
        const response = await sendRequest(`users?access-token=${auth.token}`,{
            name: testData.createUser.name,
            gender: testData.createUser.gender,
            status: testData.createUser.status,
            email: userEmail,
        }, "post");
        expect(response.status).to.equal(201);
        expect(response.data.name).to.equal(testData.createUser.name);
        expect(response.data.gender).to.equal(testData.createUser.gender);
        expect(response.data.status).to.equal(testData.createUser.status);
        expect(response.data.email).to.equal(userEmail);
    });
});