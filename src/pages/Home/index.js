import { StyleSheet, Text, View, ImageBackground, Dimensions, Image} from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { Saldo } from '../../components'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>name</Text>
        </View>
      </ImageBackground>
      <Saldo/>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page:{
    flex: 1
  },
  header:{
    width: windowWidth,
    height: windowHeight*0.25,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo:{
    width: windowWidth*0.25,
    height: windowHeight*0.05,
  },
  hello:{
    paddingTop: 22
  },
  selamat:{
    fontSize:20,
    fontFamily: 'Poppins-Regular',
    color: '#000000'
  }, 
  username:{
    fontSize:20,
    fontFamily: 'Poppins-Bold',
    color: '#000000'
  }
})