import React from 'react';
import {connect} from 'react-redux';

                // destructuring
const SongDetail = ({song}) => {
    if(song===null){
        return <div>select any song</div>
    }else {
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    {song.title}
                     <br/>
                    {song.duration}
                </p> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {song:state.selectedSong};
}

export default connect (mapStateToProps) (SongDetail);