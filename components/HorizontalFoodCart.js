import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {COLORS, SIZES, FONTS, icons} from '../constants'

const HorizontalFoodCart = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle,
        }}
    >
        {/* Image */}
        <Image
            source={item.image}
            style={imageStyle}
        />


        {/* info */}
        <View style={{
            flex:1,
            }}
        >
            {/* name */}
            <Text style={{
                ...FONTS.h3, fontsize: 17
            }}>
                {item.name}
            </Text>

            {/* Description */}
            <Text style={{
                color: COLORS.darkGray2, ...FONTS.body4
                }}
            >
                {item.description}
            </Text>

            {/* Price */}
            <Text style={{marginTop:SIZES.base, ...FONTS.h2}}>
               ${item.price}
            </Text>

            {/* calories */}
            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                top: -20,
                right: SIZES.radius
            }}>
                <Image
                    source={icons.calories}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
                    {item.calories} Calories
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default HorizontalFoodCart