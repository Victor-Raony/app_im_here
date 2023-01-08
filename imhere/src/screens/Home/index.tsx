import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home(){
  const participants = ['Rodrigo', 'Victor', 'Diego', 'Biro', 'Ana', 'Rafaela', 'Pedro', 'Daniel', 'Mayk', 'Joao', 'Fabio'];

  
  function handleParticipantAdd(){
    console.log("Voce clicou no botao Adicionar!");
  }

  function handlerParticipantRemove(name: string){
    console.log(`Voce clicou em remover um participante ${name}`);
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
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant 
          key={participant}
          name={participant}
          onRemove={() => handlerParticipantRemove("Rodrigo")}/>
        ))
      }
    </ScrollView>

    </View> 
  );
} 