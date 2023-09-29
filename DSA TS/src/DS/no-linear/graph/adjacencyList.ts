class GraphAM {
    private adjacencyList: { [key: string]: string[] };
  
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex: string): void {
      this.adjacencyList[vertex] = [];
    }
  
    addEdges(vertex1: string, vertex2: string): void {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    removeEdge(vertex1: string, vertex2: string): void {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }
  
    removeVertex(vertex: string): void {
      const adjacentVertices = this.adjacencyList[vertex];
      for (const adjVertex of adjacentVertices) {
        this.adjacencyList[adjVertex] = this.adjacencyList[adjVertex].filter((vtx) => vtx !== vertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    depthFirstSearch(vertex: string): string[] {
      const data: string[] = [];
      const visited: { [key: string]: boolean } = {};
  
      const dfs = (vtx: string): void => {
        if (!vtx) return;
        visited[vtx] = true;
        data.push(vtx);
        this.adjacencyList[vtx].forEach((v) => {
          if (!visited[v]) {
            dfs(v);
          }
        });
      };
  
      dfs(vertex);
      return data;
    }
  
    dfsIterative(vertex: string): string[] {
      const data: string[] = [];
      const stack: string[] = [vertex];
      const visited: { [key: string]: boolean } = {};
      visited[vertex] = true;
  
      while (stack.length) {
        const vtx: string = stack.pop() as string;
        data.push(vtx);
        this.adjacencyList[vtx].forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;
            stack.push(v);
          }
        });
      }
  
      return data;
    }
  
    BFS(vertex: string): string[] {
      const queue: string[] = [vertex];
      const data: string[] = [];
      const visited: { [key: string]: boolean } = {};
      visited[vertex] = true;
  
      while (queue.length) {
        const curVtx: string = queue.shift() as string;
        data.push(curVtx);
        this.adjacencyList[curVtx].forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;
            queue.push(v);
          }
        });
      }
  
      return data;
    }
  }
  
  const g = new GraphAM();
  
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  
  g.addEdges("A", "B");
  g.addEdges("A", "C");
  g.addEdges("B", "D");
  g.addEdges("C", "E");
  g.addEdges("D", "E");
  g.addEdges("D", "F");
  g.addEdges("E", "F");
  
  console.log(g.BFS("A"));

  
