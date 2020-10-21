import React, { Component } from "react";
import  {View, Text, Button, ScrollView, StyleSheet} from 'react-native';

class mainMenu extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <View>
            <Text style = {{alignItems: "center",alignSelf: "center",fontSize: 25,marginBottom: 50 }}>Restourant</Text>
            <Button title="Start" 
            onPress = {()=> this.props.navigation.navigate("List",{text: 'Categories'})}
            />
            </View>
        );
    }
}

export default mainMenu;