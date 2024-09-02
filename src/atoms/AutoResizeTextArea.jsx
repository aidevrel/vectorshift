import React, { useRef, useEffect } from 'react';

export const AutoResizeTextarea = ({ value, onChange, className, ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      className={`w-full px-2 py-1 text-sm border rounded bg-white ${className}`}
      onChange={onChange}
      style={{
        overflow: 'hidden',
        resize: "none"
      }}
      {...props}
    />
  );
};
