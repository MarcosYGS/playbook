class User {
    constructor(id, name, bio, dataCreated, lastUpdated)
        {
            this.id = id; 
            this.name = name;
            this.bio = bio;
            this.dataCreated = new Date();
            this.lastUpdated = new Date();
        }
        get getId() { return this.id; }
        get getName(){return this.name;}
        get getBio() { return this.bio}
        get getDataCreated() { return this.dataCreated;}
        get getlastUpdated() { return this.lastUpdated;}

        set setName(newName){
            this.name = newName;
        }

        set setbio(newBio){
            this.bio = newBio;
        }
}module.exports = User;