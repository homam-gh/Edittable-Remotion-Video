import { Paper } from "@mui/material";
import Draggable from "./Draggable";
import WYSIWYG from "./WYSIWIG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface Props {
  pauseVid: () => void;
  playVid: () => void;
  children: string;
}

function EditableText({ playVid, pauseVid, children }: Props) {
  return (
    <Draggable
      onStartDrag={pauseVid}
      additionalControls={<PlayArrowIcon onClick={playVid} />}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "transparent",
        }}
        onFocus={pauseVid}
      >
        <WYSIWYG initialValue={children} />
      </Paper>
    </Draggable>
  );
}

export default EditableText;
