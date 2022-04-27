const User =require("./../../app/models/User.js")

describe("unit test for user class", () => {

  test("Create an User objet", () => {

    const user = new User(1,"yeyo", "yeyomarcos", "bio")
    expect(user.id).toBe(1);
    expect(user.userName).toBe("yeyo");
    expect(user.name).toBe("yeyomarcos");
    expect(user.bio).toBe("bio");
    expect(user.dataCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
    
    expect(user.getId).toBe(1);
    expect(user.getName).toBe("yeyomarcos");
    expect(user.getBio).toBe("bio");
    expect(user.getDataCreated).not.toBeUndefined();
    expect(user.getlastUpdated).not.toBeUndefined();


    user.setName="yeyo"
    expect(user.name).toBe("yeyo")

    user.setbio="new bio"
    expect(user.bio).toBe("new bio")

  });

})