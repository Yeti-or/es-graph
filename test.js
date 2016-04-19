'use strict';

const Graph = require('./');


var graph = new Graph(5);

graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,4);

console.log('\n');
console.log(graph.toString());

console.log('\n');
console.log(...[...graph].map(v => 'Visited: ' + v));

console.log('\n');
console.log('depthSearch api1: ');
graph.depthSearch(0, (v) => console.log('Visited: ' + v));
console.log('depthSearch api2: ');
[...graph.depthSearch(0)].map((v) => console.log('Visited: ' + v));

console.log('\n');
console.log('breadthSearch api1: ');
graph.breadthSearch(2, (v) => console.log('Visited: ' + v));
console.log('breadthSearch api2: ');
[...graph.breadthSearch(2)].map((v) => console.log('Visited: ' + v));

