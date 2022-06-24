import React, { useEffect, useState } from "react";
import { MotivatorRoutes } from "../Motivator";
import { iconMap, SafetyNetDType } from "./SecurityNet";
import Title from "../../Title";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";

async function getSafetyNet() {
  return (await fetch('http://localhost:4010/safetyNet/285')
    .then(response =>response.json())
    .then(data => {
      var items: SafetyNetDType[] = []
      for (var i in data) {
        var item = data[i]
        var new_item: SafetyNetDType = {
          type: item.type,
          icon: iconMap.get(item.type),
          title: item.name,
          strategies: item.strategies.slice(0, 3)
        }
        items.push(new_item);
      }
      return items
    })
    )
}

function securityNetItemGridView(safetyNetItems: SafetyNetDType[]){
  console.log(getSafetyNet());
  return <>
    {

    }
  </>;
}


export default function SecurityNetItemView() {
  const initialState: SafetyNetDType[] = []
  const [safetyNetItems, setSafetyNetItems] = useState(initialState)

  return (
    <>
      <Title text="Mein Sicherheitsnetz"/>
      <ScrollView>
        <View style={styles.gridContainer}>
          {securityNetItemGridView(safetyNetItems)}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    alignItems: "center",
    justifyContent: "space-around",
    width: '46%',
    height: 120,
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#D3D3D3"
  },
  gridContainer: {
    marginVertical: 5,
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    justifyContent: "space-around",
    height: 300,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0
  },
  button: {
    paddingHorizontal: 4,
    alignSelf: 'center'
  },
  shadow: {
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});
