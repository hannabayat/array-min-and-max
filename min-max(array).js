function suprimum(yourarray){

    let max=yourarray[0];
    let min=yourarray[0];

    for (let item of yourarray){
        if (item>max) max=item;
        if (item<min) min=item;
    }

}
let a=[1,200,2,3,4,-6]
// console.log(suprimum(a))
                       //-----------------------------------------maping---------------------------------------------
const suprimum2=(arr)=>{
    let max=arr[0];
    let min=arr[0];
    arr.map(item=>{
    if(item>max) max = item;
    if(item < min) min = item;
})
    return{max,min};
}
// console.log(suprimum2(a))

                        //---------------------------------------reduse-----------------------------------------
function suprimum3(arr){
        let max=arr.reduce(function (preVal,currentVal){
        if(currentVal>preVal) preVal=currentVal;
            return preVal;
        })
    let min=arr.reduce(function (preVal,currentVal){
        if(currentVal<preVal) preVal=currentVal;
        return preVal;
    })
    return{max,min};
}
 console.log(suprimum3(a))

                             //--------------------------------------iteration -----------------------------------

function iterateElement(myArray){
    let result={}
    for (let item of myArray) {
        if (result[item]) result[item]++
        else result[item] =1
    }
    return result;
}
let b=[1,1,2,2,2,3,3,3,3,4]
console.log(iterateElement((b)))
//------------------------------with reduis---------------------------------------
function iterateElement2(myArray){
    let result=myArray.reduce(function (preVal,currentVal){
      if(preVal[currentVal]===undefined) preVal[currentVal]=1
      else preVal[currentVal]++
        return preVal;
    },{})
    return result;
}
console.log(iterateElement2((b)))
//------------------------------ map---------------------------------------
function iterateElement3(myArray) {
    let result={}
    myArray.map(item=>
        {if(result[item])result[item]++
            else result[item]=1
        }
    )
    return result;
}
console.log(iterateElement3((b)))