import { ipcRenderer } from "./utils";

function App() {
  return (
    <button
      className="mt-5 mx-auto block bg-slate-400 py-1 px-4 rounded-lg text-white"
      onClick={() => {
        ipcRenderer.send("ping", {
          message: "pong",
        });
      }}
    >
      Test IPC
    </button>
  );
}

export default App;
