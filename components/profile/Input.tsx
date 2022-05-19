import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

interface InputData {
    label: string;
    error?: Error;
    password: string;
    onFocus: () => {};
 //   props?: any;
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 5,
        fontSize:12,
        color: "#d3d3d3"	
    }
});

const Input = ({label, error, password, onFocus, ...props}:InputData) => {
    return (
    <View style={{marginBottom: 20}}>
        <Text style={styles.label}>{label}</Text>
        <View>
            <TextInput {...props}/>
        </View>
    </View>
    )
};  

export default Input;