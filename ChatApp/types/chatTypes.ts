// Temporary ChatThreadCard for testing. Will be replaced with ts message type later
// TODO: Replace with ts message type, remove existing references to ChatThreadCard(Type)
export interface ChatThreadCard {
  name: string;
  message: string;
  date: string;
  messageRead: boolean | number;
  threadId: string;
}
