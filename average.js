function getAverage (as1, as2, as3)

{

const total = as1 + as2 + as3 ;

const average = total / 3;

return average;

}

const as1marks = 60;

const as2marks = 58;

const as3marks = 25;

var myAverage = getAverage (as1marks, as2marks, as3marks);

console.log ("my average so far : " , myAverage);