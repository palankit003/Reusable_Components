export const data = [
  {
    heading: "Server-side rendering React",
    subHeading: "Http requests per second",
    envs: [
      {
        title: "Bun",
        version: "v0.4.0",
      },
      {
        title: "Node.js",
        version: "v19.2.0",
      },
      {
        title: "Deno.serve()",
        version: "v1.29.1",
      },
    ],
  },
  {
    heading: "WebSocket chat server",
    subHeading: "Messages sent per second (Linux x64, 16 clients)",
    envs: [
      {
        title: "Bun.serve()",
        version: "v0.4.0",
      },
      {
        title: "ws(Node.js)",
        version: "v19.2.0",
      },
      {
        title: "Deno.serve()",
        version: "v1.29.1",
      },
    ],
  },
  {
    heading: "Load a huge table",
    subHeading: "Average queries per second",
    envs: [
      {
        title: "bun:sqlite",
        version: "v0.4.0",
      },
      {
        title: "deno(x/sqlite3)",
        version: "v1.29.1",
      },
      {
        title: "better-sqlite3",
        version: "Node v19.2.0",
      },
    ],
  },
];
