const getHighestMarks = (csvString) => {
var data = csvString.split(',');
if(data.length%3 !== 0){
    console.log('Invalid csv string');
}else{
    var count = 0;
    
    var personArr = [];

    var marks = data.filter(ele => Number(ele))
    marks.sort(function(a, b){return b-a});
    var highest = Number(marks[0]);

    do{
     count+=2;
     if(highest < Number(data[count])){
       highest = Number(data[count]);

       if(personArr.length === 0){
        personArr.push(data[count-2]+" "+data[count-1]);
       }    
     }else if(highest === Number(data[count])){
        personArr.push(data[count-2]+" "+data[count-1]);
     }
    }while(count < data.length);

    personArr = personArr.sort();
    personArr.forEach(element => {
        console.log(element);    
    });

    console.log(highest);
}
}

getHighestMarks('niyaaz,sir,44,test,sam,14,sammy,gent,44');

//TODO: To run script 'node csv.js' in root directory.

// Example csv string format 'niyaaz,sir,44,test,sam,14,sammy,gent,44'
// If given the freedom of creating a front end app i could ensure they can be uploaded and then run the function on extracted data.