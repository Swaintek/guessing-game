var YES;
YES = 1;

var question1 = prompt("Are you afraid of the dark?");
if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  alert('You are a Halloweenie');
  YES++;
} else {
  alert('Hmmm... this is going to be harder than I thought');
}

var question2 = prompt("Do you believe in Haunted Houses?");
if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
  alert('You are a giant Halloweenie');
  YES++;
} else {
  alert('You are a tough one to scare!');
}

var question3 = prompt("Do you avoid watching scary movies and tv shows?");
if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
  alert('You are a mini Halloweenie');
  YES++;
} else {
  alert('You are ready for Hallowen!');
}

var yes = alert('You are finished! With Halloween right around the corner, we need to check how prepared you are based on your answers.');
if (yes >= 2) {
  alert('You were afraid of 2 scary scenarios... sleep with the lights on!');
} else {
  alert('You were only afraid of 1 creepy thing... good job!');
}


//console.log('Question1 response: ' + question1);
//console.log('Question2 response: ' + question2);
//console.log('Question3 response: ' + question3);

