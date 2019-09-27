var url = "http://" + window.location.host;


module.exports = {
    getAllFlightCord: function(callback)
    {
        fetch(url + "/flights/all", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            
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
    },
    getAirportsByCountry: function(country, callback){
        country = country.toUpperCase();
        
        fetch(url + "/airports/" + country, {
            method: "GET",
            body: null
        }).then(res => res.json()).then((resp)=> {
            console.log(resp);

            callback(resp)
        })
    },
    getDeparturesByIcao: function(icao, callback){
        fetch(url + "/airports/departure/icao24/" + icao, {
            method: "GET",
            body: null
        }).then(res => res.json()).then((resp)=> {
            console.log(resp);

            callback(resp)
        })
    },
    getArrivalsByIcao: function(icao, callback){
        console.log("fetching icao");
        fetch(url + "/airports/arrivals/icao24/" + icao, {
            method: "GET",
            body: null
        }).then(res => res.json()).then((resp)=> {
            console.log(resp);

            callback(resp)
        }) 
    }
    
}