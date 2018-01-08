import React, { Component } from 'react';

export default function convertToRoman(value) {
    var uni = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var dec = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var cen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var mil = ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMMM"];
    var res = [];

    if (value / 1000 > 0) {
        res = res.concat(mil[Math.floor(value / 1000)]);
    }

    if (value / 100 > 0) {
        res = res.concat(cen[Math.floor((value % 1000) / 100)]);
    }

    if (value / 10 > 0) {
        res = res.concat(dec[Math.floor(((value % 1000) % 100) / 10)]);
    }

    res = res.concat(uni[Math.floor(((value % 1000) % 100) % 10)]);
    return res.join('');
}