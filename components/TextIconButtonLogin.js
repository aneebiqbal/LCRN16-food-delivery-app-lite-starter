import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {COLORS, FONTS} from '../constants'

const TextIconButtonLogin = ({containerStyle, label, labelStyle, icon, iconStyle, onPress, iconPosition}) => {
  return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
        onPress={onPress}
    >
        { iconPosition == 'LEFT' &&
             <Image
             source={icon}
             style={{
                ...styles.image,
                 ...iconStyle,
             }}
         />
        }

        <Text style={{
            ...labelStyle,
            ...FONTS.body3
        }}>
        {label}
        </Text>

        { iconPosition == 'RIGHT' &&
             <Image
             source={icon}
             style={{
                ...styles.image,
                 ...iconStyle,
             }}
         />
        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black,
    }
})

export default TextIconButtonLogin