const GooglePlaces = require('googleplaces');
const key = 'AIzaSyBFnxqoO-hv9QQDoW-BNj9VVQXuk8FHaCA';
const googlePlaces = new GooglePlaces(key, "json");
exports.findingXYZ = (req, res) => {
    let ar = ["X", 5, 9, 15, 23, "Y", "Z"];
    let xyz = [];
    ar.find((element) => {
        let x = parseInt(element);
        isNaN(x) ? xyz.push(element) : '';
    });
    res.send(xyz);
}
exports.findRestaurantsInBangsue = function(req, res) {
    let location = 'restaurant in Bangsue';
    parameters = {
        query: location
    };
    googlePlaces.textSearch(parameters, function(error, response) {
        if (error) throw error;
        if (response.results.length === 0) {
            return res.send(response.error_message)
        } else {
            return res.json(response.results)
        }
    });
};