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
        }
      }

`;

// const addBookMutation = gql`
//     mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
//         addBook(name: $name, genre: $genre, authorId: $authorId){
//             name
//             id
//         }
//     }
// `;

export const getBookQuery = gql`
      query Book($id : ID ){
        book(id:$id){
          id
          title
          genre
          author
          description
        }
      }

`;
