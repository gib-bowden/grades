/*Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A

*/

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = scores.map((grade) => {
	switch (true) {
	case (grade > 90): return "A";
	break;
	case (grade <= 90 && grade > 80): return "B";
	break;
	case (grade <= 80 && grade > 70): return "C";
	break;
	case (grade <= 70 && grade > 60): return "D";
	break;
	case (grade <= 60): return "F";
	break;
	}
})


var maxScore = (arr) => {
	return Math.max.apply(Math, arr);
};

var minScore = (arr) => {
	return Math.min.apply(Math, arr);
};

console.log(grades);
console.log(scores);
console.log(maxScore(scores));
console.log(minScore(scores));

