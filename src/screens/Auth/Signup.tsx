import { View, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import ButtonStyled from '../../components/ButtonStyled'

const Signup = ({ navigation }: any) => {
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-darkPaperBg" >
            <Text className="px-5 py-5 text-3xl font-poppins font-bold text-black dark:text-gray-300" >Signup</Text>
            <View >
                <Image source={require("../../assets/sign.png")} style={{ height: 200, width: 200 }} className="flex  items-center mx-auto my-auto" />
            </View>
            <Input
                placeholder="Email"
                secureTextEntry={false}
                keyboardType='email-address' />
            <Input
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true} />
            <Input
                placeholder="Confirm"
                keyboardType="default"
                secureTextEntry={true} />
            <ButtonStyled title='Sign Up' color='bg-blue-800/20' textColor='text-white' onPress={() => navigation.navigate('login')} />
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text className="text-center text-sm text-black dark:text-gray-300 font-poppins mt-5" >Already have an account? <Text className="text-blue-800 dark:text-blue-300 font-bold" >Login</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Signup