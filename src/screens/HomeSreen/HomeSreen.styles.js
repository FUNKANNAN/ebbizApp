import {StyleSheet} from 'react-native';

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  listViewHomeData: {
    flex: 9,
    backgroundColor: '#eee',
  },
  btnAddBtn: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnIcon: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  modelView: {
    backgroundColor: '#fff',
    top: '10%',
    height: '75%',
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.75,
    borderColor: 'gray',
    padding: 3,
  },
  pickerView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    margin: 15,
    marginTop: 30,
    borderRadius: 5,
    elevation: 5,
    borderWidth:0.5,
  },
  datePickerView: {
    margin: 15,
    alignSelf: 'center',
    borderWidth: 0.5,
  },
  btnBookAppointment: {
    backgroundColor: '#2196f3',
    margin: 15,
    width: 200,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  textBookAppointment: {
    color: 'white',
    fontSize: 16,
  },
  textHeading: {
    backgroundColor: '#304FFE',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModelHeading: {color: 'white', fontSize: 14, fontWeight: 'bold', flex: 9},
  modelCloseIcon:{flex:1, borderRadius:30},
  modelCloseIcon: {
    width: 25,
    height: 25,
    borderRadius: 30,
  },
  bookingListView: {
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor:"#2196f3",
  },
  textSlNo: {
    flex: 1,
    alignSelf:"center"
  },
  textName: {
    flex: 6,
    alignSelf:"center"
  },
  textCountDown: {
    flex: 6,
    alignSelf:"center"
  },
});
