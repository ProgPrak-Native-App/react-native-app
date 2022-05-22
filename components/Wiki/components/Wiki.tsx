import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Title from "../../Title";
import  WikiHeader  from "./WikiHeader";
import  EntryTitle  from "./EntryTitle";
import { EntryProps, wikiEntry, BASE_URL } from "../constant/constants";
import { TERTIARY } from "../../../colors";

const alphaBet: Set<String> = new Set()

/** fetch wiki data and slice first 6 just for easier debbuging from API */
async function getEntries(): Promise<wikiEntry[]> {
    return (await fetch(BASE_URL + "/wiki/5")
        .then((response) => response.json())
        .then(data => data.slice(0,6))) as wikiEntry[];
  }
    
/* entry = has all entries from fetch, first unorddered then sorted alphab.
*  dataBase = Database in form EntryProps, to do filetring on, 
*  search holds filtered search dataBase
*/ 
const Wiki = () => {
    const [entry, setEntry] = useState<wikiEntry[]>([]);
    const [dataBase, setDataBase] = useState<EntryProps[]>([])
    const [search, setSearch] = useState<EntryProps[]>([])

    /** handles search in realtime if typed into bar */
    const handleSearch = (value:string) => {
        if(!value.length){
            setSearch(dataBase);  
            return;
        }
       
         /** not happy with this but apperently 
        * must map specifically to filteredData elese dataBase gets courrupted ?*/
        let filteredData = dataBase.filter((item) => 
                item.entry.filter(elem =>  
                    elem.title.toLowerCase().includes(value.toLowerCase()) ).length > 0);
       
        filteredData = filteredData.map((item) => ({
                letter: item.letter, 
                entry: item.entry.filter(element => 
                    element.title.toLowerCase().includes(value.toLowerCase()))
                }) 
            ) 

        setSearch(filteredData)
    }
    /*** populate dataBase the first time, if not done */
    const populateData = () => {
        if (dataBase.length === 0){
            alphaBet.forEach(item => 
                dataBase.push( {
                    letter: item.toString(), 
                    entry: entry.filter(element => 
                        element.title.charAt(0).toUpperCase() === item) 
                    }
                )
            )
        }
    }

    useEffect(() => {
        if (entry.length === 0) {
          getEntries().then(setEntry)
          
        }
      });
     
    /** if first rodeo, sort fetch reponse acc. to alphabetical order
     * add sorted first char to a set so that we can create an index like A,B,C 
     * set serach as dataBase so we can work with 'search' from now on
     */
    if(entry.length > 0 && alphaBet.size === 0){
        entry.sort((a, b) => {return a.title.localeCompare(b.title)})
        entry.forEach(element => { alphaBet.add( element.title.charAt(0).toUpperCase() )});
        setSearch(dataBase)
      }
    populateData()

    return(
        <View>
            <Title text="Wiki" color={TERTIARY} img={"../assets:/libary.png"} />   
            <WikiHeader onSearch={handleSearch}/>    
            <ScrollView >
                <View style={styles.container}>
                    {search.map((item, idx) =>
                    <View key={idx}>
                        <EntryTitle letter={item.letter} entry={item.entry} />   
                    </View>
                    )}     
                </View >
            </ScrollView>
        </View> 
    )
}

const styles = StyleSheet.create({
    container : {
        height: "100%",
        marginHorizontal: 24,
        marginVertical: 8,
        zIndex: -1,
    },
})

export default Wiki

//  (\ /)
//  ( . .)
//  c('')('')
     