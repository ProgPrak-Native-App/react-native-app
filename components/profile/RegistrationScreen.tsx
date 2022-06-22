
import React from "react";
import { Keyboard, Pressable, StyleSheet, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Title from "../Title";
import Input from "./Input";



import { useNavigation } from "@react-navigation/native";
import { TERTIARY } from "../../styles";


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


  const validate = () => {
    Keyboard.dismiss();
    if (!inputs.email) {
      handleError('Bitte Mailadresse eingeben', 'email');
    } else if (
      !inputs.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      handleError('Bitte gültige Mailadresse eingeben', 'email');
    }

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

  const handleOnChange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (errorMessage: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, height: 1000 }}>
        <Title text="Mein Profil" />
        <ScrollView>
          <Input
            error={errors.email}
            iconName="email-outline"
            label="Mailadresse"
            onChangeText={(text: string) => handleOnChange(text, 'email')}
            onFocus={() => {
              handleError('', 'email');
            }}
            password={false}
          />
          <Input
            error={errors.password}
            iconName={'lock-outline'}
            label={'Passwort'}
            onChangeText={(text: string) => handleOnChange(text, 'password')}
            onFocus={() => {
              handleError('', 'password');
            }}
            password={true}
          />
          <Input
            error={errors.repeatPassword}
            iconName={'lock-outline'}
            label={'Passwort wiederholen'}
            onChangeText={(text: string) => handleOnChange(text, 'repeatPassword')}
            onFocus={() => {
              handleError('', 'repeatPassword');
            }}
            password={true}
          />
          <Input
            error={errors.age}
            iconName={'ghost'}
            label={'Alter'}
            onChangeText={(text: string) => handleOnChange(text, 'age')}
            onFocus={() => {
              handleError('', 'age');
            }}
            password={false}
          />
          <Pressable onPress={() => validate()} style={styles.button}>
            <Text style={styles.buttonText}>Registrieren</Text>
          </Pressable>
          <Text
            onPress={() => console.log('navigate to Login')}
            style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>
            Ich habe bereits einen Account. Zum Login
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
