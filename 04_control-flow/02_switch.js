/*
//switch case
switch(key) {
    case value:
        //statement
        break;
    default:
        //statement
        break;
}
*/

const month = 11

switch (month) {
    case 1:
        console.log("January");
        break;
    case 12:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Enter correct number");
        break;
}

//Note: if there is no break statement, below codes are also executed until it encounters break.

const day = "Mon"

switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tus":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    default:
        console.log("Other days");
        break;
}

