function getNumber(min, max) {
    const arr1 = [];
    const arr2 = [];

    for (let number = 0; number < 20; number++) {
        // Uruchamia się 20 razy, z wartościami od 0 do 100.
        let numb = Math.floor(Math.random() * (max - min + 1)) + min;

        if(numb % 2 === 0) {
            arr1.push(numb)
            arr1.sort(function(a, b){return a - b})
            document.getElementById("even").innerHTML = arr1.toString() + ", ";
        }
        else {
            arr2.push(numb)
            arr2.sort(function(a, b){return a - b})
            document.getElementById("odd").innerHTML = arr2.toString() + ", ";
        }
    }
    console.log("parzyste:  " + arr1);
    console.log("nieparzyste:  " + arr2);
}

getNumber(1,100);

