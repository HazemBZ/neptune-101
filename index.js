const gremlin = require("gremlin");
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

//

async function createPost(graph) {
  const post = {
    title: "101",
    content: "how to to stuff",
  };

  const data = await graph
    .addV("posts")
    .property("title", post.title)
    .property("content", post.content)
    .next();
  return data;
}

async function main() {
  const endpoint = "localhost";

  console.log(`wss://${ep2}:8182/gremlin`);

  console.log("conneceting");

  dc = new DriverRemoteConnection(`wss://${endpoint}:8182/gremlin`);

  console.log("createing graph");
  const graph = new Graph();
  console.log("Traversing");
  const g = graph.traversal().withRemote(dc);

  console.log("Creating post");
  const data = await createPost(g);
  console.log(data);
  dc.close();
}

main();
