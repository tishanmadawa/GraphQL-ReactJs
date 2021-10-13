import React, { useEffect, useState } from 'react';

const SongCreate = () => {
    const [title, setTitile] = useState("");
    useEffect(() => {

    }, [])
    return (
        <div>
            <h3>Create a New Song</h3>
            <form>
                <label>Song Title: </label>
                <input onChange={event => setTitile(event.target.value)} value={title} />
            </form>
        </div>
    );
};

export default SongCreate;