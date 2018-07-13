function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!";
}
console.log(mash());



function getHome(){
    const crib = process.argv[2];
    console.log (crib);
    const home = ["Mansion", "Apartment", "Shack", "House"];
    home.push(crib);
    const p= Math.floor(Math.random()* (home.length));
    //console.log(p); 
    const house = home[p];

    return house;
}
//console.log(getHome());

//Create a function called “getChildrenCount” which takes no arguments and returns a random number between 0 and 100.
//Modify the “mash” function to return a string in the following format (mind the double quotes):
//“You will live in a “ + getHome() + “, and you will have “ + getChildrenCount() + “ kids!”
//Run the script on the command line with user arguments to test that it’s working properly.

function getChildrenCount(){
    const children = Math.floor(Math.random()* 100 + 1);
    return children;
}
//console.log(getChildrenCount());