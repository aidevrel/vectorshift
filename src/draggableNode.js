export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} flex flex-col text-gray-600 cursor-grabbing justify-center text-sm items-center w-20 font-semibold p-1 rounded-md border-2 border-gray-500`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-lg">{icon}</span>
      <span className="font-light">{label}</span>
    </div>
  );
};
