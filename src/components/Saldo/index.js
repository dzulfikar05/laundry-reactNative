import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo :</Text>
                    <Text style={styles.valueSaldo}>Rp. 999.999</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelPoint}>Antar Point :</Text>
                    <Text style={styles.valuePoint}>100 Points</Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                <ButtonIcon title="Add Saldo"/>
                <Gap width={10}/>
                <ButtonIcon title="Add Point"/>
            </View>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: -windowHeight * 0.04,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    informasiSaldo:{
        width: '60%'
    },
    labelSaldo:{
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: '#000'
    },
    valueSaldo:{
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#000'
    },
    labelPoint:{
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#000'
    },
    valuePoint:{
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: PRIMARY_COLOR
    },
    buttonAksi:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-end'
    }
})