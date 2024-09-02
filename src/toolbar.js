import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DraggableNode } from "./draggableNode";
import { nodeTypes } from "./nodes/nodeData";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {Object.keys(nodeTypes).map((type) => (
          <DraggableNode
            key={type}
            type={type}
            label={nodeTypes[type].label}
            icon={<FontAwesomeIcon icon={nodeTypes[type].icon} />}
          />
        ))}
      </div>
    </div>
  );
};
