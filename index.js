'use strict';

function Vertex(label) {
	this.label = label;
}

class Graph {
    constructor(v) {
        this.verticesCount = v;
        this.edges = 0;
        this.adjList = [];
        this.visited = [];
        for (var i = 0; i < this.verticesCount; i++) {
            this.adjList[i] = [];
            this.visited[i] = false;
        }
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
        this.edges++;
    }

    clearVisited() {
        for (var i = 0; i < this.verticesCount; i++) {
            this.visited[i] = false;
        }
    }

    depthSearch(index, fn) {
        this.clearVisited();
        if (fn) {
            for (let v of this._depthSearch(index)) {
                fn(v);
            }
        } else {
            return this._depthSearch(index);
        }
    }

    * _depthSearch(v) {
        // TODO: v out of range
        yield v;
        this.visited[v] = true;
        for (var i = 0; i < this.adjList[v].length; i++) {
            var w = this.adjList[v][i];
            if (!this.visited[w]) {
                yield* this._depthSearch(w);
            }
        }
    }

    breadthSearch(index, fn) {
        if (fn) {
            for (let v of this._breadthSearch(index)) {
                fn(v);
            }
        } else {
            return this._breadthSearch(index);
        }
    }

    * _breadthSearch(v) {
        this.clearVisited();
        var que = [v];

        while(que.length > 0) {
            var v = que.shift();
            yield v;
            this.visited[v] = true;
            this.adjList[v].forEach((w) => {
                if (!this.visited[w]) {
                    que.push(w);
                }
            });
        }
    }

    * [Symbol.iterator]() {
        yield* this._breadthSearch(0);
    }

    toString() {
        return this.adjList.reduce((res, list, i) => {
            res += i + ' -> ';
            return list.reduce((res, el) => {
                if (el !== undefined) {
                    res += el + ' ';
                }
                return res;
            }, res) + '\n';
        }, '');
    }
}

module.exports = Graph;
