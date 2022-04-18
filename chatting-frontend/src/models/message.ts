export interface Message {
  id: string;
  text?: string;
  isMedia?: boolean;
  mediaType?: string;
  userId?: string;
  chatroomId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
