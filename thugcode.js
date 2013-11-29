var user = prompt("Are you ready?").toUpperCase();


switch(user){

    case 'YES':

        var user2 = prompt("Okay! Here we go! Do you like to party!?").toUpperCase();

        var user3 = prompt("Are you...swagnificent?").toUpperCase();

        if (user2 === 'YES' && user3 === 'YES'){

            console.log("The thug lyfe has chosen you. #swag");

        }

        else if (user2 === 'NO' || user3 === 'NO'){

            console.log("The thug lyfe has not chosen you. You lose.");

        }

        else {

            console.log("It was a yes/no question. Dummy.");

        
    break;

	}
    case 'NO':

        console.log("Aww. Maybe next time.");

        break;

    case 'MAYBE':

        console.log("I'm going to need more of a commitment than that.");

        break;

    default:

        console.log("Try again.");

}