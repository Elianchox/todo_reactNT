import { View, Text } from 'react-native'
import React from 'react'
import { Welcome } from '@screens/index'
import { IndexNavigation } from 'routes'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <IndexNavigation />
    </NavigationContainer>
  )
}

export default App