import { Text, StyleSheet, ScrollView, Pressable} from 'react-native'
import React from 'react'
import Title from '../../Title'
import { AntDesign  } from "@expo/vector-icons";
import { SIZES } from "../constant/constants";
import { TERTIARY } from '../../../styles';
import { WikiStackScreenProps } from './WikiNavigation';



const WikiEntry = ({route, navigation}:WikiStackScreenProps<'WikiEntry'>) => {

  const Data = route.params

 
  if(Data){
    return (
      <>
        <Pressable style={styles.goBack} onPress={()=> {navigation.goBack()}}>
          <AntDesign name="left" size={30} color="black" />
          <Text style={{left: -5, fontSize:12}}>Zurück</Text>
        </Pressable> 
        <Title text={Data.title} color={TERTIARY} /> 
    
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{Data.title}</Text>
          <Text style={styles.textContainer}>{
            Data['contents'].map( (item, idx) => 
              item.type === 'url' 
              ? <Text key={idx} style={[styles.content,{textDecorationLine: 'underline'} ]}>{ item.content + ' ' }</Text> 
              : <Text key={idx} style={{fontSize: 18}}>{item.content + ' ' }</Text>)
            }
          </Text>
        </ScrollView>
      </>  
    )
  }else{
    return(null)
  }
} 


const styles = StyleSheet.create({
  textContainer: {
    textAlign: 'left', 
    lineHeight: 30
  },
  content: {
    fontSize: SIZES.font, 
    lineHeight: SIZES.default_line_height 
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30, 
    paddingVertical: 30, 
    paddingHorizontal: 10
  },
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    fontSize: SIZES.font
  },
  goBack: {
    position: 'absolute',
    flexDirection : 'row',
    alignItems: 'center',
    zIndex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
  
  }

})
export default WikiEntry

/**
 *    <View>
        <TouchableOpacity style={styles.goBack} onPress={()=> {navigation.goBack()}}>
          <AntDesign name="left" size={30} color="black" />
          <Text style={{left: -5, fontSize:12}}>Zurück</Text>
        </TouchableOpacity> 
        <Title 
          text={Data.title} 
          color={TERTIARY} 
        /> 
     
 * between ScrollView: 
        <ScrollView>
 * <Text style={styles.title}>{Data.title}</Text>
          <Text style={styles.textContainer}>{
            Data['contents'].map( (item, idx) => 
              item.type === 'url' 
              ? <Text key={idx} style={[styles.content,{textDecorationLine: 'underline'} ]}>{ item.content + ' ' }</Text> 
              : <Text key={idx} style={{fontSize: 18}}>{item.content + ' ' }</Text>)
          }
          </Text>
          </ScrollView>
          </View>
 */