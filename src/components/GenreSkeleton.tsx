import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      {skeletons.map((s) => (
        <Box key={s} mr={4} display="flex" flexDirection="row" paddingY={"5px"}>
          <Skeleton
            height={"30px"}
            width={"35px"}
            borderRadius={8}
            marginRight={"3px"}
          />
          <SkeletonText mt={3} noOfLines={1} width={"50px"} />
        </Box>
      ))}
    </>
  );
};

export default GenreSkeleton;
