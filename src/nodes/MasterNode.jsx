import React from 'react';
import { Handle, Position } from 'reactflow';
import { nodeTypes } from './nodeData';
import { AutoResizeTextarea } from '../atoms/AutoResizeTextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useNodeState = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const handleChange = (key) => (e) => {
    setState((prevState) => ({
      ...prevState,
      [key]: e.target.value
    }));
  };

  return [state, handleChange];
};

export const MasterNode = ({ id, type, data }) => {
  const nodeConfig = nodeTypes[type];
  const [nodeData, handleDataChange] = useNodeState(data || nodeConfig.data || {});

  if (!nodeConfig) {
    return <div className="p-2 bg-red-100 text-red-700 rounded">Unknown node type: {type}</div>;
  }

  const renderNodeContent = () => {
    return nodeConfig.fields.map((field) => (
      <React.Fragment key={field.id}>
        <div className="text-sm font-semibold mb-1">{field.label}</div>
        {field.type === 'select' ? (
          <select
            value={nodeData[field.id] || field.defaultValue}
            onChange={handleDataChange(field.id)}
            className="w-full px-2 py-1 text-sm border rounded bg-white"
          >
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <>
          <AutoResizeTextarea
            type="text"
            value={nodeData[field.id] || ''}
            onChange={handleDataChange(field.id)}
            placeholder={field.placeholder}
            className={field.className}
            />
        </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="w-64 bg-blue-50 border border-blue-200 rounded-lg shadow-md focus:border-4 focus:border-blue-500">
      <div className="bg-blue-100 px-3 py-2 rounded-t-lg border-b border-blue-200 font-semibold text-gray-600 flex gap-2 items-center">
        <span>{nodeConfig.label}</span>
        <FontAwesomeIcon icon={nodeConfig.icon} />
      </div>
      <div className="p-3">
        {renderNodeContent()}
      </div>
      {nodeConfig.inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ ...(input?.style ?? {}), width: 12, height: 12, top: `${((index+1)*100)/(nodeConfig?.inputs?.length + 1)}%` }}
        />
      ))}
      {nodeConfig.outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ ...(output?.style ?? {}), width: 12, height: 12, top: `${((index+1)*100)/(nodeConfig?.outputs?.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
