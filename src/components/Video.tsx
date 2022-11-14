import { CSSProperties } from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import EditableText from "./EditableText";

interface Props {
  pauseVid: () => void;
  playVid: () => void;
}

const Video = ({ pauseVid, playVid }: Props) => {
  // hook from remotion to make animation more readable
  const frame = useCurrentFrame();

  // hook from remotion to for some usefull video config to be able to use in creating animation
  const { fps, durationInFrames } = useVideoConfig();

  // animating variables usign remotion interpolate function to make animations more readable
  const opacity = interpolate(
    frame,
    [0, durationInFrames / 3, (2 * durationInFrames) / 3, durationInFrames - 1],
    [0, 1, 1, 0]
  );
  const translate = interpolate(frame, [0, durationInFrames / 3], [-100, 0], {
    extrapolateRight: "clamp",
  });

  // styles for main text container
  const fillStyle: CSSProperties = {
    position: "relative", // this line is needed to maintain the dragdrop capability
    fontSize: 36,
    fontWeight: 800,
    backgroundColor: "transparent",
    color: "#000",
  };

  return (
    // main text placeholder for animation
    <AbsoluteFill
      style={{
        ...fillStyle,
        opacity,
        transform: `translateX(${translate}%)`,
      }}
    >
      The current frame is {frame}.
      <br />
      video is {Math.round(durationInFrames / fps)} seconds long.
      <br />
      {/* the component that makes text editable and movable*/}
      <EditableText {...{ playVid, pauseVid }}>Editable Text</EditableText>
    </AbsoluteFill>
  );
};

export default Video;
