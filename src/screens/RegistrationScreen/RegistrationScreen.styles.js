import {StyleSheet} from 'react-native';

export const STYLES = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
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
  btnRegister: {
    backgroundColor: '#2196f3',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    elevation: 5,
  },
  textBtnRegister: {
    color: 'white',
    fontSize: 20,
  },
});
