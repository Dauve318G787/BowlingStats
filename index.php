<!--
Module name: index.html
Module function: landing page for statistics user interface
-->

<!--
INDEX PAGE PLANS

Have five drop-downs. Two on the left will be for one
bowler and two on the right will be for the other.
The drop down on the left will be for the bowler's
season, and the drop down on the right will be the
bowler's name. The outlying drop-down will be for
the oil pattern the bowlers will be bowling on.

For the sake of simplicity, this website will only
track players' stats on television shows. Therefore,
if a bowler has not made TV, they will not be on this list.
This site will also only go back to approximately 2012 or so
and will focus heavily on the FOX era of PBA bowling
(2019-present).

Season and bowler dropdowns will be implemented as cascading
dropdowns- in other words, the season that is selected
will impact which bowlers show up in the "bowler 1"
and "bowler 2" dropdowns. Bowlers will only show up
in a particular season's dropdown if they made
a television show in that season. They only need
to make one TV show to be included, but they
must make at least one TV show to be included.
For example, Kris Prather's 2023 season will be
documented, even though he only made one show.
However, Francois Lavoie's 2024 season will not
be documented, as he did not make any shows.

PBA League and doubles stats will NOT be documented
in the database. This website will focus on singles
shows and only singles shows.

This website will use a MySQL database to store bowler stats.
So far, the bowler stats I have in mind are:

- Television win percentage (possibly the most important one)
- Television strike percentage
- Television spare percentage
- Ball speed
- Rev rate
- Total TV appearances
- Total tour titles
- Versatility (titles won on different patterns will
factor into this)
- Head to Head Performance (have these bowlers faced each other
on TV and what is their record against one another?)

The oil patterns I plan to include are:

- US Open (A Future For the Sport, circa 2016-2019)
- US Open (2022-2024)
- USBC Masters (2020s)
- Cheetah
- Scorpion
- Wolf
- Badger
- Shark
- Earl Anthony
- Tournament of Champions

Some bowlers have not competed on one of or multiple of
these patterns. 

-- continue this list --

-->


<!DOCTYPE html>
<html>
    <head>
    <title>7-10 Stats</title>
    <script src="indexjs.js" defer></script>

    <?php
    $dsn = "mysql:host=localhost;dbname=bowlingstats";
    $username = "root";
    $password = "";

    try {
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "Connection successful!";

    } catch (PDOException $e) {

        echo "Connection unsuccessful: ". $e->getMessage();
    }
    ?>

    </head>
    
    <body>
        <h1>Welcome to 7-10 Stats</h1>

        <!--TODO DBD create cascading dropdowns for seasons
        2012-2024. Refer to bookmarked W3schools page
        for tips on how to implement. -->

        <label for="season">Select a season:</label>
        <select id="season" onchange="updateBowlers()">
            <option value="">Please select a season</option>
            <option value="2024">2024</option>
        </select>

        <label for="bowler">Select a bowler: </label>
        <select id="bowler">

        </select>

    
    </body>
</html>