import { StyleSheet, View, Text } from "react-native"
import styled from "../assets/styled"
import Imaged from "../Image/images"

const TopBarHeader = () => {

    return (
        <View style={_style.container}>
            <View style={{ flexDirection: 'row', gap: 8, }}>
                < Imaged.iclogo />
                <Text style={_style.titleB}>Prayer <Text style={{ fontWeight: '400' }} >Partner</Text>
                </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8, }}>
                <Imaged.icnotif />
                <Imaged.icprofile />

            </View>
        </View>
    )
}
const _style = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleB: {
        color: styled.white,
        fontFamily: styled.bold,
        fontWeight: '700',
        fontSize: styled.regular,
    }

})

export default TopBarHeader