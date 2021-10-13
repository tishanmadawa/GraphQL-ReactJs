import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag'
import { graphql } from "react-apollo"
import { Link, hashHistory } from "react-router"
import query from "../queries/fetchSongs";
const SongCreate = ({ mutate }) => {
    const [title, setTitile] = useState("");
    useEffect(() => {

    }, [])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(mutate);
        mutate({
            variables: {
                title: title
            },
            refetchQueries: [{
                query
            }]
        }).then(() => {
            hashHistory.push('/');
        })
            .catch(() => {

            })

    }

    return (
        <div>
            <Link to="/">Back</Link>
            <h3>Create a New Song</h3>
            <form onSubmit={onSubmit}>
                <label>Song Title: </label>
                <input onChange={event => setTitile(event.target.value)} value={title} />
            </form>
        </div>
    );
};


const mutation = gql`
    mutation AddSong($title:String){
        addSong(title:$title){
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);