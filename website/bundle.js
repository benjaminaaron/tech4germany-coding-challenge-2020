(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const passau = {
    loc: [48.5665,13.43122]
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

module.exports = { 
    passau,
    kachletUp,
    passauDonau,
    passauIlzstadt,
    achleiten
};

},{}]},{},[1])(1)
});
