import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {MainLayout} from '../screens'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants'
import Animated  from 'react-native-reanimated'
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabAction'

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label,icon,isFocused, onPress}) =>{
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                height:40,
                marginBottom:SIZES.base,
                alignItems:'center',
                paddingLeft:SIZES.radius,
                borderRadius:SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null
            }}
            onPress={onPress}
        >
            <Image 
                source={icon}
                style={{
                    width:20,
                    height:20,
                    tintColor:COLORS.white
                }}
            />

            <Text
                style={{
                    marginLeft:15,
                    color:COLORS.white,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) =>{
    return(
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex:1}}
        >
            <View style={{
                flex:1,
                paddingHorizontal: SIZES.radius
            }}>
                {/* Close Button */}
                <View style={{
                    alignItems:'flex-start',
                    justifyContent:'center'
                }}>
                    <TouchableOpacity 
                        style={{
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={icons.cross}
                            style={{
                                height:35,
                                width:35,
                                tintColor:COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection:'row',
                        marginTop:SIZES.radius,
                        alignItems:'center'
                    }}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width:50,
                            height:50,
                            borderRadius:SIZES.radius
                        }}
                    />
                    <View style={{
                        marginLeft:SIZES.radius
                    }}>
                        <Text
                            style={{
                                color:COLORS.white,...FONTS.h3
                            }}
                        >
                            {dummyData.myProfile?.name}
                        </Text>
                        <Text style={{
                            color:COLORS.white,...FONTS.body4
                        }}>
                            View your Profile
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View style={{
                    flex:1,
                    marginTop:SIZES.padding
                }}>
                    <CustomDrawerItem 
                        label= {constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() =>{
                            setSelectedTab(constants.screens.home)
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.my_walltet}
                        icon={icons.wallet}
                        isFocused={selectedTab == constants.screens.my_walltet}
                        onPress={() =>{
                            setSelectedTab(constants.screens.my_walltet)
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={() =>{
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        onPress={() =>{
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate('MianLayout')
                        }}
                    />

                    {/* line Divider */}

                    <View 
                        style={{
                            height:1,
                            marginVertical:SIZES.radius,
                            marginLeft:SIZES.radius,
                            backgroundColor:COLORS.lightGray1
                        }}
                    />
                    <CustomDrawerItem 
                        label= 'Track Your Order'
                        icon={icons.location}
                        isFocused={selectedTab == 'Track Your Order'}
                        onPress={() =>{
                            setSelectedTab('Track Your Order')
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= 'Coupons'
                        icon={icons.coupon}
                        isFocused={selectedTab == 'Coupons'}
                        onPress={() =>{
                            setSelectedTab('Coupons')
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= 'Settings'
                        icon={icons.setting}
                        isFocused={selectedTab == 'Settings'}
                        onPress={() =>{
                            setSelectedTab('Settings')
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= 'Invite a Friend'
                        icon={icons.profile}
                        isFocused={selectedTab == 'Invite a Friend'}
                        onPress={() =>{
                            setSelectedTab('Invite a Friend')
                            navigation.navigate('MianLayout')
                        }}
                    />
                    <CustomDrawerItem 
                        label= 'Help Center'
                        icon={icons.help}
                        isFocused={selectedTab == 'Help Center'}
                        onPress={() =>{
                            setSelectedTab('Help Center')
                            navigation.navigate('MianLayout')
                        }}
                    />
                </View>
                <View style={{
                    marginBottom: SIZES.padding
                }}>
                    <CustomDrawerItem 
                        label= 'Log Out'
                        icon={icons.logout}
                        isFocused={selectedTab == 'Log Out'}
                        onPress={() =>{
                            navigation.navigate('SignIn')
                            setSelectedTab('Help Center')
                            navigation.navigate('MianLayout')
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = ({ selectedTab, setSelectedTab}) => {

    const [progress, setProgress] = React.useState
    (new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1,0.8]
    })

    const borderRadius = Animated.interpolateNode(progress,{
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{scale}]}
  return (
    <View
    style={{
        flex:1,
        backgroundColor: COLORS.primary
    }}
    >
        <Drawer.Navigator
            drawerType='slide'
            overlayColor='trasnparent'
            drawerStyle={{
                flex: 1,
                width: '65%',
                paddingRight: 20,
                backgroundColor: 'trasnparent'
            }}
            sceneContainerStyle={{
                backgroundColor: 'trasnparent'
            }}
            initialRouteName= 'MianLayout'

            drawerContent={({navigation, progress}) => { 
                setTimeout(() => {
                    setProgress(progress)
                }, 0)
            return (
                <CustomDrawerContent 
                    navigation={navigation}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            )}
            } 
        >
            <Drawer.Screen name='MianLayout'>
                {props => <MainLayout {...props} 
                        drawerAnimationStyle={animatedStyle}
                        />
                }
            </Drawer.Screen>
        </Drawer.Navigator>
    </View>
  )
}


function mapStateToProp(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {return dispatch
        (setSelectedTab(selectedTab)) }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)
(CustomDrawer)