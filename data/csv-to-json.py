import csv
import json



jsonObj = {}

with open("gadb_country_declatlon.csv") as csvfile:
    file = csv.reader(csvfile, delimiter = ",")
    for row in file:
        if(len(row) == 3):
            if row[0] in jsonObj.keys():
                jsonObj[row[0]].append([row[1],row[2]])
            else:
                jsonObj[row[0]] = []
                jsonObj[row[0]].append([row[1],row[2]])

with open("result.json", "w") as json_file:
    json.dump(jsonObj, json_file)