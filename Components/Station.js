import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


export  default class Station extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      return (
          <View>
          <Card title={this.props.stationName} image={this.props.stationImage}>
          <Text style = {styles.subtitle}>History</Text>
          <Text>{this.props.stationHistory} </Text>
          <Text> </Text>
          <Text style = {styles.subtitle}>Quick facts</Text>
          <Text>Lines: {this.props.stationLines} </Text>
          <Text>Zone: {this.props.stationZones} </Text>
          <Text>Opened: {this.props.stationOpened} </Text>
          <Text>Local Authority: {this.props.stationLocalAuthority}</Text>
          <Text> </Text>
          <Text style = {styles.bold}>Previous names</Text>
          <Text >{this.props.stationPreviousNames} </Text>
          </Card>



          

        </View>
   
      )
  }
  
};

const styles = StyleSheet.create({
  subtitle: {
    
    fontWeight: 'bold',
  /*  fontSize: 16,
  */
  },
  bold: {
    
    fontWeight: 'bold',
   
  },
 
});