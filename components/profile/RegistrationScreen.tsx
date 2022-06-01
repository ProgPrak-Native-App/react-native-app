
import React from "react";
import { Keyboard, Pressable, StyleSheet, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Title from "../Title";
import Input from "./Input";



import { useNavigation } from "@react-navigation/native";
import { TERTIARY } from "../../colors";


const styles = StyleSheet.create({

    button: {
        marginHorizontal: "25%",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: TERTIARY,
        justifyContent: "center",
        height: 40
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },

    inputContainer : {
        marginVertical:  10,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    }
});


export default function RegistrationScreen(){

   const [inputs, setInputs] = React.useState({
       email: '',
       password: '',
       repeatPassword: '',
       age: ''
   })
   const [errors, setErrors] = React.useState({
        email: '',
        password: '',
        repeatPassword: '',
        age: ''
   });

   const validate = () => {
       Keyboard.dismiss();
       let valid = true;
       if(!inputs.email){
           handleError('Bitte Mailadresse eingeben', 'email')
           valid = false;
       }else if(!inputs.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
           handleError('Bitte gültige Mailadresse eingeben', 'email')
       }

       if(!inputs.password) {
            handleError('Bitte Passwort eingeben', 'password')
        }else if (inputs.password.length < 6){
            handleError("Passwort muss mindestens 6 Zeichen lang sein",'password')
        }
        if(!inputs.repeatPassword) {
            handleError('Bitte Passwort erneut eingeben', 'repeatPassword')
        }else if(inputs.repeatPassword != inputs.password){
            handleError('Passwörter müssen übereinstimmen', 'repeatPassword')
        }
        
        if(!inputs.age) {
            handleError('Bitte Alter eingeben', 'age')
        }else if(!inputs.age.match("^[0-9]*$")){
            handleError('Das Alter muss eine Zahl sein', 'age')
        }
    
   };

   const register = () => {

   }

   const handleOnChange = (text: string, input: string) => {
       setInputs((prevState => ({...prevState, [input]: text})));
   };
   const handleError = (errorMessage: string, input: string) => {
       setErrors(prevState => ({...prevState, [input]: errorMessage}))
   }


    return(
        <SafeAreaProvider >
            <SafeAreaView style={{ flex: 1, height: 1000}}>  
                <Title text="Mein Profil" />    
                    <ScrollView >  
                        <Input 
                        iconName="email-outline" 
                        label="Mailadresse" 
                        password = {false}
                        error= {errors.email}
                        onFocus={() => {
                            handleError('', 'email')
                        }}
                        onChangeText={(text: string) => handleOnChange(text, 'email')} >
                        </Input>  
                        <Input 
                        label={"Passwort"} 
                        iconName={"lock-outline"} 
                        password={true}
                        error= {errors.password}
                        onFocus={() => {
                            handleError('', 'password')
                        }} 
                        onChangeText={(text: string) => handleOnChange(text, 'password')} >
                        </Input>
                        <Input 
                        label={"Passwort wiederholen"} 
                        iconName={"lock-outline"} 
                        password={true}
                        error= {errors.repeatPassword}
                        onFocus={() => {
                            handleError('', 'repeatPassword')
                        }} 
                        onChangeText={(text: string) => handleOnChange(text, 'repeatPassword')} >
                        </Input>
                        <Input 
                        label={"Alter"} 
                        iconName={"ghost"} 
                        password={false}
                        error= {errors.age}
                        onFocus={() => {
                            handleError('', 'age')
                        }}  
                        onChangeText={(text: string) => handleOnChange(text, 'age')} >
                        </Input>
                        <Pressable onPress={() => validate()} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Registrieren
                            </Text>
                        </Pressable>
                            <Text 
                            onPress={() => console.log("navigate to Login")}
                            style={{textAlign: "center", fontSize: 16, fontWeight: 'bold', marginTop: 20}}  
                            >
                            Ich habe bereits einen Account. Zum Login
                            </Text>
                    </ScrollView>   
            </SafeAreaView>
        </SafeAreaProvider>
    );
}