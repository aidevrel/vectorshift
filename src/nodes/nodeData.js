import {
  faFileText,
  faNetworkWired,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

export const nodeTypes = {
  llm: {
    label: "LLM",
    icon: faNetworkWired,
    description: "This is a LLM.",
    inputs: [
      {
        id: "system",
        label: "System",
      },
      {
        id: "prompt",
        label: "Prompt",
      },
    ],
    outputs: [{ id: "response", label: "Response" }],
    fields: [
      {
        id: "system",
        label: "System",
        type: "textarea",
        placeholder: "System message",
        className: "h-20 resize-none",
      },
      {
        id: "prompt",
        label: "Prompt",
        type: "textarea",
        placeholder: "User prompt",
        className: "h-20 resize-none",
      },
    ],
  },
  customInput: {
    label: "Input",
    icon: faSignIn,
    inputs: [],
    outputs: [{ id: "value", label: "Value" }],
    fields: [
      {
        id: "inputName",
        label: "Field Name",
        type: "text",
        placeholder: "input_1",
        defaultValue: "",
      },
      {
        id: "inputType",
        label: "Type",
        type: "select",
        options: [
          { value: "Text", label: "Text" },
          { value: "File", label: "File" },
        ],
        defaultValue: "Text",
      },
    ],
  },
  customOutput: {
    label: "Output",
    icon: faSignOut,
    inputs: [{ id: "value", label: "Value" }],
    outputs: [],
    fields: [
      {
        id: "outputName",
        label: "Field Name",
        type: "text",
        placeholder: "output_1",
        defaultValue: "",
      },
      {
        id: "outputType",
        label: "Type",
        type: "select",
        options: [
          { value: "Text", label: "Text" },
          { value: "File", label: "Image" },
        ],
        defaultValue: "Text",
      },
    ],
  },
  text: {
    label: "Text",
    icon: faFileText,
    inputs: [],
    outputs: [{ id: "output", label: "Output" }],
    fields: [
      {
        id: "text",
        label: "Text",
        type: "textarea",
        placeholder: "{{variable}}",
        className: "relative",
        defaultValue: "{{input}}",
      },
    ],
  },
};
