import React, { useState }  from "react";
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import { FontAwesome5  } from "@expo/vector-icons";


const Accordion = ({title, descr} : {title: string, descr: any}) => {
    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setCollapsed(!collapsed)
    }
    return(
        <View style={{borderBottomWidth: 2, borderBottomColor: 'red'}}>
            <TouchableOpacity style={styles.container} onPress={toggle}>
            <Text style={{textTransform: 'capitalize'}}>{title}</Text>
                <FontAwesome5 size={24} name={collapsed ? "caret-down" : "caret-up"}/>
            </TouchableOpacity>
            <View >
                { !collapsed && (<Text style={styles.container}>
                    {descr.map( (item:any, index:number) => 
                    item.type.match('url') 
                    ? <Text key={index} style={{textDecorationLine: 'underline'}}>{ item.content + ' ' }</Text> 
                    : <Text key={index} >{item.content}</Text>)}</Text>)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})

export default Accordion