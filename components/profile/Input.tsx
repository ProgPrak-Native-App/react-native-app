import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BACKGROUND, BLUE, ERROR } from '../shared/styles';

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
    color: BACKGROUND,
  },
  icon: {
    fontSize: 22,
    color: BLUE,
    marginRight: 20,
  },
  inputContainer: {
    height: 55,
    backgroundColor: BACKGROUND,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  error: {
    marginHorizontal: 20,
    color: ERROR,
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
      <View style={[styles.inputContainer, { borderColor: error ? ERROR : isFocused ? BLUE : '' }]}>
        <MaterialCommunityIcons name={iconName} style={styles.icon} />
        <TextInput
          autoCorrect={false}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          secureTextEntry={hidePassword}
          style={styles.textInput}
        />

        {password ? (
          <MaterialCommunityIcons
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            onPress={() => setHidePassword(!hidePassword)}
            style={{ fontSize: 22, color: BLUE }}
          />
        ) : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;
