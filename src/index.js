var uniqueRandomArray = require('unique-random-array');
var names = require('./random-names.json');
// import {names} from './random-names.json';
// import uniqueRandomArray from 'unique-random-array';

module.exports = {
    // this will be exported
    all:names,
    random:uniqueRandomArray(names),
};