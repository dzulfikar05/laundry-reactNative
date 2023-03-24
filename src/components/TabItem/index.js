import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive } from '../../assets';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/constant';

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/> 
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/> 
        if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan/> 

        return <IconHome/>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon/>
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text:(isFocused) => ({
        fontSize: 12,
        color: isFocused ? PRIMARY_COLOR : SECONDARY_COLOR,
        marginTop: 8
    })
});
