import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { EntryProps, wikiEntry } from "../constant/constants";
import { useNavigation } from "@react-navigation/native";

const EntryTitle = ({letter, entry}: EntryProps) => {
    type Nav = {
        navigate: (value: string, item:wikiEntry) => void;
    }
    const {navigate} = useNavigation<Nav>();
    
    return(
        <View>
            <Text style={styles.capital}>{letter}</Text>
             {entry.map( (item, i) => (
                <TouchableOpacity 
                    style={styles.container} 
                    onPress={()=> {navigate('WikiEntry', item)}} 
                    key={i}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>))}
           
        </View>
        )
    }


const styles = StyleSheet.create({
    capital: {
        fontWeight: 'bold',
        fontSize: 25, 
        paddingHorizontal: 5
    },
    text: {
        fontSize: 18,
        paddingVertical: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 25
    },
})

export default EntryTitle