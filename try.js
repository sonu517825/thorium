let arr = [3,10,4,6,7];
let n = arr.length
let count =0
    
for(let i=0;i<n;i++)
{
    let temp=arr[i]
    let sum=0
    for(let j=0;j<n;j++)
    {
        if(temp==arr[j])
        {

        }
        else
        {
            sum=sum+arr[j]
        }
        console.log(sum)
    }
        if(sum%temp==0)
        {
            count=count+1
        }
        console.log(count)
}
    // sum=sum+arr[i]
    // console.log(sum)


console.log(count)

