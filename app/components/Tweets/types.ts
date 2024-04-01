export interface User {
  _id: string;
  email: string;
  username: string;
  passwordHash?: string;
  profileInfo?: {
    fullName?: string;
    bio?: string;
    location?: string;
  };
  img?: string;
  followers?: string[];
  following?: string[];
}

export interface Tweet {
  authorId: string | User;
  content: string;
  createdAt: string;
  likes: string[];
  retweets: string[];
  updatedAt: string;
  _id: string;
  img?: string;
}

export interface APIResponse {
  tweets: Tweet[];
}
