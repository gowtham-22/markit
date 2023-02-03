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

class Vendor extends Component {
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
                        Vendors
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
                                source={require('../assets/user.png')}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Vendor 1  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Classy fruit shop  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>98765432xx  </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100,  }}
                                source={require('../assets/user.png')}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Vendor 2  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Classy fruit shop  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>98765432xx  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100, }}
                                source={require('../assets/user.png')}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Vendor 3  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Classy fruit shop  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>98765432xx  </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 40 }}>
                            <Image
                                style={{ height: 100, width: 100,  }}
                                source={require('../assets/user.png')}  >
                            </Image>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Vendor 4  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>Classy fruit shop  </Text>
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>98765432xx  </Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Vendor


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