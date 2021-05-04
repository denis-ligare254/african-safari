// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://images.pexels.com/photos/3739327/pexels-photo-3739327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://images.pexels.com/photos/3844922/pexels-photo-3844922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://images.pexels.com/photos/7723348/pexels-photo-7723348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://images.pexels.com/photos/7723296/pexels-photo-7723296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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