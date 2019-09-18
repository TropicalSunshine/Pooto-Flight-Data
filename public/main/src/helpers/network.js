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
        fetch(url + "/flights/grounded", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            console.log("fetch data", resp.data);
            callback(resp.data)
        }).catch(error => {
            console.log(error);
        });
    },
    getAllAirports: function(callback){
        fetch(url + "/airports/all", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            console.log("getting all airports", resp.data);
            callback(resp.data)
        }).catch(error => {
            console.log(error);
        });
    },
    getFirstAirportByCountry: function(country, callback){
        country = country.toUpperCase();
        
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