import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// biasanya fetch dari API.
const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores laboriosam dolorum, porro at quaerat, ab repellat deleniti adipisci ex, eos eius nihil odit ratione exercitationem nam iure iusto. Excepturi exercitationem blanditiis possimus molestiae, enim temporibus at unde quis soluta! Voluptatibus consectetur quos doloribus iste commodi quis fugiat quaerat ex aut dolore, facere necessitatibus maxime tempora optio quas error repellat laudantium animi dolorem aspernatur? Iste ullam voluptatibus, reprehenderit, quaerat necessitatibus aspernatur cumque quas totam fuga vel quod eos possimus officia alias unde qui. Hic tempora labore ducimus illo harum molestiae quas dicta dolore. Suscipit natus voluptate nam, repellat doloremque odit.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slicing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores laboriosam dolorum, porro at quaerat, ab repellat deleniti adipisci ex, eos eius nihil odit ratione exercitationem nam iure iusto. Excepturi exercitationem blanditiis possimus molestiae, enim temporibus at unde quis soluta! Voluptatibus consectetur quos doloribus iste commodi quis fugiat quaerat ex aut dolore, facere necessitatibus maxime tempora optio quas error repellat laudantium animi dolorem aspernatur? Iste ullam voluptatibus, reprehenderit, quaerat necessitatibus aspernatur cumque quas totam fuga vel quod eos possimus officia alias unde qui. Hic tempora labore ducimus illo harum molestiae quas dicta dolore. Suscipit natus voluptate nam, repellat doloremque odit.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: "Make me a coffee",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores laboriosam dolorum, porro at quaerat, ab repellat deleniti adipisci ex, eos eius nihil odit ratione exercitationem nam iure iusto. Excepturi exercitationem blanditiis possimus molestiae, enim temporibus at unde quis soluta! Voluptatibus consectetur quos doloribus iste commodi quis fugiat quaerat ex aut dolore, facere necessitatibus maxime tempora optio quas error repellat laudantium animi dolorem aspernatur? Iste ullam voluptatibus, reprehenderit, quaerat necessitatibus aspernatur cumque quas totam fuga vel quod eos possimus officia alias unde qui. Hic tempora labore ducimus illo harum molestiae quas dicta dolore. Suscipit natus voluptate nam, repellat doloremque odit.",
    date: sub(new Date(), { hours: 1 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // sebenernya gini juga udah beres, tapi kita coba logicnya disimpen disini.
    //
    // addPost: (state, action) => {
    //   state.push(action.payload);
    // }

    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare(title, content) {
      // karena initialState-nya object dan mau input object ke array of Object. maka isi payload-nya dijadiin object.
      //   return {
      //     payload: {
      //       id: nanoid(),
      //       title,
      //       content,
      //     },
      //   };
      // },

      // nyoba dengan masukin userID
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id == postId);

      if (existingPost) {
        // i actually dont understand this. fck me.
        // kan si reaction itu object, tapi kok dipanggil via index? [] idk.
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// kita bikin fecth nya disini
// jadi kalau ada perubahan structure di API, kita gausah cape2 ubah setiap componentnya.
// tinggal ini aja di edit.
export const getAllPosts = (state) => state.posts; // posts ini merupakan nama object di store. karena kita assign postsSlice ke store dnegan nama posts
export const { addPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
