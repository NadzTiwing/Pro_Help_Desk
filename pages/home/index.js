import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return(
        <View>
            <Text>This is the home section</Text>
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

export default Home;