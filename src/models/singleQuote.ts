export interface SingleQuote {
  id: string;
  quote: string;
  author: string;
  comments: number;
  likesCount: number;
  postedBy: PostedBy;
  postedOn: string;
  likedByYou: boolean;
}

type PostedBy = {
  // userId: string;
  firstname: string;
  lastname: string;
};
