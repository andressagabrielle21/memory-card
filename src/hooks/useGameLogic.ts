import { useEffect, useState } from "react";
import type { ICards } from "../App";

export const useGameLogic = (cardValues: string[]) => {
    const [flippedCard, setFlippedCard] = useState<number[]>([]);
    const [cards, setCards] = useState<ICards[]>([])
    const [matchCards, setMatchCards] = useState<number[]>([]);
    const [moves, setMoves] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [locked, setLocked] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean> (false);

    // To shuffle the icons arrays
    const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled;
    }

    const initializeGame = () => {
        const shuffledCards = shuffleArray(cardValues);

        const finalCards = shuffledCards.map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
        }));

        setMoves(0);
        setScore(0);
        setMatchCards([]);
        setFlippedCard([]);
        setCards(finalCards);
        setGameOver(false);
        setLocked(false);
    }

    useEffect(() => {
        initializeGame();
    }, []);

    // const isGameOver: boolean = matchCards.length === cardValues.length;

    const handleCardClick = (card: ICards) => {
        // Don't allow clicking when card is flipped or matched
        if (card.isFlipped || card.isMatched || locked || flippedCard.length === 2) {
        return;
        } 
        // Update card flipped state
        const newCards = cards.map((item) => {
        if(item.id === card.id) {
            return {...item, isFlipped: true};
        } else {
            return item;
        }
        });

        setCards(newCards);

        const newFlippedCard = [...flippedCard, card.id];
        setFlippedCard(newFlippedCard);

        if (flippedCard.length === 1) {
        setLocked(true);
        setMoves(moves + 1);
        const firstCard: ICards = {};

        firstCard.value = cards[flippedCard[0]].value;
        firstCard.id = flippedCard[0];


        if (score === 7) {
            setGameOver(true);
        }
        

        if (firstCard.value === card.value) {
            setTimeout (() => {
            setScore(score + 1);
            setMatchCards((prev) => [...prev, firstCard.id, card.id]);
            setLocked(false);

            setCards((prev) => prev.map((item) => {
                if(item.id === card.id || item.id === firstCard.id) {
                return {...item, isMatched: true};
                } else {
                return item;
                }
            }));
            setFlippedCard([]);
            }, 400)

        } else {
            setTimeout(() => {
            setLocked(false);
            const flipBackCards = newCards.map((item) => {
                if (newFlippedCard.includes(item.id) || item.id === card.id) {
                return {...item, isFlipped: false};
                } else {
                return item;
                }
            })
            setCards(flipBackCards);
            setFlippedCard([]);
            }, 1500)
        }

        }
    }

    return {cards, moves, score, initializeGame, handleCardClick, gameOver}
}