import React, {Component} from 'react';
import {connect} from 'react-redux';  //Connects a React component to a Redux store
import {selectSong} from '../actions';

class SongList extends Component {
    
    renderList() {
        // 1st return, return the new array
        return this.props.songs.map( (song) => {
            // 2nd return, return the jsx for indivisual song in that array
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                                                                            {/* calling Action creator */}
                        <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

// Configuring Connect with MapStateToProps, to get data from provider
// we configure connect() by passing below function as 1st argument
const MapStateToProps = (state) => {
    // object we are returning from MapStateToProps() function is going to show up as 'props' inside our component
    // i.e in songList component      this.props is equal to {songs: state.songs}
    
    return {songs: state.songs}; //key value pair
}


// React Redux provides a connect function for you to connect your component to the store.
export default connect(MapStateToProps, {selectSong: selectSong} ) (SongList) ;

// example for understanding above syntax
// function connect() {
//     return function() {
//         return 'Hello world';
//     }
// }

// connect() // no o.p
// connect() () // Hello world  
// connect(): it returns a fuction & using 2nd () we invoke that function