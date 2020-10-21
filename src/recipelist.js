import React, {Component} from 'react';
import  {View, Text, Button, FlatList, TextInput, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

const categories = [
    {
        title:'Soups',
        id: 1
    },
    {
        title:'Main Meals',
        id: 2
    },
    {
        title:'Drinks',
        id: 3
    }
]


class recipelist extends Component{
    render(){
         const text = this.props.route.params.text;
         return(
             <View style = {{alignItems: "center"}, styles.button}>
             <Text style = {{marginBottom: 50, alignSelf: "center", fontSize: 25}}>List of {text}</Text>
                 <Button style = {styles.Button} title="Soups" onPress = {()=> this.props.navigation.navigate("Photos",{text: 'Soups'})}></Button>
                 <Button style = {styles.Button} title="Main Meals" onPress = {()=> this.props.navigation.navigate("Photos",{text: 'Main Meals'})}></Button>
                 <Button style = {styles.Button} title="Drinks" onPress = {()=> this.props.navigation.navigate("Photos",{text: 'Drinks'})}></Button>
             </View>
     );              
    }
}

const styles = StyleSheet.create({
    Button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 30,
        margin:4,
        color: "#000000"
    }
});

export default recipelist

