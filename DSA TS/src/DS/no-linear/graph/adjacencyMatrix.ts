class Graph {
    numberOfVertices: number;
    adjacencyMatrix: number[][];
    vertices: string[];
  
    constructor() {
      this.numberOfVertices = 0;
      this.adjacencyMatrix = [];
      this.vertices = [];
    }
  
    addVertex(vertex: string): void {
      this.vertices.push(vertex);
      let length = this.numberOfVertices;
      const adM = this.adjacencyMatrix;
      for (let idx = 0; idx < length; idx++) {
        adM[idx].push(0);
      }
      this.numberOfVertices++;
      length++;
      const newArr = [];
      for (let idx = 0; idx < length; idx++) {
        newArr[idx] = 0;
      }
      adM.push(newArr);
    }
  
    addEdge(vtx_ONE: string, vtx_TWO: string): void {
      const vtx_ONE_Idx = this.vertices.indexOf(vtx_ONE);
      const vtx_TWO_Idx = this.vertices.indexOf(vtx_TWO);
      if (vtx_ONE_Idx > -1 && vtx_TWO_Idx > -1) {
        this.adjacencyMatrix[vtx_ONE_Idx][vtx_TWO_Idx] = 1;
        this.adjacencyMatrix[vtx_TWO_Idx][vtx_ONE_Idx] = 1;
      } else {
        if (vtx_ONE_Idx > -1) {
          console.log(`${vtx_TWO} is not a vertex`);
          return undefined;
        } else if (vtx_TWO_Idx > -1) {
          console.log(`${vtx_ONE} is not a vertex`);
          return undefined;
        }
        console.log(`${vtx_ONE} and ${vtx_TWO} are not a vertex`);
        return undefined;
      }
    }
  
    removeEdge(vtx_ONE: string, vtx_TWO: string): void {
      const vtx_ONE_Idx = this.vertices.indexOf(vtx_ONE);
      const vtx_TWO_Idx = this.vertices.indexOf(vtx_TWO);
  
      if (vtx_ONE_Idx > -1 && vtx_TWO_Idx > -1) {
        this.adjacencyMatrix[vtx_ONE_Idx][vtx_TWO_Idx] = 0;
        this.adjacencyMatrix[vtx_TWO_Idx][vtx_ONE_Idx] = 0;
      }
    }
  
    removeVertex(vtx: string): void {
      const vtxIdx = this.vertices.indexOf(vtx);
      if (vtxIdx === -1) return undefined;
      for (let idx = 0; idx < this.numberOfVertices; idx++) {
        for (let i = vtxIdx; i < this.numberOfVertices; i++) {
          this.adjacencyMatrix[idx][i] = this.adjacencyMatrix[idx][i + 1];
        }
        this.adjacencyMatrix[idx].length--;
      }
      this.adjacencyMatrix = this.adjacencyMatrix.filter((v, idx) => idx !== vtxIdx);
      this.vertices = this.vertices.filter((v) => v !== vtx);
      this.numberOfVertices--;
    }
  
    BFS(vtx: string): string[] | undefined {
      const vtxIdx = this.vertices.indexOf(vtx);
      if (vtxIdx === -1) return undefined;
      const data: string[] = [];
      const visited: { [key: string]: boolean } = {};
      const queue: string[] = [vtx];
      visited[vtx] = true;
      const adM = this.adjacencyMatrix;
      while (queue.length) {
        const currVtx = queue.shift() as string;
        data.push(currVtx);
        const currVtxIdx = this.vertices.indexOf(currVtx);
        for (let idx = 0; idx < this.numberOfVertices; idx++) {
          if (adM[currVtxIdx][idx] && !visited[this.vertices[idx]]) {
            visited[this.vertices[idx]] = true;
            queue.push(this.vertices[idx]);
          }
        }
      }
      return data;
    }
  }
  
  const graph = new Graph();
  graph.addVertex("coments");
  graph.addVertex("profile");
  graph.addVertex("posts");
  graph.addVertex("story");
  graph.addVertex("like");
  graph.addVertex("share");
  graph.addVertex("friends");
  