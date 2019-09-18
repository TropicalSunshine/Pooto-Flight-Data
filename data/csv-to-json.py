import csv
import json



jsonObj = {"all" : []}

with open("gadb_country_declatlon.csv") as csvfile:
    file = csv.reader(csvfile, delimiter = ",")
    for row in file:
        if(len(row) == 3):
            jsonObj["all"].append([row[1],row[2]])

with open("result.json", "w") as json_file:
    json.dump(jsonObj, json_file)