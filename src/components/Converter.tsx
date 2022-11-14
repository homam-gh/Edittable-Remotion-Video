import React, { useState } from "react";

const Converter: React.FC<{
  text: string;
  onActivation: (play: boolean) => void;
}> = (props) => {
  const [showEditor, setShowEditor] = useState(false);
  const [textVal, setTextVal] = useState(props.text);

  const handleTextChange = () => {
    setShowEditor(false);
    props.onActivation(true);
  };

  return (
    <>
      {!showEditor ? (
        <div
          onDoubleClick={() => {
            props.onActivation(false);
            setShowEditor(true);
          }}
        >
          {textVal}
        </div>
      ) : (
        <>
          <input
            type="text"
            value={textVal}
            onChange={(e) => {
              setTextVal(e.target.value);
            }}
          />
          <button type="button" onClick={handleTextChange}>
            change
          </button>
        </>
      )}
    </>
  );
};

export default Converter;
