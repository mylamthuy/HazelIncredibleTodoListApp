import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView
  } from 'react-native';

function ToDoList({tasks}){
    return (
      <>
        <ScrollView>
          {tasks.map((value, index) =>(
              <Pressable key={index}>
                <View style={[styles.task]}>
                  <Text style={styles.taskText}>{value}</Text>
                </View>
              </Pressable>
            ))
          }
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;