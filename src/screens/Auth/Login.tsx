import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { ReactComponentElement } from 'react'
import Input from '../../components/Input'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ButtonStyled from '../../components/ButtonStyled'

const Login = ({ navigation }: any) => {
    const btnColor = "#181848"
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-darkPaperBg" >
            <Text className="px-5 py-5 text-3xl font-bold text-black dark:text-gray-300" >Login</Text>
            <View >
                <Image source={require("../../assets/login.png")} style={{ height: 250, width: 250 }} className="flex  items-center mx-auto my-auto" />
            </View>
            <Input placeholder="email" keyboardType='email-address' secureTextEntry={false} />
            <Input placeholder="Password" keyboardType='default' secureTextEntry={true} />
            <ButtonStyled title='Login' color='bg-blue-800/20' textColor='text-white' onPress={() => navigation.navigate('signup')} />
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text className="text-center text-sm text-black dark:text-gray-300 font-poppins mt-5" >Don't have an account? <Text className="text-blue-800 dark:text-blue-300 font-bold" >Signup</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login