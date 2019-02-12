describe('TESTING FRAMEWORK', function() {

  describe('Should pass:', function() {
    it('#toEqual', function() {
      expect(1).toEqual(1)
    })

    it('Array #toInclude', function() {
      expect([1,2,3, "hello"]).toInclude("hello")
    })

    it('String #toInclude', function() {
      expect("hello jedd").toInclude("hello")
    })

    it('#instanceOf', function() {
      thing = new Thing
      expect(thing).instanceOf(Thing)
    })
  })

  describe('Should fail:', function() {
    it('#toEqual', function() {
      expect(1).toEqual(2)
    })

    it('Array #toInclude', function() {
      expect([1,2,3]).toInclude(4)
    })

    it('String #toInclude', function() {
      expect("hello").toInclude("fish")
    })

  })
})
