import React from 'react';
import {Text, View} from 'react-native';

interface BadgeProps {
  read?: boolean | number;
}

const Badge: React.FC<BadgeProps> = ({read}) => {
  return (
    <View>
      {!read || typeof read === 'number' ? (
        <View
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
            style={{
              color: 'white',
              fontSize: 9,
              fontWeight: 'bold',
            }}>
            {typeof read === 'number'
              ? read && read > 99
                ? '99'
                : read
              : null}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Badge;
