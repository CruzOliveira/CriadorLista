import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import{Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function TaskList({data}){
return(
    <Animatable.View 
    style={styles.container}
    animation='bounceIn'
    useNativeDriver
    >
        
        <TouchableOpacity>
            <Ionicons name='md-checkmark-circle' size={30} color='#121212'/>
        </TouchableOpacity>
        <View>
        <Text style={styles.task}>{data.task}</Text>
        </View>
    </Animatable.View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection: 'row',
    margin: 9,
    alignItems:'center',
    backgroundColor:'#FFF',
    borderRadius: 5,
    padding: 6,
    elevation:1.5,
    shadowColor:'#000',
    shadowOpacity: 0.2,
    shadowOffset:{
        width: 1,
        height: 3,
    }

    




},

task:{
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 20,
    color:'#121212',
}

});