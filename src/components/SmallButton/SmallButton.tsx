//create a resuable button that is 40% width and ca take in color, title props
import { TouchableOpacity, Text } from 'react-native';

interface SmallButtonProps {
  color: string;
  title: string;
  onPress?: () => void;
}

const SmallButton = ({color, title, onPress}: SmallButtonProps) => {
  return (
    <TouchableOpacity  
      style={{
        backgroundColor: color,
        width: '45%',
        padding:20,
        borderRadius:40
      }}
      onPress={onPress}
    >
      <Text style={{color:'#fff', textAlign:'center', fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  )
}
export default SmallButton;