import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Wall1",
    price: 100,
    image=require("../assets/2.jpeg")
  },
  {
    id: 2,
    title: "Wall2",
    price: 200,
    image=require("../assets/1.jpeg")
  },
];

function ListingsMainScreen(props) {
  return (
    <Screen style={styles.screen} >
      <FlatList data={listings} 
      keyExtractor={listing =>listing.id.toString() }
      renderItem={({item})=>
      <Card title={item.title} 
      description={"$"+item.price} 
      image={item.image} />
      } />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen:{
    padding:20,
    backgroundColor:"wight"
  }
})

export default ListingsMainScreen;
