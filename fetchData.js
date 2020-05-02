
const passau = {
    // slightly modified from the official location of Passau to make the map center better around the 4 stations
    loc: [48.577643, 13.455484]
};

// Using fuzzId "passau" only yielded 2 stations with Wasserstaende around Passau
// Using the location of Passau and radius of 10 around it, the 4 stations with Wasserstande can be found
// The other 2 don't have Passau in their name, but are close enough to assume that these 4 are meant in the project brief
// The query used to find the UUIDs of the 4 stations in question:
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?latitude=48.5665&longitude=13.43122&radius=10&includeTimeseries=true&includeCurrentMeasurement=true&prettyprint=true
// Manually extracted the info from opening the above URL in the browser here:

// KACHLET UP
const kachletUp = {
    name: "Kachlet Up",
    uuid: "0fd56e0a-e32e-4b56-9cda-e0ce93d715c4",
    loc: [48.57855473136858,13.41078588341841]
};
// PASSAU DONAU
const passauDonau = {
    name: "Passau Donau",
    uuid: "9f12c405-35ac-4d90-9b7b-023be355867e",
    loc: [48.57612011844346,13.459076672254577]
};
// PASSAU ILZSTADT
const passauIlzstadt = {
    name: "Passau Ilzstadt",
    uuid: "33ceb441-23bc-4ca6-9fcd-ac35d41ef117",
    loc: [48.575208623171456,13.478019136458602]
};
// ACHLEITEN
const achleiten = {
    name: "Achleiten",
    uuid: "c389c9e2-a5d8-4104-a4cf-510ade44f143",
    loc: [48.58204677038562,13.503184735677362]
};

let baseUrl = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?ids=';
let urlParams = '&includeTimeseries=true&includeCurrentMeasurement=true&prettyprint=false';
let apiUrl = baseUrl + kachletUp.uuid + ',' + passauDonau.uuid + ',' + passauIlzstadt.uuid + ',' + achleiten.uuid + urlParams;

const fetchData = callback => {
    fetch(apiUrl, { method: "Get" })
        .then(res => res.json())
        .then(data => {
            let obj = {}; // restructure array to json object for ease of use
            for (let i = 0; i < data.length; i++) {
                obj[data[i].uuid] = data[i];
            }
            callback(obj);
        })
};

module.exports = { 
    passau,
    kachletUp,
    passauDonau,
    passauIlzstadt,
    achleiten,
    apiUrl,
    fetchData
};
