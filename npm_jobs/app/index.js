
import {View,Text} from 'react-native';
import {useState } from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


const Home = () =>
{
     const router = useRouter();

    return (

    // <View>

    // <Text>
    //     Hello world, Sample ; dsdaright! dsdasd
    // </Text>
    // </View> 

 <SafeAreaView style= {{ flex:1, backgroundColor : COLORS.lightWhite}}>
    <Stack.Screen 
    options ={{
            headerStyle : { backgroundColor : COLORS.lightWhite },
            headerShadowVisible:false,
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension ="60%" />
            ),
            // headerRight: () => (
            //     <ScreenHeaderBtn iconUrl={images.profile} dimension ="100%" />
            // ),
            headerTitle : "Header Title - Title"
    }}
 />

<ScrollView showsVerticalScrollIndicator = {false}>
    <View 
        style= {{
            flex:1,
            paddinfg:SIZES.medium
        }}
    > 
    <Welcome

    />

    <Popularjobs/>
    <Nearbyjobs/>
    </View>
</ScrollView>

</SafeAreaView> 
 )
}
export default Home;
