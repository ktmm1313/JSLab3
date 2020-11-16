//Declare a variable named submissions that is initialized to an array with the following
//objects

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

//2.Declare function addSubmission with parameters array,newName,newScore,newDate
//Push new object into the array. Use conditionals to set value for passed to
//true if score is >60 and false otherwise
function addSubmission(array, newName, newScore, newDate) {
  let newPassed;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  let count = array.push(newSubmission);
}
addSubmission(submissions, "John", 48, "2020-10-01");
addSubmission(submissions, "Joan", 74, "2019-02-21");
addSubmission(submissions, "Jamie", 92, "2020-11-14");
//console.log("2. ", submissions);

//3.Declare function deleteSubmissionByIndex with parameters array & index.
//Remove the object from the array at the specified index using splice.
function deleteSubmissionByIndex(array, index) {
   array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 3);
//console.log("3. ", submissions);

//4.Declare function deleteSubmissionByName with parameters array, name.
//Remove the object from the array that has the provided name. Use
//findIndex method and splice method.
function deleteSubmissionByName(array, name) {
  array.splice(name, 1);
}
deleteSubmissionByName(submissions, "Jane");
//console.log("4. ", submissions);

//5.Delcare a function named editSubmission with parameters array, index, score.
//Update an object's score in the array at the specified index.  Use
//conditional statements to set the value for the passed property to true if
//score is >= 60 and false otherwise
function editSubmission(array, index, score) {
  array[index].score = score;
  let newPassed;
  if (score >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }  
  array[index].passed = newPassed;
}
editSubmission(submissions, 3, 75);
//console.log("5. ", submissions);

//6.Delcare a function named findSubmissionByName with parameters array, name
//Return the object in the array that has the provided name.  Use find method.
function findSubmissionByName(array, name) {
  let result = array.find(({ name }) => name === "Joan");
  return result;
}
findSubmissionByName(submissions, "Joan");
//console.log("6. ", findSubmissionByName(submissions));

//7.Declare a function named findLowestScore with parameter array.  Return the object
//in the array with the lowest score.  Use forEach method to loop through whole array.
function findLowestScore(array) {
  let lowest = null;
  submissions.forEach(function (submissions) {
    if (lowest === null || lowest.score > submissions.score) {
      lowest = submissions;
    }
  });
  return lowest;
}
//console.log("7. ", findLowestScore(submissions));

//8.Declare a function named findAverageScore with parameter array.  Return the
//average quiz score.  Use a for..of loop.
function findAverageScore(array) {
  let sum = 0;
  let avgScore = 0;
  for (const student of array) {
    sum = sum + student.score;
  }
  avgScore = sum / array.length;
  //console.log("8. ", avgScore);
  return avgScore;
}
findAverageScore(submissions);

//9.Declare a function named filterPassing with parameter array.  Return a new array
//using the filter method.  It should find objects in the array that have passing scores.
function filterPassing(array) {
  return array.filter(function (filtered) {
    return filtered.passed === true;
  });
}
filterPassing(submissions);
//console.log("9. ", filterPassing(submissions));

//10.Declare a function named filter90AndAbove with parameter array.  Return a new array
//using the filter method.  It should find objects in the array that have scores >= 90.
function filter90AndAbove(array) {
  return array.filter(function (filtered) {
    return filtered.score >= 90;
  });
}
filter90AndAbove(submissions);
//console.log("10. ", filter90AndAbove(submissions));
