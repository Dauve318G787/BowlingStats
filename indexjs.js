///////////////////////////////////////////////////////////
// Module name: indexjs.js                               //
// Module function: to provide interactivity for landing //
// page                                                  //
///////////////////////////////////////////////////////////

/* TODO DBD if dropdown changes are not being reflected
when website is being accessed from localhost, hit
Ctrl + F5. This forces the browser to download the
latest version of the page from the XAMPP server. */
    
//Landing page cascading dropdown logic
function updateBowlers()
    {
    //store season and bowler
    const seasonDropdown = document.getElementById("season");
    const bowlerDropdown = document.getElementById("bowler");

    //clear existing options in bowler dropdown
    bowlerDropdown.innerHTML = "";

    //get selected season from season dropdown
    const seasonSelection = seasonDropdown.value;

    //populate list of bowlers based on season
    let bowlers = [];
    if (seasonSelection == "2024")
        {
        bowlers = ["Ryan Barnes", "Chris Via", 
            "Nate Stubler", "Bill O'Neill",
            "Tom Smallwood", "EJ Tackett", "Kyle Troup",
            "Jason Belmonte", "Anthony Simonsen",
            "Jake Peters", "Sean Lavery-Spahr",
            "Marshall Kent", "Matt Russo",
            "Benjy Martinez", "Zach Wilkins",
            "Tim Foy Jr.", "David Krol",
            "Tomas Kayhko", "Sam Cooley",
            "Richie Teece", "Patrick Dombrowski",
            "DeeRonn Booker", "BJ Moore", 
            "Alec Keplinger", "Deo Benard",
            "Mikey Schlabach", "Jesper Svensson",
            "Packy Hanrahan", "Keven Williams",
            "Kris Prather", "Shota Kawazoe",
            "Michael Martell", "Kyle Sherman",
            "Eric Jones", "Justin Knowles",
            "Graham Fach", "Jason Sterner",
            "Matt Ogle", "Andrew Anderson"];
        }
    if (seasonSelection == "2023") 
        {
        bowlers = ["Justin Knowles", "Frank Snodgrass",
            "Marshall Kent", "Thomas Larsen", "Kyle Troup",
            "Richie Teece", "Anthony Simonsen",
            "Tomas Kayhko", "EJ Tackett", "Packy Hanrahan",
            "Francois Lavoie", "Tim Gruendler",
            "Wes Malott", "Kris Prather", "Tom Smallwood",
            "Chris Via", "Stuart Williams", "Jake Peters"];
        }
    
    //sort bowlers list alphabetically
    bowlers.sort();

    //populate bowler dropdown with bowlers for that season
    bowlers.forEach(bowler => 
        {
        //create option object
        const option = document.createElement("option");
        //populate option object
        option.value = bowler;
        option.textContent = bowler;
        //append option object to bowler dropdown
        bowlerDropdown.appendChild(option);
        });
    }
window.onload = updateBowlers;