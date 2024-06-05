import {View, Text} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../constants';

type BSheetTypes = {
  bottomSheetRef: any;
  children?: any;
};

const BottomSheet = ({bottomSheetRef, children}: BSheetTypes) => {
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
      openDuration={250}
      closeDuration={250}
      draggable={true}
      dragOnContent
      closeOnPressBack={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        draggableIcon: {
          backgroundColor: COLORS.gray,
          width: 100,
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <View>{children}</View>
    </RBSheet>
  );
};

export default BottomSheet;
