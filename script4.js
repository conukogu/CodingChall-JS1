const average = (arr) =>
{   
    let a=0;
    for (let i=0; i<arr.length; i++)
    {
        a+=arr[i];
    }
    a=a/arr.length;
    return a;
}

let testArr=[1.5, 3, 2.5, 1];

console.log(average(testArr));


//---------------------------------------------------------------------------------------------------------//

const pivot = (arr, x) =>
{
    for(let i=0; i<arr.length; i++)
    {
        //console.log(x);

        if (arr.indexOf(i)===x)
        {  
            y=i
             i=arr.length;
        }
        else
        {
            y=-1
        }
    }
     return y;
}

let x = 6;
let testArr2 = [4,5,6,7,0,1,2];

console.log((pivot(testArr2, x)));