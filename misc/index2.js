(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var x=a=l=0,g=100;r=(()=>Math.floor(20*Math.random())),n=(()=>{a=r(),l++}),m=((a,n)=>a.style.marginLeft=20*n),n(),onkeydown=(o=>{(g-=l)<0||(r()<1?g+=20:x+=37==o.keyCode?-1:1,x==a&&n(),e.innerHTML="H"+g+" L"+l,m(s,a),m(p,x))});

},{}]},{},[1]);
