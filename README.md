# Editable/movable text in a remotion video

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intall and Run Project:

### `npm install`

### `npm start`

will do the trick

## How to use:

there is an editable text in the video, that can be editted by clicking on it or dragged around with a handle that woould be visible when hovering on the text, onEdit or onDrag, the player pauses and after finishing the edit user can play the video.
there is an inline tinyMCE WYSIWIG editor that can be changed to a modal format

## Things to refactor:

- wrapping Editor, dragg/draop and video player components to increase maintainability
- adding dynamic starting position for edittable text (currently it's 100/300)
- adding tests
- using context for controls
- may be adding some styling

## Warning:
tinyMCE is licenced for local host but not for use in codesanbox so it shows a warning on code sandbox
