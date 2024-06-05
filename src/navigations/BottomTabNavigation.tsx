import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {Home, Message, Orders, Profile, Search} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    backgroundColor: COLORS.white,
  },
};

const BottomTabNavigation = () => {
  return (
    // @ts-ignore
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTopColor: focused ? COLORS.primary : COLORS.white,
                  height: '100%',
                  borderTopWidth: 2.5,
                }}>
                <Image
                  source={focused ? icons.home : icons.homeOutline}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTopColor: focused ? COLORS.primary : COLORS.white,
                  height: '100%',
                  borderTopWidth: 2.5,
                }}>
                <Image
                  source={
                    focused ? icons.shoppingBag : icons.shoppingBagOutline
                  }
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                  height: Platform.OS === 'ios' ? 70 : 60,
                  width: Platform.OS === 'ios' ? 70 : 60,
                  top: Platform.OS === 'ios' ? -20 : -30,
                  borderRadius: Platform.OS === 'ios' ? 35 : 30,
                  borderWidth: 2,
                  borderColor: COLORS.white,
                }}>
                <Icon name="search" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTopColor: focused ? COLORS.primary : COLORS.white,
                  height: '100%',
                  borderTopWidth: 2.5,
                }}>
                <Image
                  source={focused ? icons.chat : icons.chatOutline}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTopColor: focused ? COLORS.primary : COLORS.white,
                  height: '100%',
                  borderTopWidth: 2.5,
                }}>
                <Image
                  source={focused ? icons.user : icons.userOutline}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
