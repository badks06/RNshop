import React from 'react';
import { Text, StyleSheet, View, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const Products = ({ name, deleteProduct, idString }) => {
return (
    <Pressable
    onPress={() => deleteProduct(idString)}
    >
    <View style={styles.items}>
      <FontAwesome 
      name='remove'
      size={30}
      color={'white'}
      />
        <Text style={styles.element}>{ name }</Text>
    </View>
    </Pressable>
)
}




const styles = StyleSheet.create({
items: {
    marginTop: 10,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  element: {
    backgroundColor: "#ffb6c1",
    fontSize: 17,
    marginLeft: 20,

  }
});

export default Products