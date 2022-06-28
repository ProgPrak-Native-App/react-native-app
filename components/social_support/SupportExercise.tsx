import { View, Text , StyleSheet, Animated, Pressable, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import Title from '../Title'
import PopUp from './AddPopUp'
import TextHeader from './TextHeader'
import { socialSupportData } from './data'
import { FontAwesome5} from "@expo/vector-icons";
import { ORANGE, PRIMARY, PURPLE } from '../../styles'
import Circle, { personProp } from './Circle'
import UpdatePopUp from './UpdatePopUp'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { SocialSupportStackParamList, SocialSupportStackScreenProps } from './SocialNavigation'
import OnBoardingModal from './OnBoardingModal'
import IntroThirdLevel from './IntroThirdLevel'

import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

const helper = "Klicke einfach auf das plus-Symbol, um Personen dem jeweiligen Kreis hinzuzufügen."
// outer 300 300 middle 280 160 inner 240 120
const SocialStart = ({route}: SocialSupportStackScreenProps<'SupportExercise'>) => {
    const level = route.params.level
    if (level === 3) {
        return(
            <IntroThirdLevel />
        )
    }
    const {navigate} = useNavigation<NavigationProp<SocialSupportStackParamList>>();
    const [addVisible, setAddVisible] = useState(false)
    const [updateVisible, setUpdateVisible] = useState(false)
    const [onBoardingVisible, setOnBoardingVisible] = useState(true)

    const [data, setData] = useState(socialSupportData)
    //....
    const [people, setPeople] = useState(data[0].people)

    const [transferPerson, setTransferPerson] = useState<personProp[]>([])
    const [currScreen, setCurrScreen] = useState({
                id: 0,
                title: "", 
                subtitle:"",
    })

    /** value states for animation of view size */
    const [innerSize, setInnerSize] = useState(new Animated.Value(260))
    const [middleSize, setMiddleSize] = useState(new Animated.Value(280) )

    /** toggles the onboarding screens & popups */
    const toggleOnBoard = () => {
        setOnBoardingVisible(prev => !prev)
    }
    const toggleAdd = () => {
        setAddVisible(prevState => !prevState)
    }
    const toggle = () => {
        setUpdateVisible(prevState => !prevState)
    } 
    
    /** fill in the blank inputs from update with clicked upon elems data */
    const fillUpdate = (id: string) => {
        const tmp =  people.filter( person => person.id === id )
        setTransferPerson(tmp)
        toggle()
    }

    useEffect(() => {  
        data.sort((a, b) => {return a.id - b.id})
        setting(2)
    }, [])
    
    /** i hope i can delete this soon...
     * currently sets currscreen data to be displayed & 
     * sets currentn people array to corresp. screen
     */
    const setting = (id: number) => {
        data.map(item => item.id == id ? 
            setCurrScreen( () =>  {
                return {
                id: item.id,
                title: item.title,
                subtitle: item.subtitle 
            }}) : null  
        )
        setPeople(data[id].people)
    }

    /** deletes a person */
    const deletePerson = (props: personProp) => {
        setPeople(prevPeople => 
            prevPeople.filter( elem => elem.name !== props.name && elem.id !== props.id ))
        toggle()
    }
    
    /** updates a persons props */
    const updatePerson = (props: personProp) => {
        setPeople(prevPeople => {
            return prevPeople.map(people => {
                return people.id === props.id ? {
                    ...people,
                    name: people.name !== props.name ? props.name : people.name,
                    resource: people.resource !== props.resource ? props.resource : people.resource,
                } : people 
            })
        })        
        toggle()
    }

    /** adds a new person & gives id, first "" case hopefully will be reworked as I get proper API data
     * ++ TODO: unique id generator needed
     */
    const addPerson = (val: {name: string, resource:string}) => {
        if(people[0].name === ""){
            setPeople([
                {
                    name: val.name, 
                    resource: val.resource,
                    id: nanoid()
                }
            ])
         
        }else{
            setPeople(prevPeople => 
                [...prevPeople,
                    {
                        name: val.name, 
                        resource: val.resource,
                        id: nanoid()
                    }
                ]
            )
        }
        toggleAdd()
    }
    /** navigation between circles  */
    const goAhead = (id: number) => {
        setData(prevData => prevData.map( item => item.id === id ? {...item, people: people}: item)) 

        if(id === 0){
            navigate("Feedback", {level:level})
        }else if (id == 1){
            setting(--id)
            changeSize(middleSize, 90)
        }else{
            setting(--id)
            changeSize(innerSize, 70)
        }
    }

    const goBack = (id :number) => {
        setData(prevData => prevData.map( item => item.id === id ? {...item, people: people}: item)) 

        if(id === 0){
            setting(++id)
            changeSize(middleSize, 280)
        }else if (id == 1){
            setting(++id)
            changeSize(innerSize, 260)
        }else{
            navigate("IntroVideoScreen")
        }
    }

    /** animating the navigation  */
    const changeSize = (val: Animated.Value, size:number) => {
        Animated.timing(val,{
            toValue: size, 
            duration: 1000,
            useNativeDriver: false
        } ).start();
    }

    return (
        <>
        { onBoardingVisible && <OnBoardingModal level={route.params.level} toggle={toggleOnBoard}/>}
            <Title text="Soziale Unterstützung" color={ORANGE} back/>
            <ScrollView contentContainerStyle={{minHeight: "100%"}}>
            <View>
                <View style={{ minHeight: 142}}>  
                    <TextHeader 
                        id= {currScreen.id}
                        title = {currScreen.title} 
                        subtitle={
                            level === 1 ? 
                            currScreen.subtitle : 
                            "❤️ = Emotionale Unterstützung \n 📚 = Informationale Unterstützung \n 💪 = Instrumentale Unterstützung"} 
                        goBack={goBack} 
                        goAhead={goAhead} /> 
                </View>

                <View style={[styles.container, { backgroundColor: PRIMARY}]}>
                    <View style={styles.outer_circle}/>
                    <Animated.View style={[styles.middle_circle, 
                        {
                            height: middleSize,
                            width: middleSize,
                    }]}>
                    </Animated.View>
                
                    <Animated.View style={[styles.inner_circle, 
                        {
                            height: innerSize,
                            width: innerSize,
                    }]}>
                    </Animated.View>
                    <View style={styles.me}><Text style={{fontSize: 18}}>Ich</Text></View>   
                </View> 
                <View style={ [styles.container] }>
                <Pressable 
                        style={styles.plus} 
                        onPress={() => setAddVisible(prev => !prev)} 
                        accessibilityLabel="Person hinzufügen" >
                        <FontAwesome5  
                            size={24} 
                            name="plus"
                            resizeMode="contain"
                            style={{ alignSelf: 'center'}} />
                    </Pressable> 
                    <Circle people={people} 
                                toggleUpdate={fillUpdate}
                                deletePerson={deletePerson} 
                                updatePerson={updatePerson}
                                level={level}
                                />
                </View>
            </View>
            </ScrollView>
                { updateVisible && (
                    <UpdatePopUp 
                        level={level} 
                        toggle={toggle} 
                        person={transferPerson[0]} 
                        deletePerson={deletePerson} 
                        updatePerson={updatePerson}
                />)}
                { addVisible && (
                    <PopUp 
                        level={level} 
                        person= { {name: "", resource: ""}} 
                        toggle={toggleAdd} 
                        addPerson={addPerson}/>
                )}
    </>
  )         
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        alignSelf: 'center',
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative',
        top: 160
    },
    plus: {
        zIndex: 10,
        alignItems: 'center', 
        
        justifyContent: 'center',
        alignSelf: 'flex-end',
        right: 20,
        bottom: 80,

        borderColor: 'black', 
        backgroundColor: '#fff',
        height: 48, 
        width: 48, 
        borderWidth: 2, 
        borderRadius: 48/2, 
       
        position: 'absolute'
    },
   outer_circle: {
      height: 300, 
      width: 300, 
      borderRadius: 300 / 2, 
      backgroundColor: PRIMARY,
      justifyContent: 'center', 
      alignItems: 'center',
      alignSelf: 'center', 
      position: 'absolute'
    },
    middle_circle: {
        borderRadius: 280 / 2, 
        backgroundColor: PURPLE,
        position: 'absolute',
    },
    inner_circle: { 
        borderRadius: 260 / 2, 
        backgroundColor: '#f9bf9e',
        position: 'absolute'
    },  
    me: {
        height: 48, 
        width: 48, 
        borderRadius: 48 / 2, 
        backgroundColor: 'white',
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',
    } ,  
    header:{
        marginTop: 20,
        fontSize: 25, 
        fontWeight: 'bold', 
        textAlign: 'center'
    }, 
      text: {
          fontSize: 18, 
          textAlign: 'center',
          marginTop: 10, 
          marginHorizontal: 10, 
          lineHeight: 18 *1.5
      },
      goBack: {
        flexDirection : 'row',
        alignItems: 'center',
        zIndex: 10,
        marginTop: 20,
        marginLeft: 55,
      
      },
      goAhead: {
        flexDirection : 'row',
        alignItems: 'center',
        zIndex: 10,
        marginTop: 20,
        marginRight: 55,
    },
  })
export default SocialStart