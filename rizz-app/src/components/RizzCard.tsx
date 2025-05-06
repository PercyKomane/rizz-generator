import { Card, Paragraph } from 'react-native-paper';

export default function RizzCard({ text }: { text: string }) {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Paragraph>{text}</Paragraph>
      </Card.Content>
    </Card>
  );
}