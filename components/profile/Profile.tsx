import React from "react";
import Title from "../Title";
// add user-circle as title icon
import ProfileOption from "./ProfileOption";
import { View, StyleSheet } from "react-native";


export default function Profile() {
    return (
        <>
          <Title text="Profil"/>
          <View style={styles.container}>
            <ProfileOption title="Account" icon="user-alt"/>
            <ProfileOption title="Stimmungsverlauf" icon="chart-bar"/>
            <ProfileOption title="Benachrichtigungen" icon="bell"/>
            <ProfileOption title="Datenschutz" icon="shield-alt"/>
            <ProfileOption title="Einstellungen" icon="sliders-h"/>
          </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 35,
  },
});