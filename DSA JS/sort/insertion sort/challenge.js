// const arr = [1,1,1,2,2,3,4,5,5]
                
// let j = 0
// let dupe = false
// for(let i = 1; i < arr.length; i++){
//     if(arr[i]== arr[j]){
//        dupe = true
//     } else {
//         if(!dupe){
//             console.log(arr[j])
//         }
//         dupe = false
//         j = i
//     }
// }




function common (arr1, arr2){
    const obj1 = {}
    const obj2 = {}
    const newArr = []

    for(let num of arr1){
        if(!obj1[num]){
            obj1[num] = num
        }
    }

    for(let num of arr2){
        if(!obj2[num]){
            obj2[num] = num
        }
    }

    console.log(obj1, obj2)

    for(let key in obj1){
        if(obj2[key]){
            newArr.push(obj2[key])
        }
    }

    return newArr

}

const arr1 = [1,2,3,5,2,1]
const arr2 = [1,3, 5, 2, 5, 2, 4, 4]
const comon = common(arr1, arr2)

console.log(comon)