import { View, Text, Image, TouchableOpacity, TextInput, } from 'react-native'
import React, { FC } from 'react'
import Entopy from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostCard: FC<{}> = ({ }) => {
    const Divider = () => (
        <View style={{
            borderWidth: 0.5,
            borderColor: '#3b3b3b',
            marginHorizontal: 15,


        }} />
    )
    return (
        <View
            className='max-w-sm border border-gray-700/30 rounded-lg bg-white dark:bg-zinc-800 '>
            <View>
                <View className='flex flex-row items-center justify-between px-2 py-2'>
                    <View className='flex flex-row items-center'>
                        <Image className='w-11 h-11 border border-b-gray-500 rounded-full' source={require('../assets/login.png')} />
                        <View className='mx-1'>
                            <Text className='text-base font-poppins font-bold'>Codebloded</Text>
                            <Text className='text-xs'>Gsoc@22 | Ex-sugar labs</Text>
                        </View>
                    </View>
                    <TouchableOpacity className='mr-2 dark:bg-slate-900/30 rounded-full px-1 py-1' >
                        <Entopy name='dots-three-horizontal' size={20} />
                    </TouchableOpacity>

                </View>
                {/* //thin divider */}
                <Divider />
                {/* post Content */}
                <View className='px-2 mt-1'>
                    <Text className='text-sm font-poppins'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        <TouchableOpacity>
                            <Text className='text-blue-200'>Read more</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                {/* PostImage */}
                <TouchableOpacity className='flex flex-row items-center justify-between px-4 py-4'>
                    <Image className='w-full h-60' source={require('../assets/login.png')} />
                </TouchableOpacity>
                {/* InterAction section */}
                <Divider />
                <View className='flex flex-row items-center justify-between'>
                    <View className='flex flex-row items-center justify-between px-3 py-3'>
                        <TouchableOpacity className='flex flex-row items-center justify-between px-2 '>
                            <Ionicons name='heart-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-row items-center justify-between px-2'>
                            <Ionicons name='chatbubble-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-row items-center justify-between px-2'>
                            <Ionicons name='ios-paper-plane-outline' size={25} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className='flex flex-row items-center justify-between pr-4'>
                        <Ionicons name='ios-bookmark-outline' size={25} />
                    </TouchableOpacity>
                </View>
                <Divider />
                {/* Likes */}
                <View className='flex flex-row items-center justify-between px-3'>
                    <Text className='text-sm font-poppins'>Liked by <Text className='font-bold'>Codebloded</Text> and <Text className='font-bold'>100 others</Text></Text>
                </View>
                {/* Comments */}
                <View className='flex flex-row items-center justify-between px-3 py-1'>
                    <Text className='text-sm font-poppins'><Text className='font-bold'>Codebloded</Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Text>
                </View>
                {/* View all comments */}
                <TouchableOpacity className='flex flex-row items-center justify-between px-3 py-1'>
                    <Text className='text-sm font-poppins text-blue-200'>View all 100 comments</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}

export default PostCard