###########################################################
## Module name: dbupload.py                              ##
## 
## Module methodology: For the sake of visualization
## and readability, player/season stats are organized in
## Excel files, which are saved as CSV (comma-separated
## value) files. This allows us to easily add and edit
## stats without needing to worry about complex MySQL
## queries. Additionally, Python has libraries dedicated
## to handling csv files and interacting with MySQL
## databases.
##
## Module function: To parse stats files and upload them
## to the MySQL database.
###########################################################

import csv
import mysql.connector