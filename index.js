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

    depthSearch(v, fn) {
        this.clearVisited();
        this._depthSearch(v, fn);
    }

    _depthSearch(v, fn) {
        // TODO: v out of range
        this.visited[v] = true;
        fn && fn(v);
        this.adjList[v].forEach((w) => {
            if (!this.visited[w]) {
                this._depthSearch(w, fn);
            }
        });
    }

    breadthSearch(v, fn) {
        this.clearVisited();
        this._breadthSearch(v, fn);
    }

    _breadthSearch(v, fn) {
        var que = [v];

        while(que.length > 0) {
            var v = que.shift();
            fn && fn(v);
            this.visited[v] = true;
            this.adjList[v].forEach((w) => {
                if (!this.visited[w]) {
                    que.push(w);
                }
            });
        }
    }

    * [Symbol.iterator]() {
        yield* this.bar(0);
    }

    * bar(v, fn) {
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

    gayBar(fn) {
        for (let v of this.bar(0, true)) {
            var genObj = fn();
            genObj.next();
            genObj.next(v);
        }
    }

    foo(v) {
        return {
            [Symbol.iterator]: {
                items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
                next: function next () {
                    return {
                     done: this.items.length === 0,
                     value: this.items.shift()
                   }
                }
            }
        }
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
