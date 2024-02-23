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