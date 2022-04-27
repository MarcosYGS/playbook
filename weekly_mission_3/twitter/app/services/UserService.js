const User = require('./../models/User.js')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "sin bio")
    }
    static getInfo(user){
        return Object.values(user)

    }
    static updateUsername(user, newUserName){
        return user.userName = newUserName;
    }

    static getAllUsernames(users){
       
       
    return users.map( user => user.userName)
    }
}

module.exports = UserService
