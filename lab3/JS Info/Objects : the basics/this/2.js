let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 4);
      this.b = +prompt('b?', 6);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );