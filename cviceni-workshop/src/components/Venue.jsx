export const Venue = (props) => {
  return (
    <>
      <p>Místo konání: {props.data.data.venue.name}</p>;
    </>
  );
};
