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



let a1=18102;

let arr1=[143, 1623, 1646, 16336, 1624, 983, 122];

let keep=0;
let rem=0;
let record=[];
let numUsed=[];
let numAmountIn=[];
let newTotal=0;


const veryHard=(num, arr) =>
{
    arr.sort( function(x, y){return x - y});
    console.log(arr)
    for(i=arr.length-1; i>=0; i--)
    {
        keep=Math.floor(num/arr[i])
        record.push
        //(`The number ${arr[i]} goes into ${num} about ${keep} times`)
        // record.push(`Here is the reminader: ${num%arr[i]}`)
        num=num%arr[i]
        keepRecord(keep, arr[i]);
    }

    return record;
}



const keepRecord=(keep, arrI) =>
{
    //numUsed
    numUsed.push(arrI)
    
    numAmountIn.push(keep)
}


    function reasses(arr)
    {
            let i= arr.length-1;

            while(arr[i]===0 || i===arr.length-1)
            {i--};
            arr[i]=arr[i]-1;

            // console.log(arr);
            
            arr.splice(i+1);

            // console.log(arr);

            return arr
    }


    function newNum(valueArr, reassesArr)
    {
        let subSum=0;

        for(i=0; i<reassesArr.length; i++)
            {
                subSum=valueArr[i]*reassesArr[i]+subSum;
            }

        return subSum
    }




 


  function solvingIt (valueArr, reassesArr, newAmount)
  {
      for(let i=reassesArr.length; i<valueArr.length; i++)
      {
          reassesArr.push(Math.floor(newAmount/valueArr[i]))
        //   console.log(`${Math.floor(newAmount/valueArr[i])} is the whole into and ${valueArr[i]} is value`)
        //   console.log(newAmount)
          newAmount=newAmount%valueArr[i];
      }
      return reassesArr;
  }

 





//   console.log(veryHard(a1, arr1));

//   console.log(`This are the numbers: \n ${numUsed}`);

//   console.log(`This are the corresponding amout in: \n ${numAmountIn}`);

//   console.log(`This is the new assesment and split: \n ${reasses(numAmountIn)}`);



// newTotal=a1-newNum(numUsed, numAmountIn);



//  console.log(`Hey! ${newNum(numUsed, numAmountIn)}`)

//   console.log(`Heyo! ${newTotal}`)
  
//    console.log(solvingIt(numUsed, numAmountIn, newTotal));
  
//   console.log(reasses(numAmountIn));

//   newTotal=a1-newNum(numUsed, numAmountIn);

//   console.log(`Hey2! ${newNum(numUsed, numAmountIn)}`)

//   console.log(`Heyo2! ${newTotal}`)

//   console.log(solvingIt(numUsed, numAmountIn, newTotal));


  function allTogether()
  {
      veryHard(a1,arr1);

      console.log(`This are the numbers: \n ${numUsed}`);

      console.log(`This are the corresponding amout in: \n ${numAmountIn}`);

      console.log(`This is the new assesment and split: \n ${reasses(numAmountIn)}`);
      //reasses(numAmountIn);
      newTotal=a1-newNum(numUsed, numAmountIn);
      newNum(numUsed, numAmountIn);
      return solvingIt(numUsed, numAmountIn, newTotal);
  }


  function allTogether2()
  {
      console.log(`This are the numbers: \n ${numUsed}`);

      console.log(`This are the corresponding amout in: \n ${numAmountIn}`);

      console.log(`This is the new assesment and split: \n ${reasses(numAmountIn)}`);
      //reasses(numAmountIn);
      newTotal=a1-newNum(numUsed, numAmountIn);
      newNum(numUsed, numAmountIn);
      return solvingIt(numUsed, numAmountIn, newTotal);
  }




  console.log(allTogether());
  console.log(`This are the numbers: \n ${numUsed}`);

  console.log(allTogether2());
  console.log(`This are the numbers: \n ${numUsed}`);

  function gotThis ()
  {
    let finArr=allTogether();
    
  }