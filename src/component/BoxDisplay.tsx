import { StyleSheet, Text, View } from "react-native"
import styled from "../assets/styled"
interface Props {
    label?: string,
    value: string
    orange?: boolean
}

export const BoxDisplay: React.FC<Props> = (props: Props) => {
    return (
        <View style={_style.box}>
            <Text style={_style.boxlbl}>{props.label}</Text>
            <Text style={[_style.boxtxt, { color: props.orange ? styled.orange : styled.white }]}>{props.value}</Text>
        </View>

    )
}

const _style = StyleSheet.create({
    box: {
        height: 133,
        width: 150,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    boxlbl:
    {
        color: styled.white,
        fontSize: styled.small,
        lineHeight: 22.4,
    },
    boxtxt: {
        color: styled.white,
        fontSize: styled.bigfont,
        fontWeight: '800',
    }
})