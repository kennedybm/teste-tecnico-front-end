export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentsData {
  data: Array<IComments>;
  name?: string;
}
