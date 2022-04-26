
const spiderman =require('./../app/spiderman.js')
describe("metodo getIgfo", () => {
    test('1)create an spiderman objet', () => {
      const tom = new spiderman("Spiderman", 31, "Andrew Garfield", 2, "sony")
      expect(tom.getInfo()).toBe(`Hey, I'm Spiderman from sony`)
      
    
    });
  })