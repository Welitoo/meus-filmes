import React from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
     return(
        <View>
            <text>Meus Filmes</text>
            <text>Olá Welito, boa noite!</text>

            <TouchableOpacity>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
     );
}

//Criando os estilos
const styles = StyleSheet.create({
 
});