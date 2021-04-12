function basicTeenager(age) {
  describe('basicTeenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    it('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

function teenager(age) {

}

function ageChecker(age) {

}

function ternaryTeenager(age) {

}

function switchAge(age) {

}
