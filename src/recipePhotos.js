import React, {Component} from 'react';
import  {View, Text, Button, StyleSheet, StatusBar,FlatList} from 'react-native';
import 'react-native-gesture-handler';


const Products = [
    {
        title:'Chili soup',
        Category: 'Soups',
        id: 1,
        Ingredients: 'Idedame 100 g cukraus blah blah blah',
        Photo: 'https://images-na.ssl-images-amazon.com/images/I/51ErruOTCPL._AC_SY200_.jpg',
        Comments: "aaaaaaa"
    },
    {
        title:'Tomato soup',
        Category: 'Soups',
        id: 2,
        Ingredients: 'skanus ingredientai',
        Photo: 'https://www.budgetbytes.com/wp-content/uploads/2019/10/Secret-Ingredient-Tomato-Soup-bowls-V1.jpg',
        Comments: "a"
    },
    {
        title:'Apple',
        Category: 'Main Meals',
        id: 3,
        Ingredients: 'sviezi obuoliukai',
        Photo: 'https://freepngimg.com/download/apple/88-png-apple-image-clipart-transparent-png-apple.png',
        Comments: "traskus obuoliukas"
    },
    {
        title:'Berries',
        Category: 'Main Meals',
        id: 4,
        Ingredients: 'skanios uogytes',
        Photo: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fde5b8a101e-berries-cream-meringues-2766-200.jpg',
        Comments: ""
    },
    {
        title:'Burger',
        Category: 'Main Meals',
        id: 5,
        Ingredients: 'sultingas burgeris',
        Photo: 'https://thedeliciousspoon.com/wp-content/uploads/2019/04/Best-Burger-Blog-Post-2-of-4-200x200.jpg',
        Comments: ""
    },
    {
        title:'Chicken',
        Category: 'Main Meals',
        id: 6,
        Ingredients: 'vistienos apkepta',
        Photo: 'https://easychickenrecipes.com/wp-content/uploads/2020/01/crispy-oven-fried-chicken-7-of-8-200x200.jpg',
        Comments: ""
    },
    {
        title:'Pancakes',
        Category: 'Main Meals',
        id: 7,
        Ingredients: 'is miltu',
        Photo: 'https://bakingmischief.com/wp-content/uploads/2017/02/how-to-make-fluffy-buttermilk-pancakes-for-two-image-square-200x200.jpg',
        Comments: ""
    },
    {
        title:'Juice',
        Category: 'Drinks',
        id: 8,
        Ingredients: 'Sviezios apelsinu sultys blah blah blah',
        Photo: 'https://www.thermofisher.com/blog/wp-content/uploads/2013/10/orange_juice_200x200.jpg',
        Comments: ""
    },
    {
        title:'Coke',
        Category: 'Drinks',
        id: 9,
        Ingredients: 'Oj skani kola  blah blah blah daug cukraus tai nesveika labai blogai 100 gramu kazko',
        Photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2014/09/0907-coke-1446220247.jpg',
        Comments: ""
    }
]

class recipePhotos extends Component{
    render(){
        const text = this.props.route.params.text;
        return(
            <FlatList
                data = {Products.filter(function(item){
                        return item.Category === text
                     })}
                renderItem = {({item})=>[
                 <View style = {styles.button}>
                     <Button
                         title = {item.title}
                         onPress = {()=> this.props.navigation.navigate("Comments",{Text: item.Ingredients, Image : item.Photo, title: item.title})}
                     />
                 </View>
                ]}
           />

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: "#020202"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 30,
        margin:4,
        color: "#000000"
      },
    saveButton:{
        alignItems: "flex-start",
        backgroundColor: "#5ef292",
        padding: 30,
        margin:4,

    },
      input: {
        borderWidth:1,
        alignSelf: "stretch",
        margin : 32,
        height :64,
        borderRadius: 6,
        paddingHorizontal:16,
        fontSize: 24,
        fontWeight:"300",

    },
    header: {
        alignItems: "flex-start"
    }
  });

export default recipePhotos

