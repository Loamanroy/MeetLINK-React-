const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

let initializeState = {

    MainProfile: [
        {
            name: "Timur Tochiev",
            dob: "13 october",
            edu: "College Tsaritsyno",
            pw: "barkinxo.ru",
            src: "https://sun9-22.userapi.com/impg/c858528/v858528858/106fb2/5nIP7pl3Khc.jpg?size=200x0&quality=90&sign=95ecd47f30a87dacd6041211c5170ba3"
        }],
    PostsData: {
        posts: [
            {id: 1, message: "index", submessage: "some submessage", likes: 30, dislikes: 1},
            {id: 2, message: "Hi", submessage: "some submessage", likes: 30, dislikes: 1},
            {id: 3, message: "Hi", submessage: "some submessage", likes: 30, dislikes: 1},
            {id: 4, message: "Hi", submessage: "some submessage", likes: 30, dislikes: 1},
            {id: 5, message: "Hi", submessage: "some submessage", likes: 2, dislikes: 1},
            {id: 6, message: "Hi", submessage: "some submessage", likes: 30, dislikes: 1},
        ],
    },
    newPostText: '',
}

const ProfileReducer = (state = initializeState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likes: 1,
                dislikes: 0,
            };
            let unshift = state.PostsData.posts.unshift(newPost);
            return {
                ...state,
                unshift,
                newPostText: '',
            };
        }
        case CHANGE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText) => ({type: CHANGE_NEW_POST_TEXT, newText:newText})

export default ProfileReducer;
