import { Text, View } from 'react-native';

export default function App(){
  return(
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    }}>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
      }}>React</Text>
      <Text key="2">Victor</Text>
    </View> 
  );
}