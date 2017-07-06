var malegender=document.getElementById("malegender")
var femalegender=document.getElementById("femalegender")
malegender.addEventListener("click",secondPageMale,false)
femalegender.addEventListener("click",secondPageFemale,false)



function secondPageMale(){
  // TO HIDE THE FIRST PAGE AND SHOW THE SECOND
  var firstpage=document.getElementsByClassName("firstpage")
  for (var i=0;i<firstpage.length;i+=1){
    firstpage[i].style.display = 'none';
  }
  var secondpage=document.getElementsByClassName("secondpage")
  for (var i=0;i<secondpage.length;i+=1){
    secondpage[i].style.display = 'block';
  }
  var femaleHeroes=document.getElementsByClassName("female")
  for (var i=0;i<femaleHeroes.length;i+=1){
    femaleHeroes[i].style.display ="none"
  }
  // document.body.style.backgroundImage =url("../img/womens.jpg")

}
function secondPageFemale(){
  // TO HIDE THE FIRST PAGE AND SHOW THE SECOND
  var firstpage=document.getElementsByClassName("firstpage")
  for (var i=0;i<firstpage.length;i+=1){
    firstpage[i].style.display = 'none';
  }
  var secondpage=document.getElementsByClassName("secondpage")
  for (var i=0;i<secondpage.length;i+=1){
    secondpage[i].style.display = 'block';
  }
  var maleHeroes=document.getElementsByClassName("male")
  for (var i=0;i<maleHeroes.length;i+=1){
    maleHeroes[i].style.display ="none"
  }
  document.body.style.backgroundImage ='url("../interactiveuserprofile/img/womens.jpg")'
  document.body.style.backgroundRepeat = "no-repeat"
  // document.body.style.backgroundSize = "cover"

}
var display = document.getElementById('userphone');

display.addEventListener('keyup', formatPhone, false);

function formatPhone() {
  var phoneInput = document.getElementById('userphone');
  var numbers = phoneInput.value.replace(/\D/g, '')
  var result=document.getElementById("result")
  phoneInput.value = '';


  if(numbers.length >= 10) {
    phoneInput.value += "(" + numbers.substring(0, 3) + ")" + numbers.substring(3, 6) + "-" + numbers.substring(6, 10);
    phoneInput.style.borderColor = "green";
    // profile.push(phoneInput.value)
  } else if (numbers.length === 0 ) {
    phoneInput.value += "";
    phoneInput.style.bordersColor = "red";

  } else{
    phoneInput.value += "(" + numbers.substring(0, 3) + ")" + numbers.substring(3, 6) + "-" + numbers.substring(6, 10);
    phoneInput.style.borderColor = "red";


  };
};

function submitInfo(){
  var userName=document.getElementById("firstName").value
  var userLastName=document.getElementById("lastName").value
  var userEmail=document.getElementById("useremail").value
  var userPhone=document.getElementById("userphone").value
  var mailFormat = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
  var result=document.getElementById("result")
  var gender=document.getElementsByClassName("gender")
  var userGender
  for (var k=0; k<gender.length;k++){
    if(gender[k].checked){
      userGender = gender[k].value
    }
  }
  // var phoneInput = document.getElementById('userphone');
  // var numbers = phoneInput.value.replace(/\D/g, '')
  // var result=document.getElementById("result")
  // phoneInput.value = '';
  // TO GET THE PHONE NUMBER AND CHECK IT WITH THE STANDARD FORMAT

  // formatPhone()



  if(userName==""){
    // var result=document.getElementById("result")
    document.getElementById("firstName").focus()
    result.textContent = "You forgot to submit your first name"
    result.className = "error"
    return
  }
  // else{
  //   // profile.push(userName)
  //
  // }

  if(userLastName==""){
    document.getElementById("lastName").focus()
    // var result=document.getElementById("result")
    result.textContent = "You forgot to submit your last name"
    result.className = "error"
    return
  }
  // else{
  //   // profile.push(userLastName)
  // }
  if(userPhone==""){
    document.getElementById("userphone").focus()
    // var result=document.getElementById("result")
    result.textContent = "You forgot to submit your phone number"
    result.className = "error"
    return
  }
  if(userPhone.length < 13){
    document.getElementById("userphone").focus()
    // var result=document.getElementById("result")
    result.textContent = "You forgot to submit your phone number"
    result.className = "error"
    return
  }
  if(userEmail.match(mailFormat)){
    document.getElementById("useremail").style.borderColor = "green"
    result.textContent = ""
    result.className = "result"

        }else if(userEmail==""){
                document.getElementById("useremail").focus()
                result.textContent = "You forgot to submit your email address"
                result.className = "error"
                return
              } else {
                        // var result=document.getElementById("result")
                        document.getElementById("useremail").focus()
                        result.textContent = "Please submit a valid email address"
                        result.className = "error"
                        return
                      }




    var hero = document.getElementsByClassName("heroes")
    console.log(hero);
    // var userHero
    for (var i = 1;i<hero.length; i++){
      if(hero[i].selected){
         var userHero = hero[i].value
        console.log(hero[i]);

      }
    }
    if(userHero==undefined){
      // var result=document.getElementById("result")
      result.textContent = "You forgot to select your favorite hero"
      result.className = "error"
      return

    }

    var movie = document.getElementsByClassName("movie")
    var userMovie
    for (var j = 0;j<movie.length; j++){
      if(movie[j].checked){
        userMovie = movie[j].value

        }
    }
    if(userMovie==undefined){
      // var result=document.getElementById("result")
      result.textContent = "You forgot to select your favorite movie"
      result.className = "error"
      return
    }
    var profile = {
      name : userName + " " + userLastName,
      gender : userGender,
      email : userEmail,
      phoneNumber: userPhone,
      favHero : userHero,
      favMovie: userMovie

    }
    result.textContent = "Thank you. Just Wait!"
    result.className = "secondpage"
 setTimeout(function(){
   var secondpage=document.getElementsByClassName("secondpage")
   for (var i=0;i<secondpage.length;i+=1){
     secondpage[i].style.display = 'none';
     }
     var thirdpage=document.getElementById("thirdpage")
     thirdpage.style.display="block"
     var displayUser=document.getElementById("displayUser")
     displayUser.textContent = profile.name
     var displayEmail=document.getElementById("displayEmail")
     displayEmail.textContent = profile.email
     var displayPhone=document.getElementById("displayPhone")
     displayPhone.textContent = profile.phoneNumber
     var displayGender=document.getElementById("displayGender")
     displayGender.textContent = profile.gender
     var displayHero=document.getElementById("displayHero")
     displayHero.textContent = profile.favHero
     var displayMovie=document.getElementById("displayMovie")
     displayMovie.textContent = profile.favMovie
 },3000)

console.log(profile);
}


var submit = document.getElementById("button")
submit.addEventListener("click",submitInfo,false)
