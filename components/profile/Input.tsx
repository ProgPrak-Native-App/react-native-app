import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InputData {
  label: string;
  iconName: any;
  error: string;
  password: boolean;
  onFocus: () => void;
  onChangeText: (text: string) => void;
}

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 20,
    fontSize: 12,
    color: '#c0c0c0',
  },
  icon: {
    fontSize: 22,
    color: '#4682b4',
    marginRight: 20,
  },
  inputContainer: {
    height: 55,
    backgroundColor: '#c0c0c0',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  textInput: {
    //   color: "#4682b4",
    flex: 1,
  },
  error: {
    marginHorizontal: 20,
    color: '#ff0000',
    fontSize: 12,
    marginTop: 7,
  },
});

const Input = ({ label, iconName, error, password, onFocus, onChangeText }: InputData) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor: error ? '#ff0000' : isFocused ? '#4682b4' : '#f0ffff' }]}>
        <MaterialCommunityIcons name={iconName} style={styles.icon} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={styles.textInput}
        />

        {password ? (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ fontSize: 22, color: '#4682b4' }}
          />
        ) : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;
