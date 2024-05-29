import React from 'react';
import { router } from 'expo-router';


import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Regalos = () => {
    return (
        <View>
            <View style={styles.tit}>
                <Text style={styles.titulo}>
                    Regalos
                </Text>
                <Image source={require("../../../assets/regalo_grande.png")} />
            </View>


            <View style={styles.container}>
                <View style={styles.img_regalos}>
                    <Image source={require("../../../assets/icono_foto.png")} />
                </View>

                <View style={styles.text_botons}>
                    <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                        Camisas a Rayas
                    </Text>
                    <View >
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Talla M/L</Text>
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>70 Bs</Text>
                    </View>

                    <View style={styles.grupBoton}>
                        <TouchableOpacity style={styles.botones}>
                            <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "25%" }} />
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                            <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "25%" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text></Text>
            <View style={styles.container2}>
                <View style={styles.img_regalos}>
                    <Image source={require("../../../assets/icono_foto.png")} />
                </View>

                <View style={styles.text_botons}>
                    <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                        Poleras Basicas
                    </Text>
                    <View >
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Talla M/L</Text>
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>50 Bs</Text>
                    </View>

                    <View style={styles.grupBoton}>
                        <TouchableOpacity style={styles.botones}>
                            <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "25%" }} />
                        </TouchableOpacity>
                        <Text></Text>
                        <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                            <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "25%" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    tit: {
        flexDirection: 'row',
    },


    container: {
        flexDirection: 'row',
        backgroundColor: "#0001",
        height: "40%"
    },
    titulo: {
        fontSize: 28,
        padding: "3%",
        color: "#2D0C57",
        marginHorizontal: 45,
    },
    img_regalos: {

    },
    text_botons: {

    },
    grupBoton: {

    },
    botones: {
        backgroundColor: "#ccc",
        width: "35%",
        height: "25%",
        borderRadius: 15,
        justifyContent: "center",

    },
    boton_comentario: {
        backgroundColor: "#0BCE83",
        width: "35%",
        height: "25%",
        borderRadius: 15,
        justifyContent: "center",
        textAlign: "center"
    },

    container2: {
        backgroundColor: "#ccc",
        height: "40%",
        flexDirection: 'row',

    },
})

export default Regalos;
