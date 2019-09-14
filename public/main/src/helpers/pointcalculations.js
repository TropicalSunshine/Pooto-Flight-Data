module.exports = {
    midPoint: function(cordOne, cordTwo){
        return {
            lat: (cordOne.lat + cordTwo.lat) / 2,
            long: (cordOne.long + cordTwo.long) / 2
        }
    },
    dist: function(cordOne, cordTwo){
        return Math.sqrt((cordOne.lat - cordTwo.lat)**2 + (cordOne.long - cordTwo.long)**2);
    }

    
}