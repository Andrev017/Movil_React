import React from 'react';
import { StyleSheet, View, Text ,Image, TouchableOpacity } from 'react-native';

const Regalos = () => {
    return (
        <View>
            <View style={styles.tit}>
                <Text style={styles.titulo}>
                    Regalos
                </Text>
                <Image source={require("../../../assets/regalo_grande.png")}/>
            </View>


            <View style={styles.img_regalos}>
                <Image source={require("../../../assets/pexels-david-bartus-43782-297933.jpg")} style={{width:"100%",height:"100%"}}/>
            </View>

            {/* <View style={styles.text_botons}>
                <Text>
                    Camisas
                </Text>
                <View >
                    <Text>Talla M/L</Text>
                    <text>Precio Sugerido </text>
                    <Text>70 Bs</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <image source={require("../../../assets/corazon.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image/>
                    </TouchableOpacity>
                </View>
            </View>*/}

            


        </View>
    );
}

const styles = StyleSheet.create({
    tit:{
        flexDirection: 'row',
    },
    titulo:{
        fontSize: 28,
        padding: "3%",
        color: "#2D0C57",
    },
    img_regalos:{
        flexDirection: 'row',

    },
    text_botons:{

    },
})

export default Regalos;
