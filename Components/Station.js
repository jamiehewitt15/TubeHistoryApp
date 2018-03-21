import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export  default class Station extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      return (
          <View style={styles.station}>
          
          <Text style={styles.stationName}>Name: {this.props.stationName}</Text>
          <Text>Lines: {this.props.stationLines}</Text>
          <Text style={styles.stationZone}>Zone: {this.props.stationZones}</Text>
          </View>
      )
  }
  
}

const styles = StyleSheet.create({
  stationName : {
      backgroundColor: 'red'
  },
  stationZone : {
      backgroundColor: 'white'
  },
  station: {
    backgroundColor: '#A6CAF7',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 20,
    marginRight: 60,
    marginTop: 20
    // alignItems: 'center',
    
  },
});