import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, Alert} from 'react-native';
import Station from'./Components/Station'
import { SearchBar, Button } from 'react-native-elements';

import { STATIONS } from './tube_data';





export default class App extends React.Component {
 
  loadMore() {
      this.num_stations+=5;
      console.log(this.num_stations);
      this.setState({stations: STATIONS.slice(0, this.num_stations)});
      
  }

  
  constructor(props) {
      super(props);
      
      this.num_stations = 5;

      this.state={
        stations: STATIONS.slice(0, this.num_stations)
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
    
    
   var showLoadMore = true;

   var visible_stations = []
   for (var i = 0; i < this.state.stations.length; i++) {
     visible_stations.push(<Station stationName={this.state.stations[i].name} 
                                    stationHistory={this.state.stations[i].history}
                                    stationLines={this.state.stations[i].lines} 
                                    stationZones={this.state.stations[i].zones} 
                                    stationImage={this.state.stations[i].image}
                                    stationLocalAuthority={this.state.stations[i].localAuthority}
                                    stationOpened={this.state.stations[i].opened}
                                    stationPreviousNames={this.state.stations[i].previousNames}
                                    key={i}/>);
     
   }
  if (visible_stations.length === 0){
    visible_stations = (<View>
      <Text>Sorry we don't have that station at the moment but more will be added in the next update!</Text>
      <Button title="Reload"/>
      </View>)
    showLoadMore = false  
  }
  
    
    return (
      <View style={{flex: 1}}>
      <StatusBar hidden />
        <SearchBar
            onChangeText={this.textChanged.bind(this)}
            onClear={this.textCleared}
            placeholder='Type Here...' />
      <ScrollView style={styles.container}>
        {visible_stations}
       
        
        {showLoadMore && STATIONS.length > this.num_stations &&
          <Button 
              onPress={this.loadMore.bind(this)}
              title="Load More"
          />
        }
        
      </ScrollView>
      
      </View>
    );
  }
  
  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    marginTop: 0,

    // alignItems: 'center',
    
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  }
});
