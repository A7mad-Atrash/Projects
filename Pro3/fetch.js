const { writeMovie } = require("./write_read_file");

async function fetchMovieData() {
  try {
    const response = await fetch("https://dummyapi.online/api/movies");
    const jsonData = await response.json();
    writeMovie(jsonData);
  } catch (error) {
    console.error("Error Fetching MoviesData:", error);
  }
}

module.exports = { fetchMovieData };