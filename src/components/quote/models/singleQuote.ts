export type SingleQuote = {
  id: string;
  quote: string;
  author: string;
  numberOfComments: number;
  numberOfLikes: number;
  postedBy: PostedBy;
  postedOn: string;
  likedByYou: boolean;
};

type PostedBy = {
  firstname: string;
  lastname: string;
};
