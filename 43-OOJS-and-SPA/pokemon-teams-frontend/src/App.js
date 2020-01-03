class App {
  //App is <main></main>
  constructor(trainers){
    //trainers is an array of objects
    //we need an array of Trainer instances
    this.trainers = trainers.map(trainer => new Trainer(trainer))
  }

  render(){
    return `
    <main>
      ${this.trainers.map(trainer => trainer.render()).join("")}
    </main>
    `
  }
}
