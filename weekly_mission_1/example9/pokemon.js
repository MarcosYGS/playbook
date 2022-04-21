class Pokemon{
    constructor(nombre){
      this.nombre=nombre; 
    }
  
    sayHello(){
      console.log(`Mi pokemon ${this.nombre} te saluda!!!`)
    }
  
    sayMessage(msg){
      console.log(`Mi pokemon ${this.nombre} dice: ${msg}`)
    }
  }
  
//   Hace que todo sea utilizable
  module.exports = Pokemon