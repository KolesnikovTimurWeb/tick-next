import { useMemo } from "react";
import Post from "./Post";
interface PostsListProps{
   data:any
}
export const PostsList = ({ data }:PostsListProps) => {
   console.log("PostsList")


   const postsList = useMemo(() => 
     data?.map((item) => (
       <div key={item.title}>  {/* Assuming `item.id` is unique */}
         <Post item={item} />
       </div>
     )),
     []
   );
 
   return <div>{postsList}</div>;
 };
