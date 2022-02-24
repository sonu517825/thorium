const express = require('express');

const router = express.Router();


// intero

router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to store the players details.<h2>Author Name : Sonu Verma</h2></h3>")
});


 let playersList=[]
 
// // problom 1

router.post('/players',function(req , resp)
{
    let player=req.body
    let name=req.body.name

    // check name

    for(let i=0;i<playersList.length;i++)
    {
        if(playersList[i].name==name)
        {
            return resp.send("This player is already exit")
        }
    }
    playersList.push(player)
    resp.send(playersList)
})


 // problom 2


 router.post('/players/:playerName/bookings/:bookingId',function(req,res)
{
    // check name 

    let name=req.params.playerName
    let isPlayerPresent=false
    for(let i=0;i<playersList.length;i++)
    {
        if(playersList[i].name==name)
        {
            isPlayerPresent=true
        }
    }
    if(isPlayerPresent==false)
    {
        return res.send("Player does not exit")
    }

    // check booking

    let booking =req.body
    let bookId=req.params.bookingId
    for(let i=0;i<playersList.length;i++)
    {
        if(playersList[i].name==name)
        {
            for(let j=0;j<playersList[i].bookings.length;j++)
            {
                if(playersList[i].bookings[j].bookingNumber==bookId)
                {
                    return res.send("Booking from this id is already present")
                }
            }
            playersList[i].bookings.push(booking)
        }
    }
    res.send(playersList)    
})

module.exports=router



