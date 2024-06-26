import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import {images} from './src/assets/images/images';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const InputData = () => {
  const [temperature, setTemperature] = useState('');
  const [displayText, setDisplayText] = useState('');

  const supabaseUrl = 'https://atamzgfzgyynoqqdnbup.supabase.co';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0YW16Z2Z6Z3l5bm9xcWRuYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyOTg0NDEsImV4cCI6MjAzNDg3NDQ0MX0.Ner2Wvuop0mILVgNkhI_Q0_XNgzC32pKRTkAhQlWA2I';
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      detectSessionInUrl: false,
    },
  });

  const fetchData = async () => {
    const {data, error} = await supabase
      .schema('public')
      .from('ocd')
      .select('*')
      .order('id', {ascending: false})
      .limit(1);

    if (error) {
      console.error(error);
    } else {
      console.log('Data', data);
      setDisplayText(`${data[0].value}cd`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const changeTemperature = async (temperature: number) => {
    const {data, error} = await supabase
      .from('ocd')
      .insert([{value: temperature}])
      .select();

    if (!!data) {
      console.log('dataCHange', data);
      Alert.alert('success');
    }
  };
  const handleTemperatureInput = (text: React.SetStateAction<string>) => {
    setTemperature(text);
  };
  const handleSubmit = () => {
    setDisplayText(`${temperature} cd`);
    changeTemperature(Number(temperature));
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
