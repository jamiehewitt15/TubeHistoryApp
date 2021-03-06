import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


export  default class DLRStation extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      return (
          <View>
          
          <Card title={this.props.stationName.toUpperCase()} titleStyle={styles.title} image={this.props.stationImage} containerStyle={styles.card}>
          <Text style = {styles.subtitle}>History</Text>
          <Text>{this.props.stationHistory} </Text>
          <Text> </Text>
          <Text style = {styles.subtitle}>Quick facts</Text>
          <Text>Zone: {this.props.stationZones} </Text>
          <Text>Opened: {this.props.stationOpened} </Text>
          <Text>Local Authority: {this.props.stationLocalAuthority}</Text>
          <Text> </Text>
          </Card>



          

        </View>
   
      )
  }
  
};

const styles = StyleSheet.create({
  card: {
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#00A4A7',

        },

  subtitle: {
    
    fontWeight: 'bold',
  /*  fontSize: 16,
  */
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#004894'
  },

  bold: {
    
    fontWeight: 'bold',
   
  },
 
});

/*#eb4d47*/