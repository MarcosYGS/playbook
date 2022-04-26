const spiderman =require('./../app/spiderman.js')
describe("Unit test for Spiderman class", () => {
    test('1)create an spiderman objet', () => {
      const andrewGarfield = new spiderman("Spiderman", 31, "Andrew Garfield", 2, "sony")
      expect(andrewGarfield.name).toBe("Spiderman");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("sony");
      
    });
  })