

class Profesional
{

constructor(photo,name, age, weight, height, isRetired, nationality, oscarsNumber, profession)
    {
    this.photo = photo
    this.name = name
    this.age = age
    this.weight = weight
    this.height = height
    this.isRetired = isRetired
    this.nationality = nationality
    this.oscarsNumber = oscarsNumber
    this.profession = profession
    }

printAll()
{
    return `Name: ${this.name}\nAge: ${this.age}\nWeght: ${this.weight}\nHeight: ${this.height}
Is retired: ${this.isRetired}\nCountry: ${this.nationality}\nOscars: ${this.oscarsNumber}\nProfession: ${this.profession}\n`
}
}

let dickie = new Profesional("dickie.jpeg", "Dickie Jones", "death", 72, 176, true, " Snyder, Texas, EEUU", 0, "Actor");

let scott = new Profesional("scott.jpeg", "Scott Eric Weinger", 48, 78, 175, false, " Nueva York, Nueva York, EEUU,", 1, "Actor");

let james = new Profesional("james.jpeg", "James Earl Jones", 93, 90, 187, false, "Arkabutla, Misisipi, EEUU", 1, "Actor");

let jodi = new Profesional("jodi.jpeg", "Jodie Marie Marzonati", 62, 65, 168, false,"EEUU",  0,"Actress");

let anthony = new Profesional("miguel.jpeg", "Anthony Gonzalez", 19, 80, 175, false, "Los Ángeles, EEUU", 0, "Actor" )

let frank = new Profesional("frank.jpeg", "Franklin 'Frank' Wendell", 78, 85, 180, false, "Colorado, EEUU", 0, "Actor" )


function mostrar(){
    document.getElementById("card1").innerHTML = 
    `<img src=${dickie.photo}> 
    <p>${dickie.printAll()}</p>`;

    document.getElementById("card2").innerHTML = 
    `<img src=${scott.photo}> 
    <p>${scott.printAll()}</p>`;

    document.getElementById("card3").innerHTML = 
    `<img src=${james.photo}> 
    <p>${james.printAll()}</p>`

    document.getElementById("card4").innerHTML = 
    `<img src=${jodi.photo}> 
    <p>${jodi.printAll()}</p>`

    document.getElementById("card5").innerHTML = 
    `<img src=${anthony.photo}> 
    <p>${anthony.printAll()}</p>`;

    document.getElementById("card6").innerHTML = 
    `<img src=${frank.photo}> 
    <p>${frank.printAll()}</p>`;
}
