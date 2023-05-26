function deleteNth(arr,n) {
    let count = 0
    let newArr = []
    let test;
    for(let i = 0 ; i < arr.length; i++) { 
        test = arr[i]
        for(let j = 0 ; j <= i; j++) { 
            if(arr[j] == test) { 
                count++
            }
        }
        if(count <= n) { 
            newArr.push(arr[i])
        }
        count = 0
    }
    return newArr
  }