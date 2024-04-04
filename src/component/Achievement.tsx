import { View, StyleSheet, Text, Image } from "react-native"
import styled from "../assets/styled"
import images from "../Image/images"
import { useState } from "react"

interface Props {
    score: number
}

const Achievement: React.FC<Props> = (props: Props) => {
    const [badge, setbadge] = useState([])

    const badgelevel = () => {

    }
    return (
        <View style={_style.container}>
            <Text style={_style.boxlbl}>Achievement</Text>
            <View style={_style.badges}>
                {props.score >= 12 && <Image source={images.trooper} style={_style.badgesimg} />}
                {props.score >= 48 && <Image source={images.veteran} style={_style.badgesimg} />}
                {props.score >= 100 && <Image source={images.champion} style={_style.badgesimg} />}
                {props.score >= 200 && <Image source={images.hero} style={_style.badgesimg} />}
                {props.score >= 400 && <Image source={images.conqueror} style={_style.badgesimg} />}
                {props.score >= 800 && <Image source={images.warrior} style={_style.badgesimg} />}

            </View>
        </View>
    )
}
const _style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 21,
        paddingHorizontal: 21,
        marginVertical:15,
        height: 250
    },
    boxlbl:
    {
        color: styled.white,
        fontSize: styled.regular,
        fontWeight: '400',
        lineHeight: 22.4,
    },
    badges: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        gap: 10,
        height: 235,
        marginVertical: 11,
        flexWrap: 'wrap',
    },
    badgesimg: {
        height: 85,
        width: 85,
    }
})

export default Achievement
