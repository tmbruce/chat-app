// Temporary ChatThreadCard for testing. Will be replaced with message.type .ts later
// TODO: Replace with message type ts, remove existing references to ChatThreadCard(Type)
export interface ChatThreadCard {
  name: string;
  message: string;
  date: string;
  messageRead: boolean | number;
  threadId: string;
}
