import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native';
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { HorizontalFoodCart } from '../../components';
import VerticalFoodCard from '../../components/VerticalFoodCard';
import {FONTS, SIZES, COLORS, icon, dummyData, icons} from '../../constants'
import FilterModal from './FilterModal';

const Section =({title, onPress, children}) => {
    return (
        <View>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                marginTop: 30,
                marginBottom: 30
                }}
            >
                <Text style={{flex:1, ...FONTS.h3}}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{
                        color: COLORS.primary, ...FONTS.body3
                    }}>
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            {children}
        </View>
    )
}
    const Home = () => {
        const [selectedCategoryId, setSelectedcategoryId] = React.useState(1)
        const [selectedMenuType, setSelectedmenuType] = React.useState(1)
        const [menuList, setMenuList] = React.useState([])
        const [popular, setPopular] = React.useState([])
        const [recomends, setRecomends] = React.useState([])

        const [showFilterModal, setShowFilterModal] = React.useState(false)

        React.useEffect(() => {
            handleChangeCatogery(selectedCategoryId, selectedMenuType)
        }, [])

        //handler
        function handleChangeCatogery(categoryId, MenuTypeId) {
            //Reterve Popular Menu
            let selectedPopular = dummyData.menu.find(a => a.name ==
                'Popular')

            //Retrieve the recomend menu
            let selectedRecomend = dummyData.menu.find(a => a.name ==
                'Recommended')

            //find menu on base of MenuTypeId
            let selectedMenu = dummyData.menu.find(a => a.id === MenuTypeId)

            //set popular menu on the base of CatogeryId
            setPopular(selectedPopular?.list.filter(a => a.categories.includes
                (MenuTypeId)))

            //set the recomended menu based on catogeryId
            setRecomends(selectedRecomend?.list.filter(a => a.categories.includes(categoryId)))
            //set menu on base of categoryId
            setMenuList(selectedMenu?.list.filter(
                a=> a.categories.includes(categoryId))
            )
        }


        function renderSearch() {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height:40,
                        marginHorizontal: SIZES.padding,
                        marginVertical: SIZES.base,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* icon */}
                    <Image
                        source={icons.search}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor:COLORS.black
                        }}
                    />

                    {/* TextInput */}
                    <TextInput
                        style={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                            ...FONTS.body3
                        }}
                        placeholder={'search Food'}
                    />

                    {/* FilterButton */}
                    <TouchableOpacity 
                        onPress={() => setShowFilterModal(true)}
                    >
                        <Image
                            source={icons.filter}
                            style={{
                                height:20,
                                width:20,
                                tintColor:COLORS.black
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }
        function renderMenuTypes () {
            return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}` }
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom:30
                }}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                            marginLeft:SIZES.padding,
                            marginRight: index == dummyData.menu.length
                            - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedmenuType(item.id)
                            handleChangeCatogery(
                                selectedCategoryId, item.id
                            )
                        }}
                    >
                        <Text style={{
                            color: selectedMenuType == item.id
                            ? COLORS.primary
                                : COLORS.black,
                            ...FONTS.h3
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            /> 
            )
        }
        function renderRecomendedSection() {
            return (
                <Section
                    title= 'Recomended'
                    onPress={() => console.log('recomended')}
                >
                    <FlatList
                        data={recomends}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) =>(
                            <HorizontalFoodCart
                                containerStyle={{
                                    height:180,
                                    width: SIZES.width * 0.85,
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    marginRight: index == recomends.length - 1 ? SIZES.padding : 0,
                                    paddingRight: SIZES.radius,
                                    alignItems: 'center'
                                }}
                                imageStyle={{
                                    marginTop: 35,
                                    height: 150,
                                    width: 150,
                                }}
                                item={item}
                                onPress={() => console.log('HorizontalFoodCart')}
                            />
                        )}
                    />
                </Section>
            )
        }
        function renderPopularSection() {
            return (
                <Section
                    title= 'Popular near you'
                    onPress={() => console.log('popular')}
                >
                    <FlatList
                        data={popular}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <VerticalFoodCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    marginRight: index == popular.length - 1 ? SIZES.padding : 0
                                }}
                                item={item}
                                onPress={() => console.log('VerticalFoodCard')}

                            />
                        )}
                    />
                </Section>
            )
        }

        function renderFoodCatogeries() {
            return (
                <FlatList
                    data={dummyData.categories}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            style={{
                                flexDirection:'row',
                                height: 55,
                                marginTop: SIZES.padding,
                                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                                paddingHorizontal: 8,
                                backgroundColor: selectedCategoryId == item.id ? 
                                COLORS.primary : COLORS.lightGray2,
                                borderRadius: SIZES.radius,
                            }}
                            onPress={() => {
                                setSelectedcategoryId(item.id)
                                handleChangeCatogery(item.id,selectedMenuType)
                            }}
                        >
                            <Image
                                source={item.icon}
                                style={{
                                    height: 50,
                                    width: 50,
                                    marginTop: 5
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                            }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            )
        }

        function renderDeliveryTo() {
            return(
                <View style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}>
                    <Text style={{color: COLORS.primary, ...FONTS.body3}}>
                        Delivery To
                    </Text>

                    <TouchableOpacity style={{
                        flexDirection:'row',
                        marginTop: SIZES.base,
                        alignItems: 'center'
                    }}>
                        <Text style={{...FONTS.h3}}>
                            {dummyData.myProfile.address}
                        </Text>
                        <Image
                            source={icons.down_arrow} 
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: SIZES.base
                            }}   
                        />
                    </TouchableOpacity>
                </View>
            )
        }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* filter modal */}
            {showFilterModal &&
                <FilterModal
                isVisible = {showFilterModal}
                onClose = {() => setShowFilterModal(false)}
                />    
            }
            

            {/* LIST */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* DELIVERY TO */}
                        {renderDeliveryTo()}

                        {/* FoodCatogeries */}
                        {renderFoodCatogeries()}

                        {/* Popular */}
                        {renderPopularSection()}

                        {/* recomended */}
                        {renderRecomendedSection()}

                        {/* Menu Type */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({item, index}) => {
                    return (
                        <HorizontalFoodCart
                            containerStyle={{
                                height:130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop:10,
                                height:110,
                                width:110,
                            }}
                            item={item}
                            onPress={() => console.log('HorizontalFoodCard')}
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 200 }}/>
                }
                
            />
        </View>
    )
}

export default Home;