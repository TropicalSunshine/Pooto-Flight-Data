import json


jsonObj = {

}


with open("airports.dat.txt", encoding="utf8" ) as fp:
    for row in fp:
        data = row.strip().split(',')
        print(data)
        country = data[3].upper()
        country = country.strip('\"')

        
        if country not in jsonObj.keys():
            jsonObj[country] = {
                "num_airports": 1,
                "airports" : []
            };

            lat = 0
            long = 0
            try:
                lat = float(data[6])
            except:
                lat = data[6]

            try:
                long = float(data[7])
            except:
                long = data[7]

            jsonObj[country]["airports"].append({
                "icao24": data[5].strip('\"'),
                "lat": lat,
                "long": long,
                "name": data[1].strip('\"'),
                "city": data[2].strip('\"'), 
                "timezone": data[9]
            })
        else:
            jsonObj[country]["num_airports"] += 1

            lat = 0
            long = 0
            try:
                lat = float(data[6])
            except:
                lat = data[6]

            try:
                long = float(data[7])
            except:
                long = data[7]

            jsonObj[country]["airports"].append({
                "icao24": data[5].strip('\"'),
                "lat": lat,
                "long": long,
                "name": data[1].strip('\"'),
                "city": data[2].strip('\"'),
                "timezone": data[9]
            })

with open("airports.json", "w") as json_file:
    json.dump(jsonObj, json_file)