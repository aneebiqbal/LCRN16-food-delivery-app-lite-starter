import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { constants, images, FONTS, SIZES, COLORS } from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
    }}>
        <KeyboardAwareScrollView
            keyboardDismissMode= 'on-drag'
            contentContainerStyle={{
                flex: 1,
                paddingHorizontal: SIZES.padding
            }}
        >
            
            {/* app icon */}
            <View style={{
                alignItems:'center'
            }}>
               <Image
                    source={images.logo_02}
                    resizeMode='contain'
                    style={{
                        height: 100,
                        width: 200,
                    }}
                />
            </View>

            {/* title and subtitle */}
            <View style={{
                marginTop: SIZES.padding,
                ...titleContainerStyle
            }}>
                <Text style={{
                    textAlign:'center',
                    ...FONTS.h2
                }}>
                    {title}
                </Text>

                <Text style={{
                    textAlign:'center',
                    color: COLORS.darkGray,
                    marginTop: SIZES.base
                }}>
                    {subtitle}
                </Text>
            </View>

            {/* children/ content */}
            {children}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout