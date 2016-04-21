'use strict';

const Graph = require('./');
const Vertex = Graph.Vertex;


var graph = new Graph(5);

var v0 = graph.addVertex(new Vertex('0'));
var v1 = graph.addVertex(new Vertex('1'));
var v2 = graph.addVertex(new Vertex('2', 22));
var v3 = graph.addVertex(new Vertex('3'));
var v4 = graph.addVertex(new Vertex('4'));
var v5 = graph.addVertex(new Vertex('5'));
var v6 = graph.addVertex(new Vertex('6'));
var v7 = graph.addVertex(new Vertex('7'));

graph.addEdge(v0, v1);
graph.addEdge(v0, v2);
graph.addEdge(v1, v3);
graph.addEdge(v2, v4);

graph.addEdge(v6, v7);

// *  0  1  2  3  4  5  6  7
//                          
// 0  0  1  1  0  0  0  0  0
//                          
// 1  1  0  0  1  0  0  0  0
//                          
// 2  1  0  0  0  1  0  0  0
//                          
// 3  0  1  0  0  0  0  0  0
//                          
// 4  0  0  1  0  0  0  0  0
//                          
// 5  0  0  0  0  0  0  0  0
//                          
// 6  0  0  0  0  0  0  0  1
//                          
// 7  0  0  0  0  0  0  1  0

debugger;

console.log('\n');
console.log(...[...graph].map(v => 'Vertex: ' + v.label));

console.log('\n');
console.log('walk api1: ');
graph.walk(v2, (v) => console.log('Visited: ' + v.label));
console.log('walk api2: ');
[...graph.walk(v2)].map((v) => console.log('Visited: ' + v.label));

console.log('walk api1: ');
graph.walk(v7, (v) => console.log('Visited: ' + v.label));

