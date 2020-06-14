import {combineReducers} from 'redux';



// it return static list, generally we don't add static data in reducers,
// but this is the first redux-react app so...  
const songsReducer = () => {
    // return static array of object 
    return [
        { title: 'Saanson ke', duration: '4:03' },
        { title: 'Desi Desi', duration: '3:36' },
        { title: 'Lets Nacho', duration: '3:35' },
        { title: 'Suit Suit', duration: '3:10' }
    ];
}


// when our app 1st loaded then selectedSong is null
const selectedSongReducer = (selectedSong=null, action) => {
    //if type='SONG_SELECTED' then return song
    if(action.type==='SONG_SELECTED') {
        return action.payload;
    }else{
        return selectedSong;
    }   
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})