import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Perfil = () => {
    return (
        <View >
            <Text style={styles.titulo}>
                Perfil
            </Text>

            <Text></Text>

            <View>
                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Text style={{color:"#ffff", fontSize:16,}}>Editar Perfil</Text>
                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Text style={{color:"#ffff", fontSize:16,}}>Añadir regalos</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({

    titulo:{
        fontSize: 28,
        textAlign: "center",
        color: "#2D0C57",
    },
    boton:{
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "100%",
        borderRadius: 10,
        
        
    },
})

export default Perfil;
