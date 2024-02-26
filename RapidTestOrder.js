class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        aReturn.push("Welcome to Emma's Coffee House!");
        aReturn.push("Would you like to order a coffee?");
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push("Awesome! What flavour syrup would you like?");
          aReturn.push("We have caramel, mocha, or vanilla.");
        } else {
          aReturn.push("Thanks for visiting Emma's Coffee House!");
          aReturn.push("Come again next time!")
        }
        return aReturn;
      },
      ORDERING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase(). startsWith ('caramel')){
            aReturn.push ("Yum! Your order is complete.");
            aReturn.push ("Please pick up your order at 31 Sunny Drive, Brantford, Ontario!");
        } else
          if (sInput.toLowerCase(). startsWith ('mocha')){
            aReturn.push ("Yum! Your order is complete.");
            aReturn.push ("Please pick up your order at 31 Sunny Drive, Brantford, Ontario!");  
        } else 
        if (sInput.toLowerCase(). startsWith ('vanilla')){
            aReturn.push ("Yum! Your order is complete.");
            aReturn.push ("Please pick up your order at 31 Sunny Drive, Brantford, Ontario!");
            return aReturn;
        }
      };


    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }