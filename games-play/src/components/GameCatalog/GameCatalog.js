import { useEffect, useState } from "react";

import * as gameService from "../../services/gameService";
import GameCard from "./GameCard";

const GameCatalog = ({
    navigationChangeHandler,
}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameCard key={game._id} game={game} navigationChangeHandler={navigationChangeHandler} />)
                : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    )
}

export default GameCatalog;