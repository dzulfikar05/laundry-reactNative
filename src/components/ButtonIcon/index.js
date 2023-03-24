import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconAddPoint, IconAddSaldo } from '../../assets';
import { SUB_COLOR } from '../../utils/constant';

const ButtonIcon = ({ title }) => {
    const Icon = () => {
        if (title === 'Add Saldo') return <IconAddSaldo />;
        if (title === 'Add Point') return <IconAddPoint />;
    };
    return (
        <TouchableOpacity>
            <View style={styles.icon}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonIcon;

const styles = StyleSheet.create({
    icon: {
        backgroundColor: SUB_COLOR,
        padding: 7,
        borderRadius: 10,
    },
    text:{
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        textAlign: 'center'
    }
});
