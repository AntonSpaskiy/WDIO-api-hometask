const {sendRequest} = require ("../helpers/api.helper");
const functions = require("../helpers/functions");
const testData = require("../config/data.json")
const auth = require("../config/auth")

describe("API hometask Test Suite", () => {
    
    it("Get users", async()=> {
        const response = await sendRequest("users");
        console.log(response.data)
        expect(response.status).to.equal(200);
    });

    it("API should return 401 error when trying to create a new user without a token", async()=> {
        const response = await sendRequest("users", testData,"post");
        console.log(response.data)
        expect(response.status).to.equal(401);
    });

    it("User should be created with POST request", async()=> {
        const userEmail = functions.userEmail()
        const response = await sendRequest(`users?access-token=${auth.token}`, {
            name: "Anton test user",
            gender: "male",
            status: "active",
            email: userEmail
            }, "post");
        console.log(response.data)
        expect(response.status).to.equal(201)
        expect(response.data.name).to.equal("Anton test user")
        expect(response.data.gender).to.equal("male")
        expect(response.data.status).to.equal("active")
        expect(response.data.email).to.equal(userEmail)
    })
});