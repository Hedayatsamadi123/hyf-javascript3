console.log("Homework-week07");
// Step 1: Map, filter, reduce, and =>
/*
1.Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
Your solution could be something like this:

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]
rewrite the above program using map and filter don't forget to use =>
*/
let numbers = [1, 2, 3, 4];
let newNumbers = [];
newNumbers = numbers
.filter( number => number % 2 != 0)
.map(number => number * 2);

console.log('Doubled Numbers', newNumbers);

/*
2.Using this json file as the source, build a function which does the following:

Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings.
Calculate the average rating of all the movies.
Count the total number of Good, Average and Bad movies.
Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive?
Count the number of movies made between 1980-1989 (including both the years).
*/

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener("load", function() {
      // This in here is our callback function
      // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (this.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        console.log("Something is probably wrong with the url");
      }
    });
    request.addEventListener("error", function() {
      console.log("Server error like timeout");
    });
    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
  }
  // Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings

  function moviesTags (movie){
      const rating = movie.rating;
      if (rating >= 7){
          return "Good";
      } else if (rating >=4 && rating <7){
          return "Average";
      }else {
          return "Bad";
      }
  }

  getAjaxData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json", function (movies){
    console.log("All Movies", movies.length);
    console.log("Movies Tags:", moviesTags(movies[7]));

// Calculate the average rating of all the movies.
    const sumOfRatings = movies.reduce((accumulator, movie) => accumulator + movie.rating, 0);
    console.log("sumOfRatings", sumOfRatings);
    console.log("Average rating of all movies: ", (sumOfRatings / movies.length).toFixed(2));

// Count the total number of Good, Average and Bad movies.
    movies.map(movie => (movie.tag = moviesTags(movie)));
    const goodMovies = movies.filter(movie => movie.tag === "Good");
    console.log("Movies Taged As Good: ", goodMovies.length);

    const averageMovies = movies.filter(movie => movie.tag === "Average");
    console.log("Movies Taged As Average: ", averageMovies.length);

    const badMovies = movies.filter(movie => movie.tag === "Bad");
    console.log("Movies Taged As Bad: ", badMovies.length);


// Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive?






// Count the number of movies made between 1980-1989 (including both the years).
    const moviesMade1980To1989 = movies 
.filter(movie => movie.year >=1980)
.filter(movie => movie.year <= 1989).length;
console.log("Number of Movies Made Between 1980-1989:", moviesMade1980To1989);
  });
  








