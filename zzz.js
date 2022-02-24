// let players=

// [

//     {
//         'name':'Rohit Sharma',
//         'dob':'01/01/1990',
//         'gender':'Male',
//         'city':'Bombay',
//         'sports':['cricket','swimming'],


//         'bookings':
        
//         [


//             {
//                 'bookingNumber':1,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'111111111111111111',
//                 'bookedOn':'31/08/2021',
//                 'bookedFor':'02/09/2021',
//             },


//             {
//                 'bookingNumber':2,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'222222222222222222',
//                 'bookedOn':'15/09/2021',
//                 'bookedFor':'17/09/2021',
//             }
//         ]
//     },




//     {
//         'name':'Virat Kohli',
//         'dob':'14/02/1993',
//         'gender':'Male',
//         'city':'Bangole',
//         'sports':['cricket','swimming'],


//         'bookings':
        
//         [


//             {
//                 'bookingNumber':1,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'333333333333333333',
//                 'bookedOn':'14/02/2020',
//                 'bookedFor':'15/02/2020',
//             },


//             {
//                 'bookingNumber':2,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'444444444444444444',
//                 'bookedOn':'14/02/2021',
//                 'bookedFor':'15/02/2021',
//             }
//         ]
//     },



//     {
//         'name':'KL Rahul',
//         'dob':'23/09/1995',
//         'gender':'Male',
//         'city':'Punjab',
//         'sports':['cricket','Singing'],


//         'bookings':
        
//         [


//             {
//                 'bookingNumber':1,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'555555555555555555',
//                 'bookedOn':'19/07/2021',
//                 'bookedFor':'20/07/2021',
//             },


//             {
//                 'bookingNumber':2,
//                 'sportId':'IND BAT',
//                 'centerId':'IND INTER-NATIONAL',
//                 'type':'private',
//                 'slot':'666666666666666666',
//                 'bookedOn':'18/12/2021',
//                 'bookedFor':'19/12/2021',
//             }
//         ]
//     }


// ]

// let exitPlayerslist= []
// let exitbookingslist=[]

// for(let i=0;i<players.length;i++)
// {
//     exitPlayerslist.push(players[i].name)
// }


// for(let i=0;i<players.length;i++)
// {
//     for(let j=0;j<2;j++)
//     {
//         exitbookingslist.push(players[i].bookings[j].slot)

//     }
    
// }

// // let exitPlayerslist1=new Object()

// // exitPlayerslist1.name=exitPlayerslist[0]

//  console.log(exitPlayerslist)




// console.log(exitbookingslist)

// console.log(players[0].name)












// {
//     'name':'Rohit Sharma',
//     'dob':'01/01/1990',
//     'gender':'Male',
//     'city':'Bombay',
//     'sports':['cricket','swimming'],


//     'bookings':[]
// }



// {
//     "bookingNumber":1,
//     "sportId":25321643,
//     "centerId":"36535",
//     "type":"private",
//     "slot":"555555555555555555",
//     "bookedOn":"19/07/2021"
// }


let number=[33,35,36,37,40]
//number.sort()
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
console.log(missingNumber)




// let number=[3,5,1,4,6]
// // for(let i=0;i<number.length;i++)
// // {

// // }
// //     let missingNumber=[]
// //     for(var i in number)
// //     {
// //         let x = number[i]-number[i-1] 
// //     let diff=1
// //     while(diff<x)
// //     {
// //         missingNumber.push(number[i-1]+diff)
// //         diff+=1
// //     }
// //     }

// var a=number.push((Math.max(...number)))
// var b =number.push((Math.min(...number)))





