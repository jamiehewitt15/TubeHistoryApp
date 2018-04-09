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
          <Button title='MORE INFO'  
          buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 100,
          height: 35,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 85
  }} />
          </Card>



          

        </View>
   
      )
  }
  
};