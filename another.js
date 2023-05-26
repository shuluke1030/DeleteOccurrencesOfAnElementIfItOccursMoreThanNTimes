function deleteNth(arr, n) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        let test = arr[i]
        for (let j = 0; j <= i; j++) {
            if (arr[j] == test) {
                count++
            }
        }
        if (count <= n) {
            newArr.push(arr[i])
        }

    }
    return newArr
}
console.log(deleteNth([20, 37, 20, 21], 1))