import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <KeyboardAvoidingView behavior={'position'} style={styles.key}>
          <View style={styles.Logo}>
            <Image
            style={styles.Logo2}
            resizeMode={'contain'}
            source={require('../../img/logo-1.png')}
            />
          </View>
          <ScrollView>
            <View style={styles.Panel}>
              <Text style={styles.PanelTitle}>BYS</Text>
              <Text style={styles.PanelDescription}>
                Ordu Üniversitesi...
              </Text>
              <LoginForm navigation={this.props.navigation} />
            </View>
          </ScrollView>
          <View style={styles.singupArea}>
            <Text style={styles.singUp}>Hesabınız yok mu ?</Text>
            <TouchableOpacity>
              <Text style={styles.singUpText}>Kayıt ol</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <ImageBackground
        source={require('../../img/doku-2.png')}
        style={styles.doku}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  viewContainer: {

  },
  header: {
    position: 'absolute',
    //backgroundColor: '#f2f2f2', //#af9b73 - #3f4565
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
  },
  Logo :{
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo2:{
    height: 100,
    width: '100%',
  },
  LogoDescription: {
    paddingTop: 2,
    textAlign: 'center',
    fontSize: 20,
    color: '#f2f2f2',
  },
  Panel: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  PanelTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  PanelDescription: {
    textAlign: 'center',
    fontSize: 11,
    color: '#7e868f',
    marginVertical: 10,
  },
  singUp: {
    color: '#7e868f',
  },
  singUpText: {
    color: '#000000',
    marginVertical: 5,
  },
  singupArea: {
    zIndex: 99999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  key:{
    zIndex:9999,
  },
  doku: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
  },
});
