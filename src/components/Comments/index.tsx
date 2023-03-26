import * as Interfaces from "./interfaces";
import { CommentsMobile } from "./Mobile";
import { CommentsDesktop } from "./Desktop";

export const Comments = ({ data, name }: Interfaces.ICommentsData) => {
  switch (name) {
    case "mobile":
      return (
        <>
          <CommentsMobile data={data} />
        </>
      );
    case "desktop":
      return (
        <>
          <CommentsDesktop data={data} />
        </>
      );

    default:
      return null;
  }
};
