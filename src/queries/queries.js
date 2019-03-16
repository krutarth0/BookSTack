import { gql } from 'apollo-boost';

// const getAuthorsQuery = gql`
//     {
//         authors {
//             name
//             id
//         }
//     }
// `;

export const getBooksQuery = gql`
      query Books($search : String , $howmany : Int ){
        books(search : $search , howmany : $howmany){
          id
          title
          genre
          author
          description
          textSnippet
        }
      }

`;
export const getBookQuery = gql`
      query Book($id : ID ){
        book(id:$id){
          id
          title
          genre
          author
          description
          textSnippet
        }
      }

`;


export const AddPost = gql`
    mutation  addPost(title:String, by:String, content:String, datePosted:String, suggestions:Int){
        addPost(title: $title, by: $by, content: $content,datePosted:$datePosted,suggestions:$suggestions){
               _id
               title
               by
               datePosted
               suggestions
        }
    }
`;

export const AddComment = gql`
    mutation addComment($pid:String,$by:String,$message:String){
        addComment(pid: pid, by: $by, message: $message){
            pid
            by
            message
        }
    }
`;
