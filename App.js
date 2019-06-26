/*
* @author: Umar yabo Umar
* @email: yabdonz69@gmail.com, maker.jr6@gmail.com
* Date: 26, June 2019
* This app was created as a solution to the test given to me (@author) 
* by Woodlig Technology Hub Abuja which I received on 25 June 2019, and I was given 48hrs to complete.
*
* Finished around 2:30 pm on 26 June 2019. Machine setup, 
* dusting off my react knowledge and other important activities inclusive :)
*
* Expo was used to scaffold the app as required by the test intructions
*/


import * as React from "react"
import { View, Image, Dimensions, Animated, StatusBar, StyleSheet } from 'react-native'
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation"

// Get pages for use as tab screens
import FormPage from "./pages/FormPage"
import GridPage from "./pages/GridPage"

// Set important constants for use later
const SCREEN_WIDTH = Dimensions.get('window').width
const HEADER_HEIGHT_EXPANDED = Dimensions.get('window').height * .7
const HEADR_HEIGHT_COLLAPSED = 50 // This was specifically requested on the instruction i.e collapsing height of 50
const INPUT_MAX = HEADER_HEIGHT_EXPANDED - HEADR_HEIGHT_COLLAPSED; // Expanded and Collapsed height diff




class ProfileSection extends React.Component {

  constructor(props) {
    super(props)
    // Set the vertical scroll animated obj on the state, will need it for interpolation later.
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  // Magic wand all ready ;)
  render() {
    
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT_EXPANDED - HEADR_HEIGHT_COLLAPSED],
      outputRange: [HEADER_HEIGHT_EXPANDED, HEADR_HEIGHT_COLLAPSED],
      extrapolate: 'clamp',
      useNativeDriver: true
    })
    const headerBackgroundColor = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: ["#FFFFFF55", "#FFFFFF"]
    })
    const profileImageLeftposition = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [(SCREEN_WIDTH / 2) - 75, 10],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileImageTopPosition = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [(HEADER_HEIGHT_EXPANDED / 2) - 75, 10],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileImageWidth = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [150, 60 - 20],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [150, 60 - 20],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileImageBorderWidth = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [4, 2],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileInfoTopPosition = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [(HEADER_HEIGHT_EXPANDED / 2) - 50, -20],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileInfoLeftposition = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [(SCREEN_WIDTH / 2) - 125, 60],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const profileInfoColor = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: ["white", "black"]
    });
    const profileInfoFontSize = this.state.scrollY.interpolate({
      inputRange: [0, INPUT_MAX],
      outputRange: [20, 16]
    });

    const styles = StyleSheet.create({
      infoContainer: {
        transform: [
          { translateY: profileInfoTopPosition },
          { translateX: profileInfoLeftposition }
        ],
      }
    })

    const tabsNavigator = value => createMaterialTopTabNavigator(
      {
        Forms: { screen: props => <FormPage {...props} {...value} /> },
        Grid: { screen: props => <GridPage {...props} {...value} /> },
      },
      {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: 'teal',
          inactiveTintColor: '#aaaaaa',
          style: {
            backgroundColor: '#FFFFFF',
            top: headerHeight
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: 'teal',
            borderBottomWidth: 2,
          },
        },
      }
    );
    const Tabs = tabsNavigator(/* Our onScroll function to be triggered by child components */
      {
        onScroll: Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: this.state.scrollY
              }
            }
          }]
        ),
        heightOffset: HEADER_HEIGHT_EXPANDED
      }
    );
    const AppContainer = createAppContainer(Tabs);



    return (
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, }}>
        <Animated.View style={{
          height: headerHeight, backgroundColor: "white",
          position: 'absolute', zIndex: 100, top: StatusBar.currentHeight, left: 0, width: SCREEN_WIDTH
        }}>
          <Image
            source={require('./assets/images/lion_cubs.jpg')} style={{ flex: 1 }} />
          <Animated.View style={{
            position: "absolute", zIndex: 1000, top: 0, left: 0, width: SCREEN_WIDTH,
            height: headerHeight, backgroundColor: headerBackgroundColor
          }}>
            <Animated.Image
              style={
                [{
                  borderWidth: profileImageBorderWidth,
                  borderColor: 'white',
                  borderRadius: 150,
                  height: profileImageHeight,
                  width: profileImageWidth,
                  transform: [
                    { translateY: profileImageTopPosition },
                    { translateX: profileImageLeftposition }
                  ]
                }]}
              source={require('./assets/images/lion_cubs.jpg')}
            />
            <Animated.View style={styles.infoContainer}>
            <Animated.Text style={{fontSize: profileInfoFontSize, color: profileInfoColor, fontWeight: "bold"}}>Umar Yabo Umar (maker.jr)</Animated.Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <AppContainer>
          <Tabs />
        </AppContainer>
      </View>
    )
  }
}



export default ProfileSection