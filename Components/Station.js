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
       
          
          <Text>Lines: {this.props.stationLines} </Text>
          <Text>Zone: {this.props.stationZones} </Text>
          <Text>Opened: {this.props.stationOpened} </Text>
          <Text>Local Authority: {this.props.stationLocalAuthority} </Text>
          
          </Card>



          

        </View>
   
      )
  }
  
};