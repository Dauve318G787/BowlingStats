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

    //define bowlers based on selected season
    let bowlers = [];
    if (seasonSelection == "2024")
        {
        bowlers = ["Please select a season", "AJ Chapman"];
        }

    //populate bowler dropdown with bowlers for that season
    bowlers.forEach(bowler => 
        {
        const option = document.createElement("option");
        option.value = bowler;
        option.textContent = bowler;
        bowlerDropdown.appendChild(option);
        });
    }
window.onload = updateBowlers;