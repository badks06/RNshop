import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
      <Pressable
      onPress={onPressHandler}
      >
    <View style={{...styles.btn, ...style}}>
      <Text style={styles.btnText}>{ children }</Text>
    </View>
     </Pressable>
  )
}



const styles = StyleSheet.create({
    btn: {
        backgroundColor: "grey",
        padding: 9
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 17
    }
})
export default ButtonComponent