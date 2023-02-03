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

class Cart extends Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <View style={{ backgroundColor: "#96FFBA", }}>
                    <Image
                        style={{ height: 150, width: 150, backgroundColor: "#96FFBA" }}
                        source={require('../assets/shape1.png')}  >
                    </Image>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../assets/back.png')}  >
                    </Image>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>
                            Cart
                    </Text>
                </View>
                <View >
                    <Image
                        style={{ height: 30, width: 30, top: 42, left: 7 }}
                        source={require('../assets/search.png')}  >
                    </Image>
                    <Search style={[styles.Promo,]} />
                </View>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100,  }}
                                source={{
                                    uri:'data:image/jpeg;base64,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',
                                }}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Tomato  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>50 Kg</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100,  }}
                                source={{
                                    uri:'data:image/jpeg;base64,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',

                                }}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Carrot</Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>25Kg</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100, }}
                                source={{
                                    uri:'data:image/jpeg;base64,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',
                                }}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Onion</Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>45 Kg</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100,  }}
                                source={{
                                    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqgPrzDmMLDzPJ-5RgdSV5QmlMRqFvnjTrthszcwjZw&s',
                                }}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Keerai  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>50 piece</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cart


const styles = StyleSheet.create({

    Name: {

        marginHorizontal: 40,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#D9D9D9',

    },
}
)