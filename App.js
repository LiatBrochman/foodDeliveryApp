import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: "./images/domain-names-g897ac69fa_1920.jpg"};

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }} resizeMode='cover' source={require('./assets/images/domain-names-g897ac69fa_1920.jpg')}>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }}>

                    <Text>HELLO!!!!</Text>
                    <Text>HELLO!!!!</Text>
                    <Text>HELLO!!!!</Text>
                    <Text>HELLO!!!!</Text>
                    <Text>HELLO!!!!</Text>
                    <Text>HELLO!!!!</Text>


                </View>

                <StatusBar style="auto"/>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
