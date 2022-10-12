import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React from 'react'

export default function SignIn() {
  return (
    <View style={styles.formContext}>
      <View style={{ width: "100%", alignItems: "center"}}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      </View>

      

      <Text style={styles.textForm}>Login</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Login"></TextInput>

      <Text style={styles.textForm}>Senha</Text>
      <TextInput style={styles.textInput} placeholder="Insira sua Senha" ></TextInput>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Fazer Login</Text>
      </TouchableOpacity>
    </View>
  );
}