import React from "react";
import { DeviceEventEmitter, NativeEventEmitter, NativeModules, Text, ToastAndroid, View } from "react-native";

type Props = {
    message: string;
};
type IState = {
    count: number;
};

const { CustomModule } = NativeModules; // If using a Native Module
const eventEmitter = new NativeEventEmitter(CustomModule || NativeEventEmitter);

class ClassScreen extends React.Component<Props, IState> {

    componentDidMount() {
        DeviceEventEmitter.addListener('onShortcutPressed', this.cameraSurvey);

    }

    componentDidUpdate() {
        DeviceEventEmitter.addListener('onShortcutPressed', this.cameraSurvey);


    }
    componentWillUnmount(): void {
        DeviceEventEmitter.removeAllListeners
    }

    cameraSurvey = async () => {
        ToastAndroid.show("CameraSurvey", ToastAndroid.TOP);
        console.log("TESTINg CLASS")
    }
    render() {
        return (
            <View>
                <Text style={{ color: 'black' }}>CLASS SAD</Text>
            </View>
        )
    }
}

export default ClassScreen