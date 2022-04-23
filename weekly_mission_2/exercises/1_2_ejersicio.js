

const PullRequest = {
    title:"Update readme.md #665",
    branchName:"066e1fd",
    dateCreated:"17 de abril 2022",
    status:"1 workflow awaiting approval",
    repositoryNameAssociated:"Marcos_YGS",

    getStatus: function(){
      return `the PullRequest ${this.title} has a status: ${this.status}`
    },
    getTitleAndAutor: function(){
      return `this PullRequest ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAutor())
