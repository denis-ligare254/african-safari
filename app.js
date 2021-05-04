// local reviews data
const reviews = [
  {
    id: 1,
    name: "Elephant",
    job: "Among the big 5",
    img:
      "https://images.pexels.com/photos/3739327/pexels-photo-3739327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "My first experience with African wildlife began when I was young, similar to the way a lot of children see wildlife: at a zoo or circus. I always loved seeing animals in these environments, but it always seemed like something was off. ",
  },
  {
    id: 2,
    name: "zebra",
    job: "Among the big 5",
    img:
      "https://images.pexels.com/photos/3844922/pexels-photo-3844922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "The Grévy's zebra, also known as the imperial zebra, is the largest living wild equid and the largest and most threatened of the three species of zebra, the other two being the plains zebra and the mountain zebra. ",
  },
  {
    id: 3,
    name: "Antelope",
    job: "Among the big 5",
    img:
      "https://images.pexels.com/photos/7723348/pexels-photo-7723348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "This crossword clue Savanna antelopes was discovered last seen in the April 25 2021 at the NewsDay Crossword. The crossword clue possible answer is available in 7 letters. This answers first letter of which starts with I and can be found at the end of S. We think IMPALAS is the possible answer on this clue.",
  },
  {
    id: 4,
    name: "Girrafe",
    job: "Among the big 5",
    img:
      "https://images.pexels.com/photos/7723296/pexels-photo-7723296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "Duplicate, adventure, africa, animal, close-up, ecotourism, giraffe, grass, mammal, portrait, safari, savannha, serengeti, spot, tall, tanzania, tourism, travel, wild, wildlife, zebra ",
  },
];

// selecting elements to be changed
const info=document.getElementById('info');
const author =document.getElementById('author');
const job =document.getElementById('job');
const image =document.getElementById('person-img');


// targetting next nd previous buttons
const nextbtn =document.querySelector('.next-btn');
const previousbtn =document.querySelector('.prev-btn');
const randombtn =document.querySelector('.random-btn');
// set initial start load 

let initialLoad =0

// listening to load event at window object
window.addEventListener('DOMContentLoaded',function(){
  showperson(initialLoad)

})
function showperson(person){
  const items =reviews[person];
   image.src=items.img;
   author.textContent=items.name;
   job.textContent=items.job;
   info.textContent=items.text;

}
// targeting the next button
nextbtn.addEventListener('click',function(){
  initialLoad ++;
  if(initialLoad>reviews.length-1){
    initialLoad=0
  }
  showperson(initialLoad);
})
previousbtn.addEventListener('click',function(){
  initialLoad --;
 if(initialLoad <0){
   initialLoad= reviews.length -1;
 }
  showperson(initialLoad);
})
// random button targeted
randombtn.addEventListener('click',function(){
Math.random(math.floor(showperson))
})