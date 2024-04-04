import { ScrollView, StyleSheet, Text, View } from "react-native"
import styled from "../assets/styled"
import TopBarHeader from "../component/TopBarHeader"
import PrayerService from "../component/PrayerService"
import VerseoftheDay from "../component/VerseoftheDay"
import { BoxDisplay } from "../component/BoxDisplay"
import Achievement from "../component/Achievement"
import { useEffect, useState } from "react"
import DashboardService from "../service/DashboardServices"
import { TotalPrayerModel } from "../model/totalprayerModel"
import { SecondtoHourConvert } from "../../util/SecondtoHourConvert"

const DashboardScreen = () => {
    const [totalprayer, settotalprayer] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            const _envtoken = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjZjdmODcyNzA5MWU0Yzc3YWE5OTVkYjYwNzQzYjdkZDJiYjcwYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJheWVyLXBhcnRuZXItZGV2LTQxMDgxOCIsImF1ZCI6InByYXllci1wYXJ0bmVyLWRldi00MTA4MTgiLCJhdXRoX3RpbWUiOjE3MDUzODQ1NjYsInVzZXJfaWQiOiJSUTFXWnQ5TVR2UWxCRXJ3a2JmN0FkYVJib2gyIiwic3ViIjoiUlExV1p0OU1UdlFsQkVyd2tiZjdBZGFSYm9oMiIsImlhdCI6MTcwNTM4NDU2NiwiZXhwIjoxNzA1Mzg4MTY2LCJlbWFpbCI6ImczbWlzYSsyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJnM21pc2ErMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JiLH5tVfTulaZtWeFXVlYiIfOS28TC6U3x4Y45Ynb7NJfLibZoIYjfSmzt1NfxX68c36aSuy6Cx2Jzl6TmotlnTbpbLVK9hMJ3FKZ0du21uBZFMKiK0KnzJSRUXLP2o9cRDWNMH0EmUwrTaZUFWU1VdrpD9u4tAh3vFY2Zl5f1_wmimX-tD8JcMiD4uI6-_Zj4lKQ3nCB4k0HcrbMF5D7M7uu54DdEekfRa779TENxLJC7KxAGnI7hSonFAqcNnJjODZ_t8fCN9IyEXbKPyPg14UMzQZ3CNijXU57rfZOSF7uEwoPQ3i8TPRBqU4sUwTZyQIew6gu4nZPlxbZ_ta9Q"
            try {
                const _response: TotalPrayerModel = await DashboardService.TotalAmountDue(_envtoken, 185)
                const sectohr = SecondtoHourConvert(_response.total_pray_time);
                console.log(sectohr)
                settotalprayer(sectohr)
            } catch (error) {
                console.log("Error : ", error)
            }

        }
        fetchData()
    }, [totalprayer])

    return (
        <ScrollView style={_style.container}>
            <TopBarHeader />
            <PrayerService />
            <VerseoftheDay />

            {/* Prayer Dashboard */}
            <View style={_style.prayerdashcontainer}>
                <Text style={_style.prayertle}>My Prayer Dashboard</Text>
                <View style={_style.dashboardbox}>
                    <BoxDisplay label="Answered Prayers" value="3/6" />
                    <BoxDisplay label="Daily Prayer Goal" value="00:30" />
                </View>
                <View style={_style.dashboardbox}>
                    <BoxDisplay label="Total hours prayed" value={`${totalprayer.toString()} hrs`} />
                    <BoxDisplay label="Prayer Requests" value="6" orange={true} />
                </View>
            </View>
            <Achievement score={totalprayer} />
        </ScrollView>
    )
}
const _style = StyleSheet.create({
    container: {
        backgroundColor: styled.dark,
        paddingHorizontal: 24,
        height: 'auto',
    },
    prayerdashcontainer: {
        height: 'auto',

    },
    prayertle: {
        color: styled.white,
        textTransform: 'capitalize',
        fontSize: styled.f18,
        fontFamily: styled.bold,
    },
    dashboardbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,

    },

})
export default DashboardScreen