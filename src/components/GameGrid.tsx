import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const length = games.length;
  //   const skeletons = Array.from({ length }, (_, index) => index + 1);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} padding={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
