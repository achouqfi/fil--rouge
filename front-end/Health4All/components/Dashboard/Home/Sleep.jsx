import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    Image
} from 'react-native';
import HeaderStat from './HeaderStat'


const Sleep = () => {
    return (
        <View style={styles.container}>
            <View>
                <HeaderStat title1={'Sleep'} titleDesc={"8h 20m"} />
                <Image
                    source={require('../../../assets/icons/Sleep-Graph.jpg')}
                />
                
            </View>
        </View>
    );
}

export default Sleep;


const styles = StyleSheet.create({
    container: {
      padding:15,
      flexDirection:'row',
    },
    targerWater:{
      height:280,
      width:20,
      borderRadius:20
    }
  });
  