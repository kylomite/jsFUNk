const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');
const { clubs } = require('./datasets/clubs');
const { books } = require('./datasets/books');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(animals) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        /* CODE GOES HERE */
    let results = []
    let orangeAnimals = animals.filter((el) => el.color === 'orange')
    orangeAnimals.forEach((el) => results.push(el.name));
    return results
    // Annotation:
    // Write your annotation here as a comment
      // I started by finding each orange kitty from the dataset using the .filter
      // function. Once I got that, the goal was to push each element to a variable
      // I can return. I want to make this take less than 4 lines.
  },

  sortByAge(animals) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
  return animals.sort((a, b) => b.age - a.age)

    // Annotation:
    // Write your annotation here as a comment
    // This one was pretty simple because were only sorting the original Data set there
    // is no need to return anythign other than the sorted version of that data set
  },

  growUp(animals) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */
    return animals.map((el) => {
      return {
        name: el.name,
        age: el.age + 2,
        color: el.color
      }
    });
    // WRONG GOAL
    // return kitties.reduce((acc, el) => {
    //   acc.push(el.age + 2);
    //   return acc;
    // },[]);
    
    // Annotation:
    // I misread this one which is why there is a WRONG GOAL Section, still good 
    // practice regardless.
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// Annotation:
// Changint this is simple enough, each top level function has been changed to require an
//  argument(animals). From here insted of calling iterators in individual datasets we call 
//  them on the parameter. This ensure we can call the functions on either kitties or puppers


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubList) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    //make results variable for storage 
    //for each club instance
    //  add student/clubs KVP to results variable, initialize value as empty array
    //  if a student is a club participant, add that club to the students value array

    /* CODE GOES HERE */
    var results = {}
    var countedStudents = []
    clubList.forEach((club) => {
      club.members.forEach((member) => {
        if (!(countedStudents.includes(member))) {
          countedStudents.push(member)
          results[member] = [];
        };
        results[member].push(club.club);
      });
    });
    return results;
  }
};

//Annotation:
// This Sucked! Its funny how much time i spent failing to do this only to do it easily on a monday morning. I was able to
// do nested forEach loops to gain access to the club members. To check if they've already been added to my resuls i want to
// return i set up a countedStudents array to check if they've already been counted. Not sure if this is the most optimal way 
// to do it but I did it anyway, and it works so its a good first iteration. Once  I add every student as a key with an array 
// value, I will push the club as a value to the array value. I then return the result outside the forEach CSSLayerStatementRule.




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */
    var results = mods.reduce((acc, el) => {
      acc.push({
        mod: el.mod,
        studentsPerInstructor: el.students / el.instructors
      });
      return acc;
    },[]);
    return results
    // Annotation:
    // Write your annotation here as a comment
    // I like using the reduce method, i think this was a good application of the reduce method
    // because I am returing a single datatype (array) and we can push each object into the array
    // as we iterate throught the proceess. We push each constructed value to the accumulator value
    //  in line 162. we define what we are pushing in by referenceing both the specifc element (el)
    // and the key's with dot notation to access their values. The math required to find the ratio
    // of students to instructors is a simple division. I made sure to set my reduce method to a 
    // results variable so I can return it once the iterator is completed.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */

    // make results array
    //for each cake object
      // make new objject in results array
      // poulate with flavor KVP and inStock KVP
    return cakes.reduce((acc, el) => {
      acc.push({
        flavor: el.cakeFlavor,
        inStock: el.inStock
      })
      return acc
    },[])
    // Annotation:
    
    // we want to return an array of objects. We are taking the object in the
    // original cake array, and trimming the unwanted data. I chose to do this
    // with the reduce method where the accumulator is initially an empty array
    // and we populate it with a push where we push an object only holding the values we want
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */
    // var results = [];
    // cakes.forEach((el) => {
    //   if (el.inStock != 0) {
    //     results.push(el)
    //   }
    // })
    // return results

    return cakes.filter((el) => el.inStock != 0)
    // Annotation:
    // I did this two WebAssembly, at first with a reduce method, but it works more 
    // concisely with a filter() because we are returning the same Object, just based
    // on if they meet a certain criteria
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
    return cakes.reduce((acc, el) => {
      acc += el.inStock;
      return acc;
    },0);
    // Annotation:
    // since this method is accumulating the total inventory I used reduce to return
    // the total amount of all inStock values as an integer. I made sure to define 
    // the accumulator after the logic, even though it would default to zero. It has
    // been suggested to do this for dev empathy.
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    var result = [];
    cakes.forEach((cake) => {
          cake.toppings.forEach ((flavor) => {
            if (!(result.includes(flavor))) {
              result.push(flavor);
            };
          });
    });
    return result
    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */
    var results = {};
    cakes.forEach((cake) => {
      cake.toppings.forEach ((flavor) => {
        if (results[flavor] !== undefined) {
          results[flavor] += 1;
        } else {
          results[flavor] = 1
        }
      });
    })
    return results
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
    return classrooms.reduce((acc, room) => {
      if(room.program === 'FE') {
        acc.push(room)
      }
      return acc;  
    },[])
    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */

    function capacitySum(programAbbreviation) {
      return classrooms.reduce((acc, room) => {
        if(room.program === programAbbreviation) {
          acc += room.capacity
        }
        return acc;  
      },0);
    }
    // var feCap =  classrooms.reduce((acc, room) => {
    //   if(room.program === 'FE') {
    //     acc += room.capacity
    //   }
    //   return acc;  
    // },0)

    // var beCap =  classrooms.reduce((acc, room) => {
    //   if(room.program === 'BE') {
    //     acc += room.capacity
    //   }
    //   return acc;  
    // },0)

    return {
      feCapacity: capacitySum('FE'),
      beCapacity: capacitySum('BE')
    }
    
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    return classrooms.sort((a, b) => a.capacity - b.capacity)

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(list) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */
    return list.reduce((acc, book) => {
      if(!(book.genre === "Horror" || book.genre === "True Crime")) {
        acc.push(book.title)
      }
      return acc;
    },[]);
    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks(list) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    return list.reduce((acc, book) => {
      if(book.published >= 1990){
        acc.push({
          title: book.title,
          year: book.published
        })
      };
      return acc;
    },[]);

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    return books.reduce((acc, book) => {
      if(book.published >= year){
        acc.push({
          title: book.title,
          year: book.published
        })
      };
      return acc;
    },[]);
    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    return weather.reduce((acc, el) => {
      acc.push((el.temperature.high + el.temperature.low) / 2)
      return acc;
    },[]);
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    var sunnyLocations = [];
    weather.forEach((el)=> {
      if(el.type ===  "sunny" || el.type === "mostly sunny") {
        sunnyLocations.push(`${el.location} is ${el.type}.`);
      };
    });
    return sunnyLocations;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    return weather.reduce((acc, el) => {
      if (el.humidity > acc.humidity)
        acc = el
      return acc;
    },weather[0]);

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
    return nationalParks.reduce((acc, el) => {
      if(el.visited === true){
        acc.parksVisited.push(el.name);
      }else {
        acc.parksToVisit.push(el.name);
      };
      return acc;
    }, {
        parksToVisit: [],
        parksVisited: []
      });
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    /* CODE GOES HERE */
    return nationalParks.reduce((acc, el) => {
      acc.push({
        [el.location]: el.name
      });
      return acc;
    },[]);
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    var result = [];
    nationalParks.forEach((el) => {
      el.activities.forEach((activity) => {
        if(!(result.includes(activity))){
          result.push(activity);
        }
      });
    });
    return result

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
    return breweries.reduce((acc, el) => {
      acc += el.beers.length
      return acc
    },0)
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
    return breweries.reduce((acc, el) => {
      acc.push({
        name: el.name,
        beerCount: el.beers.length
      });
      return acc;
    }, []);
    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */
    specificBrewery = breweries.find((el) => el.name === breweryName)
    return specificBrewery.beers.length

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
    var result;
    var currentHighest = { 
      name: 'B.B. Rodriguez', 
      type: 'Coffee Double Brown', 
      abv: 8, 
      ibu: 30, 

    };

    breweries.forEach((el) => {
      el.beers.forEach((beer) => {
        if(beer.abv > currentHighest.abv){
          currentHighest = beer
          result = beer
        };
      });
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */
    // for (var key in boardGames) {
    //   if(key === type){
    //     return boardGames[key].reduce((acc, game) => {
    //       acc.push(game.name)
    //       return acc;
    //     },[]);
    //   };
    // };
    if (boardGames[type]) {
      return boardGames[type].map(game => game.name);
    }
    
    // var result = []
    // boardGames.forEach((group) => {
    //   //if(boardGames.group){}
    //   result.push(group)
    // });
    // return boardGames.strategy
    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */
    if(boardGames[type]){
      var mappedObjects = boardGames[type].map((game) => game.name);
      //return mappedObjects
      var result = mappedObjects.sort((a, b) => a.localeCompare(b));
      return result
    }
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    if(boardGames[type]){
      var result = boardGames[type][0]
      boardGames[type].forEach((game) => {
        if(game.rating > result.rating){
          result = game
        };
      });
      return result
    }
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    if(boardGames[type]){
      var scoreSum = boardGames[type].reduce((acc, game) => {
        acc += game.rating;
        return acc;
      }, 0);
      return scoreSum / boardGames[type].length;
    }
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    var counter = 0;
    var scoreSum;
    if(boardGames[type]){
      boardGames[type].forEach((game) => {
        if(game.maxPlayers == maximumPlayers){
          scoreSum = boardGames[type].reduce((acc, game) => {
            acc += game.rating;
            counter += 1
            return acc;
          }, 0);
        }
      }) 
      return counter
    }
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPrompts = {
  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByBrightness() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use.  Even though the same weapon might be used by multiple characters, count each weapon only once.
    // Solve this *without* using Object.keys().  Hint: iterate over the characters array, then iterate through each character's weapons array. Find a way to make sure you only count each weapon once. 
    // Answer => 59

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of *awesome* dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// ---------------------------------------------------------------------------
//  ADDITIONAL CHALLENGES THAT INCLUDE METHODS NOT NEEDED FOR YOUR ASSESSMENT
   /* NOTE - You will not see Object.keys() on an assessment */
// ---------------------------------------------------------------------------



// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
 

    // Annotation:
    // Write your annotation here as a comment
  }
};

// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPromptsII = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinoPromptsII = {
  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};














module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
