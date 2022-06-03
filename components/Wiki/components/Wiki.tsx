import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Title from "../../Title";
import  WikiHeader  from "./WikiHeader";
import  EntryTitle  from "./EntryTitle";
import { EntryProps, wikiEntry, BASE_URL, SIZES } from "../constant/constants";
import { TERTIARY } from "../../../styles";


const alphaBet: Set<String> = new Set()

/** fetch wiki data and slice first 6 just for easier debbuging from API */
async function getEntries(): Promise<wikiEntry[]> {
    return (await fetch(BASE_URL + "/wiki/5")
        .then((response) => response.json())
        .then(data => data.slice(0,6))) as wikiEntry[];
  }
    
/* 
*  dataBase = Database in form EntryProps, to do filetring on, 
*  filteredEntries = holds filtered search dataBase
*/ 
const Wiki = () => {
    const [dataBase, setDataBase] = useState<EntryProps[]>([])
    const [filteredEntries, setFilteredEntries] = useState<EntryProps[]>([])
   

    /** handles search in realtime if typed into bar */
    const handleSearch = (value:string) => {
        if(!value.length){
            setFilteredEntries(dataBase);  
            return;
        }
       
         /** not happy with this but apperently 
        * must map specifically to filteredData else dataBase gets courrupted ?
        * filter index letters A, B, C
        * */
        let filteredData = dataBase.filter((item) => 
                item.entry.filter(elem =>  
                    elem.title.toLowerCase().includes(value.toLowerCase()) ).length > 0);

        /* filter entries in A=>{....} */

        filteredData = filteredData.map((item) => ({
                letter: item.letter, 
                entry: item.entry.filter(element => 
                    element.title.toLowerCase().includes(value.toLowerCase()))
                }) 
            ) 
       
        setFilteredEntries(filteredData)
    }

    /*** populate dataBase in the scheme of {A => {[....], title: "A ..."}, B=>{...}, ...} the first time */
    const populateData = (entries : wikiEntry[]) => {
        let helperArray : EntryProps [] = []
        entries.forEach(element => { alphaBet.add( element.title.charAt(0).toUpperCase())});
        
        alphaBet.forEach(item => {
            helperArray.push(
                {
                letter: item.toString(),
                entry: entries.filter(element => 
                    element.title.charAt(0).toUpperCase() === item )
                }
            )    
        })   
        setDataBase(helperArray)
        setFilteredEntries(helperArray)
    }

    const sortEntries = (entries: wikiEntry[]) => {
        return entries.sort((a, b) => {return a.title.localeCompare(b.title)})
       
    }
    // if first rodeo, sort fetch reponse acc. to alphabetical order
    useEffect(() => {
        getEntries().then(entries => sortEntries(entries)).then((entries) => populateData(entries))
    },[]);
     
    /** add sorted first char to a set so that we can create an index like A,B,C 
     * set serach as dataBase so we can work with 'search' from now on
     * only use once after OG array has been sorted
     */

    return(
        <View>
            <Title text="Wiki" color={TERTIARY} />   
            <WikiHeader onSearch={handleSearch}/>    
            <ScrollView >
                <View style={styles.container}>
                    {filteredEntries.map((item, idx) =>
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
        marginBottom: SIZES.font * SIZES.font,
        zIndex: -1,
    },
})

export default Wiki

//  (\ /)
//  ( . .)
//  c('')('')
     