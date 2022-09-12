interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  isReply?: boolean;
  replyingTo?: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export default IComment;
