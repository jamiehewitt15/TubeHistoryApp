import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


export  default class Station extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      return (
          <View>
          
          <Card title={this.props.stationName.toUpperCase()} titleStyle={styles.title} image={this.props.stationImage} containerStyle={styles.card}>
          <Text style = {styles.subtitle}>History</Text>
          <Text style = {styles.body}>{this.props.stationHistory} </Text>
          <Text> </Text>
          <Text style = {styles.subtitle}>Lines</Text>
          <Text style = {styles.body}>{this.props.stationLines} </Text>
          <Text style = {styles.subtitle}>Quick facts</Text>
          <Text style = {styles.body}>Zone: {this.props.stationZones} </Text>
          <Text style = {styles.body}>Opened: {this.props.stationOpened} </Text>
          <Text style = {styles.body}>Local Authority: {this.props.stationLocalAuthority}</Text>
          <Text> </Text>
          <Text style = {styles.bold}>Previous names</Text>
          <Text style = {styles.body}>{this.props.stationPreviousNames} </Text>
          </Card>



          

        </View>
   
      )
  }
  
};

const styles = StyleSheet.create({
  card: {
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#DD1F19',

        },
body: {
    
    fontSize: 16,
    lineHeight: 20,
  },
  subtitle: {
    
    fontWeight: 'bold',
    fontSize: 16,

  
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0012A9'
  },

  bold: {
    
    fontWeight: 'bold',
   
  },
 
});

/*#eb4d47*/