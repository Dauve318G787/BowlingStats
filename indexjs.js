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
function updateBowlers1()
    {
    //store season and bowler
    const seasonDropdown = document.getElementById("season1");
    const bowlerDropdown = document.getElementById("bowler1");

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
            "Matt Ogle", "Andrew Anderson",
            "AJ Johnson"];
        }
    
    else if (seasonSelection == "2023") 
        {
        bowlers = ["Justin Knowles", "Frank Snodgrass",
            "Marshall Kent", "Thomas Larsen", "Kyle Troup",
            "Richie Teece", "Anthony Simonsen",
            "Tomas Kayhko", "EJ Tackett", "Packy Hanrahan",
            "Francois Lavoie", "Tim Gruendler",
            "Wes Malott", "Kris Prather", "Tom Smallwood",
            "Chris Via", "Stuart Williams", "Jake Peters",
            "Andrew Anderson", "Jason Belmonte",
            "Jason Sterner", "Matt Ogle", 
            "Parker Bohn III", "Kyle Sherman", 
            "Sean Rash", "Patrick Dombrowski",
            "Michael Martell", "Jakob Butturff",
            "Joseph Grondin", "AJ Johnson",
            "BJ Moore", "Santtu Tahvanainen",
            "Jesper Svensson", "Sam Cooley",
            "Packy Hanrahan", "Zac Tackett",
            "Kevin McCune", "Keven Williams",
            "Bill O'Neill", "Dom Barrett",
            "Matt Russo"];
        }
    
    else if (seasonSelection == "2022")
        {
        bowlers = ["Patrick Dombrowski", "Kyle Troup",
            "Bill O'Neill", "Brandon Runk", "Graham Fach",
            "DJ Archer", "Toby Sambueno", "Norm Duke",
            "Tommy Jones", "Bailey Mavrick", "Matt Russo",
            "EJ Tackett", "AJ Johnson", "Sean Rash",
            "Brad Miller", "Kyle Sherman", 
            "Francois Lavoie", "Arturo Quintero",
            "Dom Barrett", "Jakob Butturff", "Jake Peters",
            "Wesley Low Jr.", "Cortez Schenck", 
            "Kris Prather", "Shawn Maldonado",
            "Jason Sterner", "Andrew Anderson",
            "Kris Koeltzow", "Kyle Sherman",
            "Cristian Azcona", "Anthony Simonsen",
            "Packy Hanrahan", "Keven Williams",
            "AJ Chapman", "Norm Duke"];
        }
    else if (seasonSelection == "2021")
        {
        bowlers = ["Darren Tang", "Kris Koeltzow",
            "Wesley Low Jr.", "Anthony Simonsen",
            "AJ Chapman", "Benjamin Martinez",
            "Keven Williams", "Packy Hanrahan",
            "Francois Lavoie", "Zach Weidman",
            "Wes Malott", "Ronnie Russell",
            "Andrew Anderson", "Tom Smallwood",
            "Tim Foy Jr.", "Chris Via",
            "Michael Davidson", "Brandon Novak",
            "Kyle Troup", "Dick Allen",
            "Tom Daugherty", "Ryan Ciminelli",
            "Cristian Azcona", "Jesper Svensson",
            "Sean Rash", "Jason Belmonte",
            "EJ Tackett", "Marshall Kent",
            "Sam Cooley", "Kris Prather",
            "Shawn Maldonado", "Jason Sterner",
            "Michael Tang", "Spencer Robarge",
            "Thomas Larsen", "Anthony Neuer"];
        }
    else if (seasonSelection == "2020")
        {
        bowlers = ["Chris Barnes", "Jakob Butturff",
            "Osku Palermaa", "Tommy Jones", "Darren Tang",
            "Sean Rash", "Packy Hanrahan",
            "Jesper Svensson", "Brad Miller",
            "Ryan Ciminelli", "AJ Johnson",
            "Kyle Troup", "Kris Prather",
            "Anthony Simonsen", "Jason Belmonte",
            "Bill O'Neill", "Marshall Kent",
            "Perry Crowell IV", "Chris Via",
            "Dick Allen", "Tom Smallwood",
            "Nick Pate", "Shawn Maldonado",
            "Jesper Svensson", "BJ Moore",
            "Carsten Hansen"];
        }
    else if (seasonSelection == "2019")
        {
        bowlers = ["Jakob Butturff", "Jason Belmonte",
            "Bill O'Neill", "Jesper Svensson",
            "Rhino Page", "Tom Daugherty",
            "Dom Barrett", "Patrick Girard",
            "Kyle Troup", "Michael Tang",
            "Dick Allen", "Sean Rash",
            "Josh Blanchard", "Sean Lavery-Spahr",
            "Marshall Kent", "EJ Tackett",
            "Anthony Simonsen", "DJ Archer",
            "Norm Duke", "Wes Malott",
            "Shota Kawazoe", "Kris Prather",
            "Kyle Sherman", "Matt McNiel",
            "AJ Chapman", "Ronnie Russell",
            "Andres Gomez", "Brad Miller",
            "Shawn Maldonado"];
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

function updateBowlers2()
    {
    //store season and bowler
    const seasonDropdown = document.getElementById("season2");
    const bowlerDropdown = document.getElementById("bowler2");

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
            "Matt Ogle", "Andrew Anderson",
            "AJ Johnson"];
        }
    
    else if (seasonSelection == "2023") 
        {
        bowlers = ["Justin Knowles", "Frank Snodgrass",
            "Marshall Kent", "Thomas Larsen", "Kyle Troup",
            "Richie Teece", "Anthony Simonsen",
            "Tomas Kayhko", "EJ Tackett", "Packy Hanrahan",
            "Francois Lavoie", "Tim Gruendler",
            "Wes Malott", "Kris Prather", "Tom Smallwood",
            "Chris Via", "Stuart Williams", "Jake Peters",
            "Andrew Anderson", "Jason Belmonte",
            "Jason Sterner", "Matt Ogle", 
            "Parker Bohn III", "Kyle Sherman", 
            "Sean Rash", "Patrick Dombrowski",
            "Michael Martell", "Jakob Butturff",
            "Joseph Grondin", "AJ Johnson",
            "BJ Moore", "Santtu Tahvanainen",
            "Jesper Svensson", "Sam Cooley",
            "Packy Hanrahan", "Zac Tackett",
            "Kevin McCune", "Keven Williams",
            "Bill O'Neill", "Dom Barrett",
            "Matt Russo"];
        }
    
    else if (seasonSelection == "2022")
        {
        bowlers = ["Patrick Dombrowski", "Kyle Troup",
            "Bill O'Neill", "Brandon Runk", "Graham Fach",
            "DJ Archer", "Toby Sambueno", "Norm Duke",
            "Tommy Jones", "Bailey Mavrick", "Matt Russo",
            "EJ Tackett", "AJ Johnson", "Sean Rash",
            "Brad Miller", "Kyle Sherman", 
            "Francois Lavoie", "Arturo Quintero",
            "Dom Barrett", "Jakob Butturff", "Jake Peters",
            "Wesley Low Jr.", "Cortez Schenck", 
            "Kris Prather", "Shawn Maldonado",
            "Jason Sterner", "Andrew Anderson",
            "Kris Koeltzow", "Kyle Sherman",
            "Cristian Azcona", "Anthony Simonsen",
            "Packy Hanrahan", "Keven Williams",
            "AJ Chapman", "Norm Duke"];
        }
    else if (seasonSelection == "2021")
        {
        bowlers = ["Darren Tang", "Kris Koeltzow",
            "Wesley Low Jr.", "Anthony Simonsen",
            "AJ Chapman", "Benjamin Martinez",
            "Keven Williams", "Packy Hanrahan",
            "Francois Lavoie", "Zach Weidman",
            "Wes Malott", "Ronnie Russell",
            "Andrew Anderson", "Tom Smallwood",
            "Tim Foy Jr.", "Chris Via",
            "Michael Davidson", "Brandon Novak",
            "Kyle Troup", "Dick Allen",
            "Tom Daugherty", "Ryan Ciminelli",
            "Cristian Azcona", "Jesper Svensson",
            "Sean Rash", "Jason Belmonte",
            "EJ Tackett", "Marshall Kent",
            "Sam Cooley", "Kris Prather",
            "Shawn Maldonado", "Jason Sterner",
            "Michael Tang", "Spencer Robarge",
            "Thomas Larsen", "Anthony Neuer"];
        }
    else if (seasonSelection == "2020")
        {
        bowlers = ["Chris Barnes", "Jakob Butturff",
            "Osku Palermaa", "Tommy Jones", "Darren Tang",
            "Sean Rash", "Packy Hanrahan",
            "Jesper Svensson", "Brad Miller",
            "Ryan Ciminelli", "AJ Johnson",
            "Kyle Troup", "Kris Prather",
            "Anthony Simonsen", "Jason Belmonte",
            "Bill O'Neill", "Marshall Kent",
            "Perry Crowell IV", "Chris Via",
            "Dick Allen", "Tom Smallwood",
            "Nick Pate", "Shawn Maldonado",
            "Jesper Svensson", "BJ Moore",
            "Carsten Hansen"];
        }
    else if (seasonSelection == "2019")
        {
        bowlers = ["Jakob Butturff", "Jason Belmonte",
            "Bill O'Neill", "Jesper Svensson",
            "Rhino Page", "Tom Daugherty",
            "Dom Barrett", "Patrick Girard",
            "Kyle Troup", "Michael Tang",
            "Dick Allen", "Sean Rash",
            "Josh Blanchard", "Sean Lavery-Spahr",
            "Marshall Kent", "EJ Tackett",
            "Anthony Simonsen", "DJ Archer",
            "Norm Duke", "Wes Malott",
            "Shota Kawazoe", "Kris Prather",
            "Kyle Sherman", "Matt McNiel",
            "AJ Chapman", "Ronnie Russell",
            "Andres Gomez", "Brad Miller",
            "Shawn Maldonado"];
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

window.onload = updateBowlers1;
window.onload = updateBowlers2;