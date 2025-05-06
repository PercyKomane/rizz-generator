import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RizzCard from '../components/RizzCard';

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [rizzLines, setRizzLines] = useState<string[]>([]);

  const handleGenerate = () => {
    setRizzLines([...rizzLines, `Rizz line for: ${input}`]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Describe the situation..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="Generate Rizz" onPress={handleGenerate} />
      {rizzLines.map((line, index) => (
        <RizzCard key={index} text={line} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});