const UserService = require("./../../app/services/UserService.js")

describe(" test UserService", () => {
    test("1 create a new user using the userService", () => {
        const user = UserService.create(1, "yeyoMarcos", "yeyo")
        expect(user.userName).toBe("yeyoMarcos");
        expect(user.name).toBe("yeyo");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined()

    });
    test("2 get all user data in a list", () => {
        const user = UserService.create(1, "yeyoMarcos", "yeyo")
        const userGetInfo = UserService.getInfo(user)
        expect(userGetInfo[0]).toBe(1)
        expect(userGetInfo[1]).toBe("yeyoMarcos")
        expect(userGetInfo[2]).toBe("yeyo")
        expect(userGetInfo[3]).toBe("sin bio")
    });
    test("3 Update username", () => {
        const user = UserService.create(1, "yeyoMarcos", "yeyo")
        UserService.updateUsername(user, "yeyoo")
        expect(user.userName).toBe("yeyoo")
    });
    test("4 Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "yeyoMarcos1", "yeyo");
        const user2 = UserService.create(1, "yeyoMarcos2", "yeyo");
        const user3 = UserService.create(1, "yeyoMarcos3", "yeyo");
        const usernames = UserService.getAllUsernames([user1,user2,user3]);
        expect(usernames).toContain("yeyoMarcos1");
        expect(usernames).toContain("yeyoMarcos2");
        expect(usernames).toContain("yeyoMarcos3");
    
    });

})
