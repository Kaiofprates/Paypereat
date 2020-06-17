import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Lottie from 'lottie-react-native';

//import chat from '../../assets/21306-delivery-agriculture-style.json';
import gif from '../../assets/animation_640_kbirusp0.gif'
import styles from './styles';
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';


export default function Login({ navigation }) {

    const [eye, setEye] = useState(true) 


    function changeVisualize() {
        setEye(!eye);
    }

  return (
    <SafeAreaView style={styles.container}>
<Image source={gif} style={styles.anim}> 
           </Image> 
       
      {/* <Lottie
        source={chat}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      /> */}

      <Text style={styles.welcome}>PayperEat</Text>
 <Input
                    containerStyle={styles.input}
                    placeholder='User Name'
                    inputStyle={{ color: '#FAF9F9' }}
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={24}
                            color='#618CB5'
                        />
                    }
                />
                <Input
                    containerStyle={styles.input}
                    placeholder='Password'
                    inputStyle={{ color: '#FAF9F9' }}
                    secureTextEntry={eye}
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='lock'
                            size={24}
                            color='#618CB5'
                        />
                    }

                    rightIcon={
                        <TouchableOpacity onPress={changeVisualize}>
                            <Icon
                                style={styles.icon}
                                name={eye ? 'eye-off' : 'eye'}
                                size={24}
                                color='#618CB5'
                            />
                        </TouchableOpacity>
                    }
                />
                <View style={styles.buttons}>
                    <Button title="login" type="outline"
                        containerStyle={styles.login}
                        onPress={() => {
                            navigation.navigate('Intro')
                        }}
                    />
                    <Button title="Sign in" type="clear"
                        icon={
                            <Icon
                                name="arrow-up"
                                size={15}
                                color="white"
                                style={{
                                    marginLeft: 9
                                }}
                            />
                        }
                        onPress={() => {
                            navigation.navigate('Register')
                        }}

                        iconRight={true}

                        containerStyle={styles.sigin} />
                </View>
                <Text style={styles.community}> from Leprechaum </Text>

    </SafeAreaView>
  );
}