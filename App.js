import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, Alert, RefreshControl} from 'react-native';
import Station from'./Components/Station';
import { SearchBar, Button, Header } from 'react-native-elements';
import PinchZoomView from 'react-native-pinch-zoom-view';
import { STATIONS } from './tube_data';




export default class App extends React.Component {
 
  loadMore() {
      this.num_stations+=30;
      console.log(this.num_stations);
      this.setState({stations: STATIONS.slice(0, this.num_stations)});
      
  }

  showTenStations() {
      this.num_stations=30;
      console.log(this.num_stations);
      this.setState({stations: STATIONS.slice(0, this.num_stations)});
      
  }

///Here I'm trying to create a method for showing or hiding the search bar. I'm fairly certain this is where it's going wrong because when I run it on it's own (without the if statement below),
/// I can click on the search button but nothing logs to the console.


///There could also be a problem with how I've defined the variable in the constructor.

  constructor(props) {
      super(props);
       
        
      
      this.num_stations = 30;
      
        
      this.state={
        stations: STATIONS.slice(0, this.num_stations),
        searchStatus: false,
        menuStatus: false,
        mapStatus: false,
      };

  }

ShowHideSearch() {
         if(this.state.searchStatus == true)
        {
          this.setState({searchStatus: false});
          console.log(this.searchStatus);
        }
          else
          {
            this.setState({searchStatus: true});
            console.log(this.searchStatus);
          }
        }

ShowHideMenu() {
         if(this.state.menuStatus == true)
        {
          this.setState({menuStatus: false});
          console.log(this.menuStatus);
        }
          else
          {
            this.setState({menuStatus: true});
            console.log(this.menuStatus);
          }
        }

ShowMap() {
         
          this.setState({mapStatus: true});
          console.log(this.mapStatus);
        }

HideMap() {
         
          this.setState({mapStatus: false});
          console.log(this.mapStatus);
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
    if (this.state.stations[i].history){
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
   }
  if (visible_stations.length === 0){
    visible_stations = (<View style={styles.buttoncontainer}>
      <Text style={styles.text}>Sorry we don't have that station at the moment but more will be added in the next update!</Text>
      <Button title="Reload"
              onPress={this.showTenStations.bind(this)}
              buttonStyle={styles.button}/>
      </View>)
    showLoadMore = false  
  }
  
    
    return (
      <View style={{flex: 1}}>
      
      <StatusBar hidden />
   
      <Header
          leftComponent={{ icon: 'menu', color: '#fff',  underlayColor: "#0012A9", onPress: this.ShowHideMenu.bind(this) }}
          centerComponent={{ text: 'TUBE HISTORY', style: { color: '#fff', fontWeight: 'bold'} }}
          rightComponent={{ icon: 'search', color: '#fff', fontSize: 20, underlayColor: "#0012A9", onPress: this.ShowHideSearch.bind(this) }}
          outerContainerStyles={{ marginTop: -10, marginBottom: -5 }}
          backgroundColor="#0012A9"
      />

      { this.state.menuStatus ? <View style={{backgroundColor: "#0012A9", paddingBottom: 5}}>
      <Text style={{flex: 1}}>Menu</Text>
          <Text style={styles.menuitem} onPress={ this.HideMap.bind(this)}>Tube Stations </Text>
          <Text style={styles.menuitem} onPress={ this.ShowMap.bind(this)}>Map </Text>
          
      </View> : null }
      { this.state.mapStatus ? <ScrollView style={{backgroundColor: "#fff", paddingBottom: 200}} ><ScrollView horizontal>
       
        <Image
          source={require("./images/tubemap.jpg")}
        />  
        </ScrollView></ScrollView> : null }
      
       { this.state.searchStatus ? <SearchBar
            lightTheme
            onChangeText={this.textChanged.bind(this)}
            onClear={this.textCleared}
            placeholder='Type Here...' /> : null }
      
      <ScrollView style={styles.container}>
        {visible_stations}
       
        
        {showLoadMore && STATIONS.length > this.num_stations &&
          <View style={styles.buttoncontainer}>
            <Button 
              onPress={this.loadMore.bind(this)}
              title="Show More"
              buttonStyle={styles.button}
              
             />
             <Text style={styles.footertext}>Please provide feedback and suggestions to: tubeapphistory@gmail.com</Text>
          </View>
        }
        
      </ScrollView>

      </View>
    );
  }
  
  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdcbcb',
    marginTop: 0,

    // alignItems: 'center',
    
  },
  button: {
    width: 140,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#33A2FF',
    borderWidth: 0,
    borderRadius: 10,
    
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  footertext:{
  textAlign: 'center',
  marginBottom: 10,
  },
  menuitem:{
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    fontSize: 15,
    color: '#ffffff',
  }
});
