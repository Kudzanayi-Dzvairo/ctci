// o(n)

function foo(array){
    let sum = 0;
    let product = 1; 

    for(i = 0; i < array.length; i++){
        sum += array[i]
    }

    for(i = 0; i < array.length; i++){
        product *= array[i];
    }

    console.log(sum + ", " + product)
}


//O(N*2)
function printPairs(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            console.log(array[i] + "," + array[j])
        }
    }
}

function printUnorderedPairs(array){
    for(i = 0; i < array.length; i++){
        for( j = i + 1; j < array.length; j++){
            console.log(array[i] + ", " + array[j])
        }
    }
}

//O(N*2)
function printUnorderedPairs2(array1,array2){
    for(i=0; i < array1.length; i++){
        for(j=0; j < array1.length; j++){
            if(array1[i] < array2[j]){
                console.log(array1[i] + ", " + array2[j])
            }
        }
    }
}

printUnorderedPairs2([1,2,3,4,5], [6,7,8,9,10])

function reverse(){
    for(i=0; i < array.length / 2; i++)
}