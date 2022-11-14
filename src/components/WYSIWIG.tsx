/* tslint:disable */
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";

function WYSIWYG({
  initialValue,
  onChange,
}: {
  initialValue: string;
  onChange?: (content: string) => void;
}) {
  const [value, setValue] = useState(initialValue ?? "");

  useEffect(() => setValue(initialValue ?? ""), [initialValue]);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <>
      <Editor
        initialValue={initialValue}
        value={value}
        onEditorChange={(newValue, editor) => setValue(newValue)}
        apiKey="kpssd6at7q2kbxtv9azqg97r63pzho9nzdb3bx5t4ntch44e"
        // tinyMCE toolbar settings
        inline
        toolbar={`undo redo | bold italic underline | fontsize | forecolor backcolor`}
      />
    </>
  );
}

export default WYSIWYG;
