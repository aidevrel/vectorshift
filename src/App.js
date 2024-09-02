import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { SubmitButton } from "./submit";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function App() {
  const { nodes, edges } = useStore(selector, shallow);
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <div className="flex justify-center items-center">
        <SubmitButton nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
