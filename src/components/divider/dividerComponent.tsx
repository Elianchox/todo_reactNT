import { View } from 'react-native'
import React from 'react'

interface DividerProps {
  y?: number;
  x?: number;
}
export const Divider = ({ y = 0, x = 0 }: DividerProps) => {
  return (
    <View style={{ height: y, width: x }} />
  )
}