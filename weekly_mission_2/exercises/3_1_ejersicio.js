
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ 
      return `Repository ${this.name} of ${this.author} has ${this.stars} stars`
    }
  }
  console.log("el primer ejercicio dice:")
  const ejersicio = new Repository("LaunchX", "carlogilmar", "js", 100)
  console.log(ejersicio.getInfo())


  class issue  {
      constructor(title, repositoryNameAssociated, status, author){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated 
        this.status = status
        this.author = author
      }
    

    getTitleAndAuthor(){
        return `this issue: ${this.title} was created by ${this.author}`
    }
    getGeneralInfo(){
      return `It status is ${this.status}.`
    }
   }
   const issues = new issue("02 Live 2 Semana 1 [Miércoles 6 de Abril]", "MissionNodeJS", "open", "carlogilmar")
   console.log(issues.getTitleAndAuthor())
   console.log(issues.getGeneralInfo())