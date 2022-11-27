import { View, Text, TextInput, TextInputProps } from 'react-native'
import React, { FC } from 'react'

const Input: FC<{
    placeholder: string, keyboardType: TextInputProps["keyboardType"],
    secureTextEntry: TextInputProps["secureTextEntry"],

}> = ({ placeholder, keyboardType, secureTextEntry, }) => {
    return (
        <>

            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                className="mx-5 my-3 py-2 px-4 border-2 rounded-3xl border-black
                     dark:border-white text-sm font-semibold text-black dark:text-gray-50
                        placeholder-black placeholder:font-poppins dark:placeholder-white
                        focus:outline-none focus:ring-2 focus:ring-logoBlueFirst focus:border-logoBlueFirstW
                     "
            />
        </>
    )
}

export default Input