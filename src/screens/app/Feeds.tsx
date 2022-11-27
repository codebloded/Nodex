import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'

const Feeds = () => {
    return (
        <SafeAreaView className="flex-1 font bg-white dark:bg-darkPaperBg" >
            <View className='my-10 mx-2'>
                <PostCard />
            </View>
        </SafeAreaView>
    )
}

export default Feeds