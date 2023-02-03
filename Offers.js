import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const Search = () => {
    const [search, onChangeText] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.Name}
                onChangeText={onChangeText}
                value={search}
                placeholder="Serach for items & products "
            //keyboardType="keyboard"
            />
        </SafeAreaView>
    );
};

class Offer extends Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <View style={{backgroundColor:"#96FFBA",}}>
                    <Image
                        style={{ height: 150, width: 150 ,backgroundColor:"#96FFBA"}}
                        source={require('../assets/shape1.png')}  >
                    </Image>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../assets/back.png')}  >
                    </Image>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>
                        Offers
                    </Text>
                </View>
                <View >
                    <Image
                        style={{ height: 30, width: 30, top: 58, left: 7 }}
                        source={require('../assets/search.png')}  >
                    </Image>
                    <Search style={[styles.Promo,]} />
                </View>
                <View style={[{ marginVertical: 20 }]}>
                    <TouchableOpacity style={styles.Discount}>
                        <View >
                            <Text style={{ fontSize: 30, fontWeight: '900' }}>20% Discount</Text>

                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity style={styles.Discount} >
                        <View >
                            <Text style={{ fontSize: 30, fontWeight: '900' }}>30% Discount</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Discount} >
                        <View >
                            <Text style={{ fontSize: 30, fontWeight: '900' }}>Daily Discount</Text>

                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default Offer

const styles = StyleSheet.create({

    Name: {
        marginVertical: 20,
        marginHorizontal: 40,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#D9D9D9',

    },
    Discount: {
        marginVertical: 20,
        backgroundColor: '#96FFBA',
        marginHorizontal: 20,
        padding: 30,
        alignItems: "center",
        textAlign: "center",
        borderRadius: 30
    }
}
)