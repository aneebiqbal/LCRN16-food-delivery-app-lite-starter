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

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label,icon}) =>{
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                height:40,
                marginBottom:SIZES.base,
                alignItems:'center',
                paddingLeft:SIZES.radius,
                borderRadius:SIZES.base
                //backgroundColor
            }}
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

const CustomDrawerContent = ({navigation}) =>{
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
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.my_walltet}
                        icon={icons.wallet}
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.notification}
                        icon={icons.notification}
                    />
                    <CustomDrawerItem 
                        label= {constants.screens.favourite}
                        icon={icons.favourite}
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
                    />
                    <CustomDrawerItem 
                        label= 'Coupons'
                        icon={icons.coupon}
                    />
                    <CustomDrawerItem 
                        label= 'Settings'
                        icon={icons.setting}
                    />
                    <CustomDrawerItem 
                        label= 'Invite a Friend'
                        icon={icons.profile}
                    />
                    <CustomDrawerItem 
                        label= 'Help Center'
                        icon={icons.help}
                    />
                </View>
                <View style={{
                    marginBottom: SIZES.padding
                }}>
                    <CustomDrawerItem 
                        label= 'Log Out'
                        icon={icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {

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
                <CustomDrawerContent navigation={navigation} />
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

export default CustomDrawer
