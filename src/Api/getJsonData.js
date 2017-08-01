export default function getJSONData(callback) {
    fetch("./src/api/products.json")
        .then(function(response) {
            return response.json();
        }).then(function(data) {
        callback(data);
    }).catch(function(err) {
        console.log('Error ', err);
    });
}

