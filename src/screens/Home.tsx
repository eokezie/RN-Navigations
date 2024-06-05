import React from 'react';

import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheetRef from 'react-native-raw-bottom-sheet';

import {COLORS} from '../constants';
import Header from '../components/Header';
import BottomSheet from '../components/BottomSheet';

const Home = () => {
  const refRBSheet = React.useRef(null);

  const handlePress = () => {
    if (refRBSheet.current) {
      // @ts-ignore
      refRBSheet.current.open();
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <Header title="Home" onPress={handlePress} />
      </View>
      <BottomSheet bottomSheetRef={refRBSheet}></BottomSheet>
    </SafeAreaView>
  );
};

export default Home;
