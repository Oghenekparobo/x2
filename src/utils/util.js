export const mapVoteCount = (voteCount, totalVote, newTotalVote) => {
  const clampedVoteCount = Math.min(Math.max(voteCount, 0), totalVote);

  const mappedValue = (clampedVoteCount / totalVote) * newTotalVote;

  return mappedValue;
};

export const voteCountFixed = (banner_vote_count) => {
  return banner_vote_count.toFixed(1);
};

export const voteAverage = (banner_vote_averaged) => {
  return (banner_vote_averaged / 10) * 100;
};
