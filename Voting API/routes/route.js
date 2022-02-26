const express = require('express');

const router = express.Router();

// intero

router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to check the person voating status.<h2>Author Name : Sonu Verma</h2></h3>")
});

// person data

let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]


// API check voating status

router.post("/query", function (req, res)
{
    // eligible persons

    let elig_persons=[]
    let votingAge=req.query.votingAge
    for(let i=0;i<persons.length;i++)
    {
        if(persons[i].age>=votingAge)
        {
            persons[i].votingStatus=true
            elig_persons.push(persons[i])
        }
    }
   
    // not eligible persons
    
    let not_elig_persons=[]
    for(let i=0;i<persons.length;i++)
    {
        if(persons[i].votingStatus==false)
        {
            not_elig_persons.push(persons[i])
        }
    }

    // result

    //res.send(not_elig_persons)
    //res.send(elig_persons)

    console.log(not_elig_persons)
    console.log(elig_persons)

});


module.exports=router

