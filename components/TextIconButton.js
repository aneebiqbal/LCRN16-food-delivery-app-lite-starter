import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {COLORS, FONTS} from '../constants'

const TextIconButton = ({containerStyle, label, labelStyle, icon, iconStyle, onPress}) => {
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
        <Text style={{
            ...labelStyle,
            ...FONTS.body3
        }}>
        {label}
        </Text>

        <Image
            source={icon}
            style={{
                marginLeft: 5,
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                ...iconStyle,
            }}
        />
    </TouchableOpacity>
  )
}

export default TextIconButton