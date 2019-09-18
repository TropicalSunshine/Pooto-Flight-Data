var url = "http://localhost:8181";


module.exports = {
    getAllFlightCord: function(callback)
    {
        fetch(url + "/flights/all", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            console.log("fetch data", resp.data);
            callback(resp.data)
        }).catch(error => {
            console.log(error);
        });
 
    },
    getAllGroundedCord: function(callback)
    {
        var result = [];

        fetch(url + "/flights/all", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            console.log("fetch data", resp.data);
            callback(resp.data)
        }).catch(error => {
            console.log(error);
        });
    },
    getFirstAirportByCountry: function(country, callback){
        country = country.toUpperCase();
        
        console.log(country);
        fetch(url + "/airports/first/" + country, {
            method: "GET",
            body: null
        }).then(res => res.json()).then((resp) => {
            console.log(resp);

            callback(resp.data);
        }).catch(error => {
            console.log(error);
        })
    }
}