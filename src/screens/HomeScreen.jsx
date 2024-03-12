import React from "react";
import {SafeAreaView, Button, View} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {

    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      }

    return (
        <MainLayout>
        <>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask}/>
            </SafeAreaView>

            <View style={{ marginTop: 24 }}>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}/>
            </View>
        </>
        </MainLayout>
    )
}

export default HomeScreen;