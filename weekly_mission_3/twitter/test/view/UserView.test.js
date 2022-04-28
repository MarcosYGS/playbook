const UserService = require("./../../app/view/UserView.js")

describe(" test UserView", () => {
    test("1 Return an error objet when try to create a new user whit an null playload", () => {
        const payload = null;
        const result = UserService.create(payload);
        expect(result.error).toBe("payload no existe");
    });

    test("2 Return an error objet when try tomcreate a new user whit a playloard with invalid properties", () => {
        const payload = {usermane:null, name:12, id:"id"}
        const result = UserService.create(payload)
    });

    test("3 Return an error objet when try to create a new with a playload with missing properties", () => {
        const payload = {username: "username", id: "1", name:"name"}
        const result = UserService.create(payload)
        expect(result.name).toBe("name")
        expect(result.id).toBetoBe("1")
        expect(result.username).toBe("username")

        
    });


})