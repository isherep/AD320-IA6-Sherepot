//program that accepts numbers as command-line arguments and prints
//the sum of numbers to the console

var sum = 0;
for(var i =2; i<process.argv.length; i++){
  sum += Number(process.argv[i]);
}
console.log(sum);
return sum;
