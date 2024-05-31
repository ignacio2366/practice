import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import styled from '../assets/styled';
import Imaged from '../Image/images.ts';

const style = StyleSheet.create({
  container: {
    height: 78,
    flexDirection: 'row',
    backgroundColor: 'rgba(229, 239, 236, 0.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    marginVertical: 25,
  },
  lbl: {
    color: styled.white,
    fontSize: styled.small,
    fontFamily: styled.normal,
    textTransform: 'capitalize',
  },
  title: {
    color: styled.white,
    fontSize: styled.f18,
    fontFamily: styled.sembold,
    textTransform: 'capitalize',
  },

});
const PrayerService = () => (
        <View style={style.container}>
            <View style={{ gap: 4 }}>
                <Text style={style.lbl}>Daily Prayer</Text>
                <Text style={style.title}>One true Good</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Imaged.icleftchev />
                </TouchableOpacity>
            </View>
        </View>
);

export default PrayerService;
