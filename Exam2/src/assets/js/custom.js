//Number array for exam.
const array1 = [1,2,3,4,5,6,7,8,9];

//Async main function declare.
async function main(){

    //Using async callback function
    //It should be order by exam2_1() -> exam2_2() -> exam2_3()
    setTimeout(() => exam2_3(), 1500);
    setTimeout(() => exam2_2(), 1000);
    setTimeout(() => exam2_1(), 500);

    //Exam2.3=====================
    //Declare function in async function because try to use await() as delay function with callback function
    async function exam2_3(){
        console.log("\nExam2.3");     //Just Title
        var string3 = "";             //string for log display in Exam3
        i=0;                          //redeclare for new loop.
        while(i<array1.length){
            string3 += array1[i]+' '+array1[i+1]+' '+array1[i+2]+' ';  //Prepare string before output.
            console.log(string3);                                      //Output the prepared string with console.log
            await sleep(250);           //delay 250 ms for each line
            string3 = "";               //Clear string3 for new line
            i+=3;                       //index count by 3
        }
    }
     
}


main(); //All exam2 run in this main()


//await fuction or u can call it "delay"
function sleep(ms){
    return new Promise((accept)=>{
        setTimeout(() => {
            accept();
        }, ms);
    });
}

//Exam2.1=====================
function exam2_1(){
    console.log("Exam2.1"); //Just Title
    i=0;    //i for array index
    while(i<9){
        console.log(array1[i]); //output eavery single number in array
        i++;
    }
 }
//Exam2.2=====================
function exam2_2(){
   console.log("\nExam2.2");        //Just Title
   var string2 = "";              //string for log display in Exam2
   array1.forEach(function(element){//Use foreach instead use loop
       string2 += element+' ';      //Add new number from array1 to string2
   });
   console.log('[ '+string2+']'); //Print all array members in 1 line
}
