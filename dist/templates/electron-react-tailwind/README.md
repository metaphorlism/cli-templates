# Electron React TailwindCSS boilderplate

## Electron

Electron code will be stored in `electron` folder.
In the folder, you will see the `events` folder. In that folder will store all the ipcEvent to communicate between Browser and Electron. There are 2 folder called `one_way` and `two_way` folders.

- one_way
  > This folder store all the events from browser only one way not return anythings back.
  > You can checkout the interface of object from this file [OneWayProps](electron/utils/ipcMainEvent.ts) called `RendererToMainOneWayRegistration`.
- two_way
  > This folder store all the events that can be return from electron to browser.
  > You can checkout the interface of object from this file [TwoWayProps](electron/utils/ipcMainEvent.ts) called `RendererToMainTwoWayRegistration`.

## React

All the react code will be stored in `src` folder.
