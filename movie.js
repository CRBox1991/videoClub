class Movie
{
        constructor(photo, title, releaseYear, nacionality, genre)
    {
        this.photo = photo
        this.title = title
        this.releaseYear = releaseYear
        this.actors;
        this.nacionality = nacionality
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.IsMCU
        this.mainCharacterName
        this.producer
        this.distributor
        this.genre = genre;    
    }

    toString(){
        
        return "Title: " + this.title + 
        "\nreleaseYear: " + this.releaseYear +
        "\nactors:" + this.actors + "\nMovie Nacionality: " + this.nacionality + 
        "\nDirector: " + this.director +"\nWriter:" + this.writer +
        "\nLanguage: " + this.language +
        "\nPlataforma: " + this.plataforma +
        "\nIsMCU: " + this.IsMCU + 
        "\nMain character name: " + this.mainCharacterName +
        "\nProducer: " + this.producer +
        "\nDistributor: " + this.distributor + 
        "\nGenre: " + this.genre + "\n";  
        
        
    } 
}

let aladdin = new Movie("alladin.jpeg", "Aladdin", 1992, "EEUU", "Animation");
aladdin.actors = ["Robin Williams ", "Scott Weinger " , "Linda Larkin " ,"Jon Freeman"];
aladdin.director = "Ron Clements"
aladdin.writer = "Ted Elliot"
aladdin.language = "Multilanguage "
aladdin.plataforma = "Disney+"
aladdin.IsMCU = false
aladdin.mainCharacterName = "Aladdin "
aladdin.producer = "Walt Disney Animation"
aladdin.distributor = "Walt Disney Pictures"

let coco = new Movie("coco.jpeg", "Coco", 2017, "EEUU", "Animation");
coco.actors = ["Anthony Gonzalez ", "Gael Garcia " , "Benjamin Bratt " ,"Allana Ubach"];
coco.director = "Adrian Molina"
coco.writer = "Ted Elliot"
coco.language = "Multilanguage "
coco.plataforma = "Disney+"
coco.IsMCU = false
coco.mainCharacterName = "Coco "
coco.producer = "Walt Disney Animation"
coco.distributor = "Walt Disney Pictures";

let toy = new Movie("toy.jpeg", "Toy Story", 2000, "EEUU", "Animation");
toy.actors = ["Anthony Gonzalez ", "Gael Garcia " , "Benjamin Bratt " ,"Allana Ubach"];
toy.director = "Adrian Molina"
toy.writer = "Ted Elliot"
toy.language = "Multilanguage "
toy.plataforma = "Disney+"
toy.IsMCU = false
toy.mainCharacterName = "Boody"
toy.producer = "Walt Disney Pixar"
toy.distributor = "Walt Disney Pictures";

let raya = new Movie("raya.jpeg", "Raya", 2000, "EEUU", "Animation");
raya.actors = ["Anthony Gonzalez ", "Gael Garcia " , "Benjamin Bratt " ,"Allana Ubach"];
raya.director = "Adrian Molina"
raya.writer = "Ted Elliot"
raya.language = "Multilanguage "
raya.plataforma = "Disney+"
raya.IsMCU = false
raya.mainCharacterName = "Raya"
raya.producer = "Walt Disney Animation"
raya.distributor = "Walt Disney Pictures";

function mostrar(){
    document.getElementById("card1").innerHTML = 
    `<img src=${aladdin.photo}> 
    <p>${aladdin.toString()} 
        </p>`;

        document.getElementById("card2").innerHTML = 
    `<img src=${coco.photo}> 
    <p>${coco.toString()}</p>`;   

    document.getElementById("card3").innerHTML = 
    `<img src=${toy.photo}> 
    <p>${toy.toString()}</p>`;

    document.getElementById("card4").innerHTML = 
    `<img src=${raya.photo}> 
    <p>${raya.toString()}</p>`;
}

let movies = [];

function info(){
    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let director = document.getElementById('director').value;
    let escritor = document.getElementById('escritor').value;
    let actors = document.getElementById('actores').value;
    let language = document.getElementById('languaje').value;
    let plataforma = document.getElementById('plataforma').value;
    let imc = document.getElementById('imc').value;
    let mainCharacter = document.getElementById('mainCharacter').value;
    let producer = document.getElementById('producer').value;
    let distributor = document.getElementById('distributor').value;
   let releaseYear = document.getElementById('release').value;
    let genre = document.getElementById('genre').value;
    let nationality = document.getElementById('nationality').value;

    let compilation = {
        img : img,
        title: title,
        director : director,
        escritor : escritor,
        actores : [actors],
        language : language,
        release: releaseYear,
        plataforma : plataforma,
        IsIMC : imc ,
        mainCharacter : mainCharacter,
        producer : producer,
        distributor : distributor,
        genre: genre,
        nationality: nationality,
    };
    movies.push(compilation);
    console.log(movies);
 }

 function myMovie(){
    let info = document.getElementById("newMovies");
    info.innerHTML = ""

    for(let i = 0; i < movies.length; i++){                
        info.innerHTML += 
        `<div id="ppal">
        <div class="card">
        <img src="${movies[i].img}" style="width: 250px; padding:  15px 0px 30px 0px;">
        <p style="padding:  0px 5px 0px 5px; font-size:20px;"> 
            Title: ${movies[i].title},
            Director: ${movies[i].director},
            Writer: ${movies[i].escritor},
            Actors: ${movies[i].actores},
            Language: ${movies[i].language},
            Platform: ${movies[i].plataforma},
            IsIMC: ${movies[i].IsIMC},
            Main Character's Name: ${movies[i].mainCharacter},
            Producer: ${movies[i].producer},
            Distributor: ${movies[i].distributor},
            Release Year: ${movies[i].release},
            Genre: ${movies[i].genre},
            Nationality: ${movies[i].nationality},
            </p>
        </div>
        </div>`
    }        
    
 }