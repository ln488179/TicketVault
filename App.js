import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import concert from './assets/concert.png';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [tickets, setTickets] = useState(0);
  const [total, findTheCost] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.textHeader}>Ticket Vault</Text>

      <TextInput style={styles.input} 
        onChangeText={newText => setTickets(newText)}
        placeholder="Number of Tickets"
        defaultValue={tickets} />

      <TouchableOpacity style={styles.button} 
        onPress={() => {
          findTheCost(tickets * 99.99);
        }}>
        <Text style={styles.buttonText}>Find The Cost</Text>
      </TouchableOpacity> 

      <Text style={styles.textResult}>
        {(total === 0) ? (" ") : ("Ticket Costs: $" + total.toFixed(2))}
      </Text>      

      <Image source={concert} style={styles.image} />  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  textResult: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: { 
    marginTop: 40,
    fontSize: 23,
    textAlign: 'center',
    height: 40,
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1
  },
  button: {
    marginTop: 40,
    margin: 10,
    backgroundColor: "#f98b88",
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  }, 
  image: {
    marginTop: 90,
    marginBottom: 10,
    width: 430, 
    height: 159
  }
});
