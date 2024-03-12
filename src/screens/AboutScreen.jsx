import React from "react";
import { Text, Button, View } from "react-native";
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
    return (
        <MainLayout>
            <>
            <Text>Hazel Incredible To Do List App</Text>
            <Text>Written by: Thuy My Lam</Text>
            <Text>Date: March 12, 2024</Text>

            <View style={{ marginTop: 24 }}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}/>
            </View>
            </>
        </MainLayout>
    )
}

export default AboutScreen;