'use strict';

var _expandoId= new Date().getTime();
var lastGenId = 0;

class Vertex {
    constructor(label, id) {
        this.label = label;
		this.id = id || 'uniq' + _expandoId + (lastGenId++);
    }
}

class Edge {
	constructor(fromVertex, toVertex, data) {
		this.fromVertex = fromVertex;
		this.toVertex = toVertex;
		this.data = data;
	}
}

class Graph {
    constructor() {
		this.vertices = [];
		this.edges = [];
		this.adjMatrix = {};
    }

    addVertex(vertex) {
		this.vertices.push(vertex);
		this.adjMatrix[vertex.id] = {};
        return vertex;
    }

    findVertex(id) {
    }

    removeVertex(vertex) {
        var index = this.vertices.indexOf(vertex);
        !~index && this.vertices.splice(index, 1);
    }

    addEdge(fromVertex, toVertex, data) {
        var v = fromVertex.id;
        var w = toVertex.id;

		this.adjMatrix[fromVertex.id][toVertex.id] = 1;
		this.adjMatrix[toVertex.id][fromVertex.id] = 1;

		var edge = new Edge(fromVertex, toVertex, data);
        this.edges.push(edge);
    }

    walk(startVertex, fn) {
        if (fn) {
            for (let v of this._breadthSearch(startVertex)) {
                fn(v);
            }
        } else {
            return this._breadthSearch(startVertex);
        }
    }

    * _breadthSearch(v) {
        var visited = {};
        var que = [v];

        while(que.length > 0) {
            var v = que.shift();
            yield v;
            visited[v.id] = true;
            for (var i = 0; i < this.vertices.length; i++) {
                var vv = this.vertices[i];
                if (visited[vv.id]) { continue; }
                var w = this.adjMatrix[v.id][vv.id];
                if (w === 1) {
                    que.push(vv);
                }
            }
        }
    }

    * [Symbol.iterator]() {
        yield* this.vertices;
    }
}

module.exports = Graph;
module.exports.Vertex = Vertex;
