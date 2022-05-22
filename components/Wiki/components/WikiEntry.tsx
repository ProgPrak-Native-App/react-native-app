import { Text, TouchableOpacity, View , StyleSheet, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../Title'
import { FontAwesome5, AntDesign  } from "@expo/vector-icons";
import { Accordion} from '..';
import { SIZES, wikiEntry } from '../constant/constants';
import { RootStackScreenProps } from '../constant/constants';
import { TERTIARY } from '../../../colors';


const WikiEntry = ({route, navigation}:RootStackScreenProps<'WikiEntry'>) => {
  const [Data, setData] = useState<wikiEntry>()
  useEffect(() => {
    setData(route.params)
  }, [])
  /* ----------------- try accordion as well plz ?  -----------------
  *  <Accordion title = {Data.title} descr={Data.contents} />
  */

  if(Data){
    return (
      <View>
        <TouchableOpacity style={styles.goBack} onPress={()=> {navigation.goBack()}}>
          <AntDesign name="left" size={30} color="black" />
          <Text style={{left: -5, fontSize:12}}>Zurück</Text>
        </TouchableOpacity> 
        <Title 
          text={Data.title} 
          color={TERTIARY} 
        /> 
     
      <ScrollView style={styles.container}>
      
        <Text style={styles.title}>{Data.title}</Text>
        <Text style={{lineHeight: 30}}>{
              Data['contents'].map( (item, idx) => 
                item.type.match('url') 
                ? <Text key={idx} style={[styles.content,{textDecorationLine: 'underline'} ]}>{ item.content + ' ' }</Text> 
                : <Text key={idx} style={{fontSize: 18}}>{item.content + ' ' }</Text>)
        }</Text>
      </ScrollView>
       
    </View>
     
      )
  }else{
    return(null)
  }
} 


const styles = StyleSheet.create({
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

function render(arg0: JSX.Element) {
  throw new Error('Function not implemented.');
}
