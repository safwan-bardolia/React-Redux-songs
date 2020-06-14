// Action Creator
export const selectSong = (song) => {
    // Returning an action
    return {
        //this object must have 'type' property, and 'payload' propery is optional
        type: 'SONG_SELECTED',
        payload: song
    };
}

// name export: it allows us to export many function from single file
// so write export before const <function name> i.e export const selectSong = (song) => {}

// default export
// export default selectSong