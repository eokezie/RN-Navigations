import 'react-native-raw-bottom-sheet';

declare module 'react-native-raw-bottom-sheet' {
  export interface RBSheetProps {
    closeOnDragDown?: boolean;
    closeOnPressBack?: boolean;
    closeOnPressMask?: boolean;
    customStyles?: {
      wrapper?: object;
      draggableIcon?: object;
      container?: object;
    };
  }
}
