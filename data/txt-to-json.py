import json


jsonObj = {

}


with open("airports.dat.txt", encoding="utf8" ) as fp:
    for row in fp:
        data = row.split(',')
        country = data[3].upper()

        if country not in jsonObj.keys():
            jsonObj[country] = {
                "num_airports": 1,
                "airports" : []
            };

            jsonObj[country]["airports"].append({
                "icao24": data[5],
                "lat": float(data[6]),
                "long": float(data[7]),
                "name": data[1]
            })
        else:
            jsonObj[country]["num_airports"] += 1
            jsonObj[country]["airports"].append({
                "icao24": data[5],
                "lat": float(data[6]),
                "long": float(data[7]),
                "name": data[1]
            })

with open("airports.json", "w") as json_file:
    json.dump(jsonObj, json_file)