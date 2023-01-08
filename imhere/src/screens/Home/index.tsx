import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home(){
  const participants = ['Rodrigo', 'Victor', 'Diego', 'Biro', 'Ana', 'Rafaela', 'Pedro', 'Daniel', 'Mayk', 'Joao', 'Fabio'];

  
  function handleParticipantAdd(){
    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.")
    }
  }

  function handlerParticipantRemove(name: string){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
          name={item}
          onRemove={() => handlerParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista de presenca.
          </Text>
        )}
      />
    </View> 
  );
} 