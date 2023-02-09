const numberRouter= require('express').Router();

//function to convert carryString and sumString and to return in form of object;

const addNumbers = (num1, num2) => {
    let obj = {};
    let carryString = "_";
    let sumString = "";
    let count = 1;
    console.log(num1, num2);
    let maxLength = Math.max(num1.length, num2.length);
    let carry = 0;
  
    for (let i = 0; i < maxLength; i++) {
      let first_num_digit =
        i < num1.length ? parseInt(num1[num1.length - i - 1]) : 0;
      let second_num_digit =
        i < num2.length ? parseInt(num2[num2.length - i - 1]) : 0;
      let digitSum = first_num_digit + second_num_digit + carry;
      let sum = digitSum % 10;
      carry = Math.floor(digitSum / 10);
      sumString = sum + sumString;
      if (i < maxLength - 1) {
        carryString = carry + carryString;
      }
      console.log(carryString, sumString, count);
      obj[`step${count}`] = { carryString, sumString };
      count++;
    }
  
    return obj;
  };
 //function to validate number if it is a positive number or not;////////
  const validateNumber=(number)=>{
    let regex = /^(0|[1-9]\d*)(\.\d+)?$/;
    return regex.test(number);
   
}
  // post method to catch request;///////////////////////////////
numberRouter.post('/home',(req,res)=>{
    let {first_number,second_number}=req.body;
   if(!validateNumber(first_number) || !validateNumber(second_number)){
    return res.json({message: "Invalid number Entered"})
   }
   let obj= addNumbers(first_number, second_number);
    return res.json(obj)
})
module.exports={numberRouter}

