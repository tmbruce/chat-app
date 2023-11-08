export interface MessageContent {
  text?: string;
  attachments?: Attachment[];
}
export interface AttachmentMetadata {
  filename: string;
  filesize: number;
  filetype: string;
  thumbnailUrl?: string;
}
export interface Attachment {
  type: 'image' | 'video' | 'audio';
  url: string;
  metadata?: AttachmentMetadata;
}
export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  threadId: string;
  timestamp: Date;
  content: MessageContent;
  contentType: 'mixed' | 'text' | 'image' | 'video' | 'audio';
  status: 'sent' | 'delivered' | 'read';
  isOutgoing: boolean;
  readReceiptRequested: boolean;
  readTimestamp?: Date;
  deliveredTimestamp?: Date;
  error?: string;
  signature?: string;
  encryptionType: string;
  messageKeyId: string;
  sequenceNumber: number;
  previousChainLength: number;
  publicKey: string;
  header: string;
  headerKey: string;
}
