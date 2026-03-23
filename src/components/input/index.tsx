import { TextInput, TextInputProps } from "react-native"
import { styles } from "./styles";
import { Colors } from '../../constants/colors';

type Props = TextInputProps & {
    placeholder: string;
}

export function Input({...rest}: Props) {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={Colors.black}
            {...rest}
        />
    )
}