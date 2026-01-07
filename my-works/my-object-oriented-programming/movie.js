// create a class Movie [id,title,language,genre,setMovie(),displayMovie()]
// create 2 movie object

class Movie{

    setMovie(id,title,language,genre){
        this.id = id;
        this.title = title;
        this.language = language;
        this.genre = genre;
    }

    displayMovie(){
        console.log(this.id,this.title,this.language,this.genre);
    }

}

var kanjanaInstance = new Movie();

kanjanaInstance.setMovie(12,"kanjana","tamil","horror");

kanjanaInstance.displayMovie();


var kantharaInstance = new Movie();

kantharaInstance.setMovie(23,"kanthara","malayalam","action");

kantharaInstance.displayMovie();
