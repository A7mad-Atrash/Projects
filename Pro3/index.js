const { fetchMovieData } = require("./fetch");
const { movie } = require("./movie");
const { readMovies, writeMovie } = require("./write_read_file");
function getInput(input) {
    const readline = require("readline-sync");
    return readline.question(input);
  }
    fetchMovieData(); 

function MovieCatalog(){
    const data= readMovies();
    console.log(data);
}

    function addMovieToCatalog(){
        const data = readMovies();
        const name = getInput('Insert Movie Name: ') .toString();
        const rating = getInput('Insert Movie Rating: ');
        const image = getInput('Insert Movie Image URL: ').toString();
        const imdb_url = getInput('Insert Movie image imdb_url: ').toString();
        const move = new movie(data.length+1,name,parseInt(rating),image,imdb_url);
        data.push(move);
        writeMovie(data);
        console.log('Add Movie Success :)');
    }

//this code for delete movie and write to catllog
    function deleteMovie() {
        const index = getInput('Insert Movie id: ');
        const catalog = readMovies();
        catalog.splice(parseInt(index-1), 1);
        writeMovie(catalog);
    }
    

    function updateMovie(index) {
        const catalog = readMovies();
        const name = getInput('Insert Movie Name: ') .toString();
        const rating = getInput('Insert Movie Rating: ');
        const image = getInput('Insert Movie Image URL: ').toString();
        const imdb_url = getInput('Insert Movie image imdb_url: ').toString();
        const updatedMovieData = new movie(index,name,parseInt(rating),image,imdb_url);
        catalog[index-1] = updatedMovieData;
        writeMovie(catalog);
    }
    

    function search(searchBy) {
        if(searchBy === 'name')
        {
            const name=getInput('Insert Movie Name To Search About it: ').toString();
            const catalog = readMovies();
            const filteredData = catalog.filter((item) => item?.name?.includes(name));
            console.log(filteredData);
        }
        else if(searchBy === 'rating')
       {
        const rating = getInput('Insert Movie Rating To Search: ');
        const catalog = readMovies();
        const filteredData = catalog.filter((item) => item?.rating>=parseInt(rating));
        console.log(filteredData);
       }
       else
       {
        console.log("Try again");
       }
    }
    
    async  function handleUserInput() {
      while (true) {
      console.log('Movie Catalog Management');
      console.log('1)- Display Movie Catalog');
      console.log('2)- Add New Movie');
      console.log('3)- Update Movie Details');
      console.log('4)- Delete Movie');
      console.log('5)- Search and Filter');
      console.log('6)- Fetch Movie Data');
      console.log('0)- Exit');
      console.log();
        const choice = getInput('Enter your choice: ');
    
        switch (choice) {
          case '1':
            MovieCatalog();
            break;
          case '2':
             addMovieToCatalog();
            console.log('Movie added successfully.');
            break;
          case '3':
              const index=getInput('Enter Movie id: ');
              updateMovie(index);
            break;
          case '4':
             deleteMovie();
            break;
          case '5':
              const searchWay=getInput('filter by ?(rating):(name): ');
            search(searchWay.toString());
            break;
          case '6':
              await  fetchMovieData();
            break;
          case '0':
            console.log('Exit...');
            return;
          default:
            console.log('Invalid Choice. Please Try Again.');
        }
    
        console.log();
      }
    }
    handleUserInput();