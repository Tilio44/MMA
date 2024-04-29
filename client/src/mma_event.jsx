import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/events')
            .then(response => {
                setEvents(response.data.events);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des événements MMA</h1>
            <table>
                <thead>
                    <tr>
                        <th>Match</th>
                        <th>Date de début</th>
                        <th>Cotes</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.name}>
                            <td><Link to={`/events/${encodeURIComponent(event.name)}/${encodeURIComponent(JSON.stringify(event.odds))}`}>{event.name}</Link></td>
                            <td>{new Date(event.start_datetime).toLocaleString()}</td>
                            <td>{Object.entries(event.odds).map(([fighter, odds]) => `${fighter}: ${odds}`).join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventList;
