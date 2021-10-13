import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from "react-router"
import query from "../queries/fetchSongs";

class SongList extends Component {
    renderSongs() {
        const { songs } = this.props.data
        return songs.map((song, index) => {
            return <li key={song.id} className="collection-item">
                {song.title}
            </li>
        })
    }
    render() {
        const { loading } = this.props.data;
        if (loading) { return <div>loading ...</div> }
        return <div>
            <ul className="collection">
                {this.renderSongs}
            </ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
    }
}



export default graphql(gql)(SongList);