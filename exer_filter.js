const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = numbers.filter(x=> x%2==0)
console.log("print")
console.log(evenNumbers)

let a = [];
for(let i = 0; i<numbers.length;i++){
    if (numbers[i]%2==0){
        a.push(numbers[i])
    }else{
        continue
    }
}
console.log(a)

// filtered.reduce((acc, cur) => acc + cur.price, 0)
let sum = a.reduce((acc,cur)=>acc+cur);
console.log(sum)