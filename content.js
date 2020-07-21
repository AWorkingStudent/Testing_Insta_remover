
//var watch = document.querySelector('article').querySelector('header').getElementByTagName('div')[1].querySelector('div').querySelector('div').querySelector('span').querySelector('a').innerHTML

//global definitions

let post_num = 0
let usernames = ["neginvaand","meganng_","adrianmarinov"]

//functions


let insta_remove = (num) =>{
try{
  var watch = document.querySelector('main').getElementsByTagName('article')[0].querySelector('header').getElementsByTagName('a')[1].innerHTML
}
catch{
console.log("error")

}

usernames.forEach(function (element){
  console.log("working")

  if (element == watch){
    document.querySelector('main').getElementsByTagName('article')[post_num].innerHTML = ""
    document.querySelector('main').getElementsByTagName('article')[0].style.display = "none";
    console.log("working")

    return;


}}

)


}
setTimeout(insta_remove(1),2000)
setTimeout(insta_remove(1),2000)
setTimeout(insta_remove(1),2000)




function callback(mutationList, observer) {
  mutationList.forEach( (mutation) => {
    switch(mutation.type) {
      case 'childList':
      console.log("TRY")

      setTimeout(insta_remove(1),2000)


        break;
      case 'attributes':
      console.log("TRY")

      setTimeout(insta_remove(1),2000)


        break;
    }
  });
}




const targetNode = document.querySelector('main')
const observerOptions = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
}


const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

//let get_and_check = () =>{

//try


//  var watch = document.querySelector('main').getElementsByTagName('article')[post_num].querySelector('header').getElementsByTagName('a')[1].innerHTML
//  console.log(watch)

//  usernames.forEach(function (element){
//  console.log(element)

//  if (element == watch){
//  console.log("working")
//  console.log(watch)
//  document.querySelector('main').getElementsByTagName('article')[post_num].innerHTML = "12121212"
//  document.querySelector('main').getElementsByTagName('article')[post_num].removeAttribute('inlineEventName')
//  document.querySelector('main').getElementsByTagName('article')[post_num].outerHTML = "";
//  document.querySelector('main').getElementsByTagName('article')[post_num].style.display = "none";

//  }

//  post_num += 0
//  });



//}


//let first_pass = () => {



//}



//setTimeout(function(){
//    var watch = document.querySelector('main').getElementsByTagName('article')[2].querySelector('header').getElementsByTagName('a')[1].innerHTML
//    console.log(watch);
//}, 2000);











//var hasText = content.indexOf("meganng_")!==-1;
//console.log('hasText.nodeName')

//console.log(hasText)

// Here will be the checks for the header
