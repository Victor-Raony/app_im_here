import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home(){

  
  function handleParticipantAdd(){
    console.log("Voce clicou no botao Adicionar!");
  }

  return(

    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
        </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View> 
  );
} 