import React from "react";

const handleSubmit = async ({ nodes, edges }) => {
  console.log("Inside handle submit!");
  try {
    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(
        `Number of Nodes: ${data.num_nodes}, Number of Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`
      );
    } else {
      alert(`Error: ${data.detail}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit the pipeline.");
  }
};

export const SubmitButton = ({ nodes, edges }) => {
  return (
    <button
      className="w-fit border-2 text-gray-500 font-semibold border-gray-400 px-3 py-1 hover:bg-gray-600 hover:text-gray-50  hover:border-gray-600 rounded-full "
      onClick={() => handleSubmit({ nodes, edges })}
    >
      Submit Pipeline
    </button>
  );
};
