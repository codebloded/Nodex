import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

const ButtonStyled: FC<{
    title?: string,
    onPress?: () => void,
    color?: string,
    textColor?: string,
}> = ({ color, title, onPress, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text className={`${textColor} ${color} font-poppins hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mt-10 mb-2 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonStyled