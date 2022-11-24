import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons } from '../constants'

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity style={{
        width: 200,
        padding: SIZES.radius,
        alignItems : 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
    }}>
        {/* calories and favourite*/}
        <View style={{flexDirection: 'row'}}>
            {/* Calories */}
            <View style={{flex:1, flexDirection:'row'}}>
                <Image
                 source={icons.calories}
                 style={{
                    width:30,
                    height:30
                 }}
                />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body5}}>
                    {item.calories} Calories
                </Text>
            </View>

            {/* favourite */}
            <Image 
                source={icons.love}
                style={{
                    width:20,
                    height:20,
                    tintColor: item.isFavourite ? COLORS.
                    primary : COLORS.gray
                }}
            />
        </View>

        {/* image */}
        <View style={{
            height:150,
            width:150,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <Image 
                source={item.image}
                style={{
                    height:'100%',
                    width: '100%'
                }}
            />
        </View>

        {/* info */}
        <View style={{
            alignItems:'center',
            marginTop: -20
        }}>
            <Text style={{...FONTS.h3}}>{item.name}</Text>
            <Text style={{...FONTS.body5, color:COLORS.darkGray2, textAlign:'center'}}>
                {item.description}
            </Text>
            <Text style={{marginTop:SIZES.radius, ...FONTS.h2}}>
                ${item.price}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default VerticalFoodCard