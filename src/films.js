// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  
  const result = movies.map( object => object.director)
   
  //console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director="Steven Spielberg") {
  
  const filmsOf = movies.filter( movie => (movie.director == director)); 

  //console.log("EXERCICE 2 ->", filmsOf)
  return filmsOf;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director="Steve Spielberg") {
  
  const filmsOf = getMoviesFromDirector(movies);
  const noteTotal = filmsOf.reduce ( ( acc , movie) => {
    return acc += movie.score;
  },0)

  let scoreDir = parseFloat((noteTotal / filmsOf.length).toFixed(2));
  
  console.log("EXERCICE 3 ->", scoreDir)
  return scoreDir;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
