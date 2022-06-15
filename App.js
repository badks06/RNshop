import React, {useState} from 'react';
import { StyleSheet, View ,FlatList, Modal, Text, Pressable, Button, Image, ImageBackground, SafeAreaView} from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import DismissKeyboard from './components/DismissKeyboard';
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header';

export default function App() {

  const [myProducts, setMyProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)


const submitHandler = (product) => {
  setDisplayModal(false)
  if (product.length > 1) {
const idString = Date.now().toString()
setMyProducts(currentMyProducts => [{ key: idString, name: product}, ...currentMyProducts])
} else {
setShowModal(true)
}
  }
  
const deleteProduct = (key) => {
  setMyProducts(currentMyProducts => {
    return currentMyProducts.filter(product => product.key != key)
  })
}

const cancelNewProduct = () => {
  setDisplayModal(false)
}

  return (
    <DismissKeyboard>
    <ImageBackground 
    style={styles.bgImage}
    source={{uri: 'https://media.istockphoto.com/photos/gold-background-picture-id187102598?b=1&k=20&m=187102598&s=170667a&w=0&h=10Af-E8uNvPs_41uqAWaEaZMpey_YRU2GqEtL3Meeis='}}

    >
      <Header />
      <View style={styles.container}>
      <Modal 
      visible= { showModal }
      onRequestClose={() => setShowModal(false)}
      animationType="slide"
      hardwareAccelerated
      transparent
      >
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
           <Text style={styles.modalHeaderText}>Oups</Text>
          </View>
          <View style={styles.modalBody}>
            <Image source={require('./assets/iconCancel.png')}/>
           <Text style={styles.modalBodyText}>Merci d'indiquer plus d'un seul caractère</Text>
          </View>
          <View style={styles.modalFooter}>
           <Pressable
           style={styles.pressableBtnModal}
           onPress={() => setShowModal(false)}
           >
            <Text style={styles.modalBtn}>OK</Text>
           </Pressable>
          </View>
        </View>
        </View>
      </Modal>
      <ButtonComponent
      onPressHandler={() => setDisplayModal(true)}
      style={styles.addProductBtn}
      > Nouveau Produit
      </ButtonComponent>
      <AddProduct 
      submitHandler={submitHandler} 
      displayModal={displayModal} 
      cancelNewProduct={cancelNewProduct}
      />
      <FlatList
      data={ myProducts }
      renderItem={( { item } ) => (
      <Products 
      name={ item.name }
      idString={item.key}
      deleteProduct={deleteProduct}
      />) }
     />
     </View>
    </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1
  },
  items: {
    marginTop: 10
  },
  element: {
  backgroundColor: "#ffb6c1",
  padding: 20,
  fontSize: 17,
  marginVertical: 6
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center"
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
  pressableBtnModal: {
    backgroundColor: "lightseagreen",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    padding: 16
  },
  addProductBtn: {
    backgroundColor: "darkred",
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 20
  },
  bgImage: {
    flex: 1
  }
});
