let x = prompt("Enter some val", "")
let isPrime = true;
for(let i=2; i <= x; i++){
    for(let j=2; j < i - 1; j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        alert(i);
    }
    isPrime = true;
}