describe("fizzBuzz", function() {

  it("should receive 3 and return Fizz", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should receive 4 and return 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });
});
