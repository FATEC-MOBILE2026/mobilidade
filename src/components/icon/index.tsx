import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface IconProps {
  name: React.FC<SvgProps>; 
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function Icon({ name: IconComponent, size = 40, color, style }: IconProps) {
  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center' }, style]}>
      <IconComponent 
        width={size} 
        height={size} 
        fill={color}
      />
    </View>
  );
}