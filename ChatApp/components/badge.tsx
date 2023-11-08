import React from 'react';
import {Text, View} from 'react-native';

interface BadgeProps {
  read?: boolean | number;
}

const Badge: React.FC<BadgeProps> = ({read}) => {
  if (read === true || read === 0) {
    return null;
  }
  return (
    <View>
      <View
        testID="badgeView"
        style={{
          position: 'absolute',
          top: -62,
          left: -1,
          backgroundColor: '#007AFF',
          borderRadius: 21 / 2,
          borderColor: 'white',
          borderWidth: 2,
          width: 21,
          height: 21,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          testID="badgeText"
          style={{
            color: 'white',
            fontSize: 9,
            fontWeight: 'bold',
          }}>
          {typeof read === 'number' ? (read && read > 99 ? '99' : read) : null}
        </Text>
      </View>
    </View>
  );
};

export default Badge;
