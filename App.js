import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, Alert, RefreshControl} from 'react-native';
import TubeStation from'./Components/TubeStations';
import DLRStation from'./Components/DLRStations';
import { SearchBar, Button, Header } from 'react-native-elements';
//import { STATIONS } from './datafiles/tube_data.js';
import { DLRSTATIONS } from './datafiles/dlr_data.js';




export default class App extends React.Component {
 
  loadMore() {
      this.num_stations+=30;
      
      this.setState({stations: STATIONS.slice(0, this.num_stations)});
      
  }

  showTenStations() {
      this.num_stations=30;
      
      this.setState({stations: STATIONS.slice(0, this.num_stations)});
      
  }



  constructor(props) {
      super(props);
       
        
      
      this.num_stations = 30;
      
        
      this.state={
        stations: STATIONS.slice(0, this.num_stations),
        dlrstations: DLRSTATIONS.slice(0, this.num_stations),
        searchStatus: false,
        menuStatus: false,
        mapStatus: false,
        tubeStatus: true,
        dlrStatus: false,
      };

  }

ShowHideSearch() {
         if(this.state.searchStatus == true)
        {
          this.setState({searchStatus: false});
          
        }
          else
          {
            this.setState({searchStatus: true});
            
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
            
          }
        }

showTube() {
          this.setState({tubeStatus: true});
         console.log(this.state.tubeStatus) 
        }

showDLR() {
          this.setState({tubeStatus: false});
          console.log(this.state.tubeStatus) 
        }


ShowMap() {
         
          this.setState({mapStatus: true});
          
        }

HideMap() {
         
          this.setState({mapStatus: false});
         
        }
          

  
textChanged(search_word){
    var new_stations = [];
    for (var i = 0; i < STATIONS.length; i++) {
      var possible_station = STATIONS[i].name.toLowerCase().trim().replace("'","").replace("'","").replace(".","") ;
      search_word = search_word.toLowerCase().trim().replace("'","").replace("'","").replace(".","");
      
      if (possible_station.indexOf(search_word) == 0) {
         new_stations.push(STATIONS[i])
      }
    }
    this.setState({stations: new_stations})
       
  }
  
    textCleared(){
    
  }
  
  
  render() {
    
    
   var showLoadMore = true;
 
 if(this.state.tubeStatus === true){ 
   var visible_stations = []
   for (var i = 0; i < this.state.stations.length; i++) {
    if (this.state.stations[i].history){
     visible_stations.push(<TubeStation stationName={this.state.stations[i].name} 
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

} else {
    var visible_stations = []
    for (var i = 0; i < this.state.dlrstations.length; i++) {
    if (this.state.dlrstations[i].history){
     visible_stations.push(<DLRStation stationName={this.state.dlrstations[i].name} 
                                    stationHistory={this.state.dlrstations[i].history}
                                    stationZones={this.state.dlrstations[i].zones} 
                                    stationImage={this.state.dlrstations[i].image}
                                    stationLocalAuthority={this.state.dlrstations[i].localAuthority}
                                    stationOpened={this.state.dlrstations[i].opened}
                                    key={i}/>);
                                        }
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
          <Text style={styles.menuitem} onPress={ this.HideMap.bind(this), this.showTube.bind(this)}>Tube Stations </Text>
          <Text style={styles.menuitem} onPress={ this.HideMap.bind(this), this.showDLR.bind(this)}>DLR Stations </Text>
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
