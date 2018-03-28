import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Station from'./Components/Station'

import { STATIONS } from './tube_data';


export default class App extends React.Component {
  render() {
    
   var visible_stations = []
   for (var i = 0; i < STATIONS.length; i++) {
     visible_stations.push(<Station stationName={STATIONS[i].name} 
                                    stationLines={STATIONS[i].lines} 
                                    stationZones={STATIONS[i].zones} 
                                    stationImage={STATIONS[i].img}
                                    key={i}/>);
     
   }
    
    return (
      <ScrollView style={styles.container}>
        
        {visible_stations}
      </ScrollView>
      
    );
  }
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAF7A6',
    // alignItems: 'center',
    
  },
});
