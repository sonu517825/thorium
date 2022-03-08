const express = require('express');
const app=express()
const router = express.Router();


// intero

router.get('/test-me', function (req, res)
{
    res.send("<h3>This API is dedicated to show the movie details.<h2>Author Name : Sonu Verma</h2></h3>")
});

// all movie

router.get('/movies',function(req , res)
{
    res.send("['Raja','Race','3D','Dabang','Boys']")
})

// with index number

router.get('/movies/:movieID',function(req,res)
{
    var movie=['Raja','Race','3D','Dabang','Boys']  
    var indx=req.params.movieID
    if(indx>movie.length-1)
    {
        res.send("movie does not exit")
    }
    else
    {
        res.send(movie[indx])
    }
})

// with a particular id

router.get('/moviez',function(req,res)
{
    res.send([
        {
            id:1,
            Name:'Raja'
        },
        {
            id:2,
            Name:'Race'
        },
        {
            id:3,
            Name:'3D'
        },
        {
            id:4,
            Name:'Raja'
        },
        {
            id:5,
            Name:'Raja'
        },
    ])
})

// with id index

router.get('/Film/:FilmId',function(req,res)
{
    var movieList= [
        {
            id:1,
            Name:'Raja'
        },
        {
            id:2,
            Name:'Race'
        },
        {
            id:3,
            Name:'3D'
        },
        {
            id:4,
            Name:'Raja'
        },
        {
            id:5,
            Name:'Raja'
        },
    ]
    var indx=req.params.FilmId
    var flag=0
    for(var i=0;i<movieList.length;i++)
    {
        if(movieList[i].id==indx)
        {
            res.send(movieList[i])
            flag=1
        }
    }
    if(flag==0)
    {
        res.send("No movie present with ihis id")
    }
})

module.exports=router