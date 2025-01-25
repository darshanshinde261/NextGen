const h1 = document.querySelector('h1');
const input = document.querySelector(".input2");
const input2 = document.querySelector(".input3");
const button = document.querySelector("button");
const result = document.querySelector('.result');

button.addEventListener("click",()=>{
    let weight = Number(input.value);
    let height = Number(input2.value);
    const bmi = weight / Math.pow(height / 100, 2)
    console.log(bmi)
    if (bmi < 18.5) {
        console.log("underweight");
        result.innerHTML = `<img src="https://media.gettyimages.com/id/108349181/photo/african-girl-eating-a-meal-in-the-orphanage.jpg?s=612x612&w=0&k=20&c=bvfPjrCgu_55fXD50DRNc9JCjO1iXGUkjjOUKPQYe3U=" alt="">`
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("normal weight")
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("overweight")
        result.innerHTML = `<img src="https://static.vecteezy.com/system/resources/thumbnails/036/025/219/small/ai-generated-happy-fat-man-in-a-blue-t-shirt-showing-thumb-up-photo.jpg" alt="">`
    } else {
        console.log("obesity");
    }
});




let color = "blue"
h1.addEventListener("click",()=>{
    if(color === "blue"){
        h1.style = 'background-color:red'
        color = "red"
    }
    else{
        h1.style = 'background-color:blue'
        color = "blue"
    }
});

console.log("hello world")

function kmToMiles(kilometers) {
    return kilometers * 0.621371;
}