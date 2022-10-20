class Governor {
    constructor(name, gender){
  this.name = name;
  this.gender = gender;
  

    } 
static greeting(){
    console.log("hi "+this.name);
}
}
const Governor1 = new Governor('james', 'male');
const Governor2 = new Governor('debbie', 'female');
//console.log(Governor1);
Governor1.greeting();
Governor2.greeting();
//Governor.greeting();
