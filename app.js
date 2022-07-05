let userName =prompt( " Please enter user your name");
let gender =prompt( "Please enter your gender (male or female)");
let age =entAge(prompt( "Please enter your age"));
welcomeMessage(confirm("Want to show the welcome message or do you want to skip it?"),userName,gender);
alert("Please answer the following questions with yes or no only");
let arr=[];
arr.push(prompt( "Do you like reading ?"));
arr.push(prompt( "do you like music ?"));
arr.push(prompt( "Do you play video games ?"));

for(let i=0;i<arr.length;i++){
    if(arr[i]===null)
     arr[i]="invalid";
     console.log(arr[i]);
}


function entAge(a) {

    if(a<=0)
  {
    alert("You entered your age incorrectly, please enter it again");
    entAge(prompt( " Please enter your age"));
  }
}

function welcomeMessage(a,b,c){
    if(a){
        if (c==="male")
             alert("welcome Mr."+ b + " in Student Taske");
         else if(c==="female")
             alert("welcome Ms."+ b + " in Student Taske");
              else
              alert("welcome "+ b + " in Student Taske");
    }

}

