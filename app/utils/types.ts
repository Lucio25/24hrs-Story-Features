export type Story = {
  id: string;
  image: string; 
  createdAt: number; 
  expiresAt: number; 
  userId: string;
};

export type StoryList = {
    [key: string]: Story;
}