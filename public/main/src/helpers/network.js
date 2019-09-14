
module.exports = {
    getAllFlightCord: function(action)
    {
        var result = [];

        fetch("http://localhost:8181/flights/all", {
            method: "GET",
            body: null,
        }).then(res => res.json()).then(function(resp){
            result = resp.data;
            action(result)
        }).catch(error => {
            console.log(error);
        });
 
    }
}