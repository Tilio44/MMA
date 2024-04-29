import React from 'react';

const EventList = () => {
    const data = {
        "events": [
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755399",
                "name": "Dione Barbosa vs Ernesta Kareckaite",
                "start_datetime": "2024-05-04T22:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                    "Barbosa": 1.5,
                    "Kareckaite": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755400",
                "name": "Alessandro Costa vs Kevin Borjas",
                "start_datetime": "2024-05-04T22:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Costa": 1.5,
                  "Borjas": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755401",
                "name": "Joaquim Silva vs Drakkar Klose",
                "start_datetime": "2024-05-04T23:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Silva": 1.5,
                  "Klose": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755402",
                "name": "Joanderson Brito vs Jack Shore",
                "start_datetime": "2024-05-05T01:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Brito": 1.5,
                  "Shore": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755403",
                "name": "Paul Craig vs Caio Borralho",
                "start_datetime": "2024-05-05T02:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Craig": 1.5,
                  "Borralho": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755404",
                "name": "Elves Brener vs Myktybek Orolbay Uulu",
                "start_datetime": "2024-05-05T00:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Brener": 1.5,
                  "Uulu": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755405",
                "name": "Jean Silva vs William Gomis",
                "start_datetime": "2024-05-05T00:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Silva": 1.5,
                  "Gomis": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755406",
                "name": "Karolina Kowalkiewicz vs Jasmin Lucindo",
                "start_datetime": "2024-05-05T00:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Kowalkiewicz": 1.5,
                  "Lucindo": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755407",
                "name": "Anthony Smith vs Vitor Petrino",
                "start_datetime": "2024-05-05T02:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Smith": 1.5,
                  "Petrino": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755409",
                "name": "Alexandre Pantoja vs Steve Erceg",
                "start_datetime": "2024-05-05T03:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Pantoja": 1.5,
                  "Erceg": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755413",
                "name": "Rani Yahya vs Victor Henry",
                "start_datetime": "2024-04-27T22:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Yahya": 1.5,
                  "Henry": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755414",
                "name": "Ivana Petrovic vs Na Liang",
                "start_datetime": "2024-04-27T20:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Petrovic": 1.5,
                  "Liang": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43755415",
                "name": "Gabriel Benitez vs Hayisaer Maheshate",
                "start_datetime": "2024-04-27T20:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Benitez": 1.5,
                  "Maheshate": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43776883",
                "name": "Ryan Spann vs Bogdan Guskov",
                "start_datetime": "2024-04-28T00:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Spann": 1.5,
                  "Guskov": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43776884",
                "name": "Tim Means vs Uros Medic",
                "start_datetime": "2024-04-27T23:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Means": 1.5,
                  "Medic": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43776885",
                "name": "Ariane Lipski vs Karine Silva",
                "start_datetime": "2024-04-28T00:00:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Lipski": 1.5,
                  "Silva": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43777451",
                "name": "Austin Hubbard vs Michal Figlak",
                "start_datetime": "2024-04-27T21:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Hubbard": 1.5,
                  "Figlak": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43777452",
                "name": "Austen Lane vs Jhonata Diniz",
                "start_datetime": "2024-04-27T23:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Lane": 1.5,
                  "Diniz": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43777453",
                "name": "Gabriel Green vs James Llontop",
                "start_datetime": "2024-04-27T20:40:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Green": 1.5,
                  "Llontop": 2.8
                }
              },
              {
                "bet_allowed": true,
                "bettable": true,
                "id": "43777454",
                "name": "Dontale Mayes vs Caio Machado",
                "start_datetime": "2024-04-27T21:20:00Z",
                "state": "upcoming",
                "type": "mma_match",
                "odds": {
                  "Mayes": 1.5,
                  "Machado": 2.8
                }
              }
            
        ],
        "pagination": {
            "next_page": "?state=upcoming&type=mma_match&type_domain=mma&type_scope=single_event&sort=id&limit=20&with_new_type=False&include_hidden=False&pagination_last_id=43777454"
        }
    };

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
                  {data.events.map(event => (
                      <tr key={event.id}>
                          <td>{event.name}</td>
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