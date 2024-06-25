import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import {images} from './src/assets/images/images';

const InputData = () => {
  const [temperature, setTemperature] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleTemperatureInput = (text: React.SetStateAction<string>) => {
    setTemperature(text);
  };
  const handleSubmit = () => {
    setDisplayText(`${temperature} cd`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.BackgroundTop}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Nhập ngưỡng cường độ</Text>
          <Text style={styles.headerText}>ánh sáng để bật tắt </Text>
          <Text style={styles.headerText}>thiết bị</Text>
        </View>
      </ImageBackground>
      {/* <Text style={styles.textdisplay}>Cường độ ánh sáng hiện tại là: </Text> */}
      <View style={styles.frameColor}>
        <ImageBackground
          source={images.Daimau}
          resizeMode="contain"
          style={styles.color}>
          <View>
            <Text style={styles.circleText}>{displayText || '0cd'}</Text>
          </View>
        </ImageBackground>
      </View>

      {/* <View style={styles.circle}>
        <Text style={styles.circleText}>{displayText || '0 cd'}</Text>
      </View>
      <Image style={styles.color} source={images.Daimau} /> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập ngưỡng xác định"
          value={temperature}
          onChangeText={handleTemperatureInput}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
  },
  imageBackground: {
    width: 400,
    height: 325,
    resizeMode: 'stretch',
  },
  textdisplay: {
    fontSize: 18,
  },
  // circle: {
  //   marginTop: 30,
  //   backgroundColor: 'white',
  //   borderRadius: 200,
  //   width: 300,
  //   height: 300,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 4,
  //   shadowOffset: {width: 0, height: 2},
  //   shadowColor: 'black',
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4.84,
  // },
  frameColor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#555555',
    textAlign: 'center',
    padding: 20,
  },
  header: {
    padding: 30,
    marginTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 50,
  },
  headerText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    fontSize: 15,
    color: '#838383',
    // width: '85%',
    // alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    // borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F5F3F4',
    marginBottom: 30,
    marginTop: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FBB03B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    marginTop: 5,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FBB03B',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: '#FBB03B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputData;
