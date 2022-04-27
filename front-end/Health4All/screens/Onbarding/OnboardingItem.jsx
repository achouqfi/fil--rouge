import React, {useEffect,useState ,useRef} from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions 
} from 'react-native';

const Onboardingitem = ({item}) => {
    var width = Dimensions.get('window').width;
    return (
        <View style={[styles.container, {width}]} > 
            <Image
                source={item.bannerImage}
                style={[styles.image, {width}]}
             />
            <View style={styles.OnboardingitemText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image:{
        flex:0.6,
        justifyContent:'center',
        // width:450
    },
    OnboardingitemText:{
        flex:0.39,
        marginTop:40
    },
    title:{
        fontWeight:'bold',
        fontSize:28,
        marginBottom:10,
        color:'black',
        paddingHorizontal:20
    },
    description:{
        fontWeight:'400',
        fontSize:14,
        color:'#ADA4A5',
        paddingHorizontal:20
    }
  
});

export default Onboardingitem;
