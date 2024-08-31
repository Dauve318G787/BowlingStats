///////////////////////////////////////////////////////////
// Module name: indexjs.js                               //
// Module function: to provide interactivity for landing //
// page                                                  //
///////////////////////////////////////////////////////////
    
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