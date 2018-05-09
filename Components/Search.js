import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, Alert, RefreshControl} from 'react-native';
import Station from'./Components/Station'
import { SearchBar, Button, Header } from 'react-native-elements';
import { STATIONS } from './tube_data';

export  default class Search extends React.Component {
constructor(props){
 
    super(props);
 
    this.state ={
 
      searchStatus:false
 
    }
}


ShowHideTextComponentView = () =>{
 
  if(this.state.searchStatus == true)
  {
    this.setState({searchStatus: false})
  }
  else
  {
    this.setState({searchStatus: true})
  }
}


render() {
  
    return (

      <View style={styles.MainContainer}>
		{
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.
 
        this.state.searchStatus ? <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> : null
      	}
      
      <Button title="Hide Text Component" onPress={this.ShowHideTextComponentView} />
      </View>
    );
  }


};


const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10

}

});
