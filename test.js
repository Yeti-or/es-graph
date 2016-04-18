'use strict';

const Graph = require('./');


var graph = new Graph(5);

graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,4);

//console.log('\n');
//console.log(graph.toString());
//graph.depthSearch(2, (v) => console.log('Visited: ' + v));
//
//console.log('\n');
//graph.clearVisited();
//graph.breadthSearch(2, (v) => console.log('Visited: ' + v));
//
//console.log('\n');
//graph.clearVisited();
//for (var v of graph.bar(0, true)) {
//    console.log('Visited *: ' + v);
//}
//
console.log('\n');
graph.clearVisited();
console.log(...[...graph].map(v => 'Visited: ' + v));

console.log('\n');
console.log('bar: ');

graph.clearVisited();
graph.gayBar(function* (x) {
    console.log(x);
    console.log(`Visited *: ${yield}`);
});
