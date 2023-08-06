import { ipcRenderer } from "./utils";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <h1>Home</h1>
        <Link
          className="mt-5 mx-auto block bg-slate-400 py-1 px-4 rounded-lg text-white w-20"
          to={"/blogs"}
        >
          Blogs
        </Link>

        <button
          className="mt-5 mx-auto block bg-slate-400 py-1 px-4 rounded-lg text-white"
          onClick={async () => {
            ipcRenderer.send("ping", {
              message: "pong",
            });

            const result = await ipcRenderer.invoke("ping");
            console.log(result);
          }}
        >
          Test IPC
        </button>
      </main>
    ),
  },
  {
    path: "/blogs",
    element: (
      <main>
        <h1>Blogs</h1>
        <Link
          className="mt-5 mx-auto block bg-slate-400 py-1 px-4 rounded-lg text-white w-20"
          to={"/"}
        >
          Home
        </Link>
      </main>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
