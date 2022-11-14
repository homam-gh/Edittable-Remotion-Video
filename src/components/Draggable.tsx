import { CSSProperties, ReactElement, useState } from "react";
import { Paper } from "@mui/material";
import OpenWithIcon from "@mui/icons-material/OpenWith";

interface Props {
  children?: ReactElement;
  additionalControls?: ReactElement;
  startingPosition?: {
    x: number;
    y: number;
  };
  onStartDrag?: () => void;
}

function Draggable({
  children,
  startingPosition,
  additionalControls,
  onStartDrag,
}: Props) {
  const { innerHeight, innerWidth } = window;
  const _startingPosition = startingPosition ?? {
    x: 100,
    y: 300,
  };

  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: _startingPosition,
    lastTranslation: _startingPosition,
  });

  const { isDragging } = dragInfo;
  const handleMouseDown = ({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) => {
    if (!isDragging) {
      if (onStartDrag) onStartDrag();

      setDragInfo({
        ...dragInfo,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      });
    }
  };

  const handleMouseMove = ({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) => {
    if (isDragging) {
      const { origin, lastTranslation } = dragInfo;
      setDragInfo({
        ...dragInfo,
        translation: {
          x: Math.abs(clientX - (origin.x + lastTranslation.x)),
          y: Math.abs(clientY - (origin.y + lastTranslation.y)),
        },
      });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const { translation } = dragInfo;
      setDragInfo({
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      });
    }
  };

  const draggablePosition: CSSProperties = {
    position: "absolute",
    right: `${dragInfo.translation.x}px`,
    bottom: `${dragInfo.translation.y}px`,
  };

  return (
    <Paper
      elevation={0}
      className="draggable"
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          "& .controls-container": {
            opacity: 1,
          },
        },
        ...draggablePosition,
      }}
    >
      <Paper
        className="controls-container"
        elevation={0}
        sx={{ opacity: 0, marginRight: 2, transition: "opacity 250ms" }}
      >
        {/* any additional controls that can be passed as secondary childs(props) */}
        {additionalControls}
        {/* dragg Icon */}
        <OpenWithIcon
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          className="drag-handle"
          sx={{
            "&:hover": {
              cursor: "grab",
            },
            "&:active": {
              cursor: "grabbing",
            },
          }}
        />
      </Paper>

      {children}
    </Paper>
  );
}

export default Draggable;
