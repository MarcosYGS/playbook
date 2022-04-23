

const issue = {
    
    title: "02 Live 2 Semana 1 [Miércoles 6 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status:"open",
    numberOfComments:115,
    labels:["FINALIZADO", "LIVE 2", "Semana-1"],
    author:"carlogilmar",
    dateCreated:"6/abril/22",
    lastUpdated:"6/abril/22",

    getTitleAndAuthor: function(){
      return `this issue: ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `the labels are: ${this.labels}. it status is ${this.status}.`
    }
   }
   
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())