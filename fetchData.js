
const passau_loc = '48.5665,13.43122';

// Using fuzzId "passau" only yielded 2 stations with Wasserstaende around Passau
// Using the location of Passau and radius of 10 around it, the 4 stations with Wasserstande can be found
// The other 2 don't have Passau in their name, but are close enough to assume that these 4 are meant in the project brief
// The query used to find the UUIDs of the 4 stations in question:
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?latitude=48.5665&longitude=13.43122&radius=10&includeTimeseries=true&includeCurrentMeasurement=true&prettyprint=true
// Manually extracted the info from opening the above URL in the browser here:

// KACHLET UP
const kachletUp_uuid = "0fd56e0a-e32e-4b56-9cda-e0ce93d715c4";
const kachletUp_loc = '48.57855473136858,13.41078588341841';
// PASSAU DONAU
const passauDonau_uuid = "9f12c405-35ac-4d90-9b7b-023be355867e";
const passauDonau_loc = '48.57612011844346,13.459076672254577';
// PASSAU ILZSTADT
const passauIlzstadt_uuid = "33ceb441-23bc-4ca6-9fcd-ac35d41ef117";
const passauIlzstadt_loc = '48.575208623171456,13.478019136458602';
// ACHLEITEN
const achleiten_uuid = "c389c9e2-a5d8-4104-a4cf-510ade44f143";
const achleiten_loc = '48.58204677038562,13.503184735677362';

module.exports = { 
    passau_loc,
    kachletUp_loc,
    passauDonau_loc,
    passauIlzstadt_loc,
    achleiten_loc
};
