import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar,TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import TaskList from './src/components/TaskLista';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);


export default function App() {

const [task, setTask ] = useState([
{key: 1, task: 'Comprar pao'},
{key: 2, task: 'Comprar leite'},
{key: 3, task: 'Comprar ovo'},
{key: 4, task: 'Comprar queijo'},
]);

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#171d31' barStyle='light-content'/>
    
    <View style={styles.container}>
      <Text style={styles.title}>Minha tabela</Text>
    </View>

    <FlatList 
    marginHorizontal={10}
    showsHorizontalScrollIndicator={false}
    data={task}
    keyExtractor={(item) =>String(item.key)}
    renderItem={({ item }) => <TaskList data={item}/>}
/>

    <AnimatedBtn 
    style={styles.fab}
    useNativeDriver
    animation='bounceInUp'
    duration={1500}
    >
      <Ionicons name='ios-add' size={35} color='#FFF'/>
    </AnimatedBtn>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#171d31'
  },

  title:{
    color:'white',
    textAlign:'center',
    fontSize: 25,
    marginTop: 60,
    paddingBottom: 10,
  },
  fab:{
    position:'absolute',
    width: 60,
    height: 60,
    backgroundColor:'#0094FF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 30,
    right: 25,
    bottom:25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3
    },

  },

});
