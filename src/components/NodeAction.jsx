const NodeActions = ({ onAdd, onDelete, onDuplicate }) => {
  return (
    <div className="flex flex-row sm:flex-col  gap-2 p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-bold py-2 px-4 rounded"
        onClick={onAdd}
      >
        Add Node
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-base font-bold py-2 px-4 rounded"
        onClick={onDelete}
      >
        Delete Node
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-base font-bold py-2 px-4 rounded"
        onClick={onDuplicate}
      >
        Duplicate Node
      </button>
    </div>
  );
};

export default NodeActions;
