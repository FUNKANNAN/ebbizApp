import {StyleSheet, Dimensions} from 'react-native';

export const STYLES = StyleSheet.create({
  ImageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
    position: 'absolute',
    width: '100%',
  },
  textLogin: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  formsContainer: {
    marginTop: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFields: {
    width: '100%',
    marginBottom: 15,
  },
  textLableName: {
    margin: 5,
    fontSize: 16,
  },
  textEnterName: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 15,
  },
  btnLogin: {
    backgroundColor: '#2196f3',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    elevation: 5,
  },
  textBtnLogin: {
    color: 'white',
    fontSize: 20,
  },
  btnNewUser: {
    margin: 10,
    borderBottomWidth: 0.75,
    borderColor: 'red',
    padding: 1,
  },
  textBtnNewUser: {
    color: 'gray',
  },
});
