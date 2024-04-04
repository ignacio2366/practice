import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import styled from "../assets/styled"
import Imaged from "../Image/images"
import LinearGradient from "react-native-linear-gradient"
const VerseoftheDay = () => {
    return (
        <LinearGradient
            colors={['rgba(255, 129, 2, 0.1)', 'rgba(30, 16, 1, 0.1)']}
            style={_style.container}
            useAngle={false}
            angle={0}
            angleCenter={{ x: 1.2, y: 0.5 }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ gap: 4, }}>
                    <Text style={_style.lbl}>Daily Prayer</Text>
                    <Text style={_style.title}>One true Good</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Imaged.icleftchev />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={_style.verse}>But seek first his kingdom and his righteousness, and all these things will be given to you as well.</Text>
        </LinearGradient>
    )
}

const _style = StyleSheet.create({
    container: {
        height: 'auto',
        flexDirection: 'column',
        backgroundColor: 'rgba(229, 239, 236, 0.1)',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        marginVertical: 25,
        paddingVertical: 16,
        gap: 24,
    },
    lbl: {
        color: styled.white,
        fontSize: styled.small,
        fontFamily: styled.normal,
        textTransform: 'capitalize'
    },
    title: {
        color: styled.white,
        fontSize: styled.f18,
        fontFamily: styled.sembold,
        textTransform: 'capitalize'
    },
    verse: {
        width: '75%',
        color: styled.white,
        fontSize: styled.small,
        lineHeight: 22.4,

    }

})
export default VerseoftheDay