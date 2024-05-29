import React from 'react';
import { router } from 'expo-router';


import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const Coment = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Ingrese su Comentario
            </Text>
            <Text></Text>
            <Text></Text>

            <View style={styles.div}>
                <TextInput style={styles.input}></TextInput>

                <Text></Text>
                <Text></Text>

                <View>
                    <TouchableOpacity style={styles.content}>
                        <Text style={styles.tit_enviar}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 28,
        padding: "1%",
        color: "#2D0C57",
        marginHorizontal: 45,
    },
    div:{
        justifyContent: "center",

    },
    content: {
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
        justifyContent: "center",
    },
    tit_enviar: {
        textAlign: "center",
        color: "#ffff",
        fontSize: 18,
    },
    input: {
        backgroundColor: "#0002",
        height: "50%",
        width: "90%",
        borderRadius: 10,
    },
})

export default Coment;
