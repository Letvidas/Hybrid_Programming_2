import React, {Component, useState} from 'react';
import  {View, Text, Button, StyleSheet, StatusBar, Image, TextInput } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

class Comms extends Component{
    constructor()
    {
        super()
        this.state = {
            value: "",
            key: ""
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeText(newText){
        this.setState(
            {
                value: newText
            }
        )
    }
    handleKey(newText){
        this.setState(
            {
                key: newText
            }
        )
    }

    storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(
            key,
            value
          );
        } catch (error) {
          console.log("saving error")
        }
      };

      retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
          return value
          } else{
            console.log("loading error")
          }
        } catch (error) {
            console.log("loading error")
        }
      };

      removeData = async (key) => {
        try {
          await AsyncStorage.removeItem(
            this.state.key
          );
        } catch (error) {
          console.log("remove data error")
        }
      };

      saveStorage = () =>{
        this.storeData(this.state.key,this.state.value)
      }

      readStorage = () =>{
        this.retrieveData(this.state.key).then(result => {
            alert("Your Comment = " + result)
        })
        }

        removeStorage = () =>{
        this.removeData(this.state.key)
        }


    

    render(){
        const text = this.props.route.params.Text;
        const title = this.props.route.params.title;
        this.state.key = title
        const img = this.props.route.params.Image;
        const comment ='Na';
        return(
            <View>
                <Text  style = {{alignItems: "center",alignSelf: "center",fontSize: 25,marginBottom: 50, }}>
                {text}
                </Text>
                <Image style = {{width: 200, height: 200, resizeMode: "cover",alignSelf: "center"}}
                source = {{uri: img}}
                />
                <Text  style = {{alignItems: "center",alignSelf: "center",fontSize: 25,marginBottom: 15, }}>
                    Prideti komentara
                </Text>
                <TextInput style =
                {styles.input}
                defaultValue = {this.state.value}
                onChangeText = {this.handleChangeText}/>
                <Button 
                title= "Read comment"
                onPress ={this.saveStorage
                }
                ></Button>
                <Button 
                title= "Show comment"
                onPress ={this.readStorage}
                ></Button>
                                <Button 
                title= "Delete comment"
                onPress ={this.removeStorage}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 8
    }
})
export default Comms