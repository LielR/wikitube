'use strict';

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}

function SaveDataToLocalStorage(newData) {
  var x = JSON.parse(localStorage.getItem("wikiDB") || "[]");
  x.push(newData);
  localStorage.setItem('wikiDB', JSON.stringify(x));
}