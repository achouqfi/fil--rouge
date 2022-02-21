import React, {useEffect,useState ,useRef} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import Onboardingitem from './OnboardingItem'
import NextBtn from './NextBtn'
import { 
    theme,
    images,
    dummyData,
    // screensData
} from '../../constants'
import screensData from '../../constants/screensData'

// const {COLORS, FONTS, SIZES} = theme;
const { onboarding_screens } = screensData;

const Onboarding = ({navigation}) => {
    
    const [currentIndex, setCurrentIndex]  = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)
    
    const viewableItemChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const scrollTo = ()=>{
        if(currentIndex < onboarding_screens.length - 1){
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        }else{
            navigation.push('CreateAccount');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={onboarding_screens} 
                renderItem={({item})=> <Onboardingitem item={item} />}
                horizontal
                showsHorizontalScrollIndicator ={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item)=> item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                    useNativeDriver: false
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <NextBtn scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / onboarding_screens.length)} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
});
  

export default Onboarding;
