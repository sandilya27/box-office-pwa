import styled from "styled-components";

const Deatails = ({ status, premiered, network }) => {
  return <DetailsWrapper>
    <p>Status: {status}</p>
    <p>Premiered: {premiered} {!!network && `on ${network.name}` }</p>

  </DetailsWrapper>;
};

export default Deatails;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;