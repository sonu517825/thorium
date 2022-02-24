const express = require('express');

const router = express.Router();

// intero

router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to find the missing number from an array.<h2>Author Name : Sonu Verma</h2></h3>")
});

// find missing number

router.get('/missing',function(req , res)
{
    let number=[1,2,4,6,8,9]
    let missingNumber=[]
    for(var i in number)
    {
        let x = number[i]-number[i-1] 
    let diff=1
    while(diff<x)
    {
        missingNumber.push(number[i-1]+diff)
        diff+=1
    }
    }

    res.send(`Missing numbers are : ${missingNumber}`)
})

// missing number starting from anywhare may be sorted 

router.get('/missing/anywhare',function(req,res)
{
   let number = [33,48,32,45,33,40,46,39]
   number.sort()
   let missingNumber=[]
   for(var i in number)
   {
       let x = number[i]-number[i-1] 
   let diff=1
   while(diff<x)
    {
       missingNumber.push(number[i-1]+diff)
       diff+=1
    }
    }
    res.send(`Missing numbers are : ${missingNumber}`)
    
})


module.exports=router
