import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Station from'./Components/Station'
import { SearchBar } from 'react-native-elements';

import { STATIONS } from './tube_data';


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.state={
        stations: STATIONS.slice(0, 10)
      }
  }
  
  textChanged(search_word){
    var new_stations = [];
    for (var i = 0; i < STATIONS.length; i++) {
      if (STATIONS[i].name.toLowerCase().indexOf(search_word.toLowerCase()) == 0) {
         new_stations.push(STATIONS[i])
      }
    }
    this.setState({stations: new_stations})
       
  }
  
  
  textCleared(){
    
  }
  
  
  render() {
    
   var visible_stations = []
   for (var i = 0; i < this.state.stations.length; i++) {
     visible_stations.push(<Station stationName={this.state.stations[i].name} 
                                    stationLines={this.state.stations[i].lines} 
                                    stationZones={this.state.stations[i].zones} 
                                    stationImage={this.state.stations[i].image}
                                    key={i}/>);
     
   }
    
    return (
      <ScrollView style={styles.container}>
        <SearchBar
            onChangeText={this.textChanged.bind(this)}
            onClear={this.textCleared}
            placeholder='Type Here...' />
        {visible_stations}
      </ScrollView>
      
    );
  }
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAF7A6',
    marginTop: 20
    // alignItems: 'center',
    
  },
});
