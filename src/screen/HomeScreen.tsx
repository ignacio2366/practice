import { useEffect, useState } from "react";
import { DeviceEventEmitter, Text, ToastAndroid, View } from "react-native";

const HomeScreen = () => {
    const [intentReceived, setIntentReceived] = useState(false);

    const cameraSurvey = async () => {
        ToastAndroid.show("CameraSurvey", ToastAndroid.TOP);
        setIntentReceived(true);
    };

    useEffect(() => {
        DeviceEventEmitter.addListener('onShortcutPressed', cameraSurvey);
    }, [intentReceived]);

    return (
        <View>
            <Text style={{ color: 'black' }}>Home SAD</Text>
            {intentReceived && <Text style={{ color: 'black' }}>SAD</Text>}

        </View>
    );
};

export default HomeScreen;