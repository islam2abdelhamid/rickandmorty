import styled from '@emotion/styled';

const StyledIndicator = styled.div<{ status: string }>`
  position: relative;
  display: flex;
  background-color: ${(props) => (props.status === 'Alive' ? 'green' : 'red')};
  border-radius: 50%;
  color: #fff;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    animation: ${(props) => (props.status === 'Alive' ? 'pulse 1s infinite' : 'none')};
    border-radius: 50%;
    border: ${(props) => (props.status === 'Alive' ? ' 2px solid green' : 'none')};
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    60% {
      transform: scale(1.2);
      opacity: 0.4;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
`;

const Indicator = ({ status }: { status: string }) => {
  return <StyledIndicator status={status} />;
};

export default Indicator;
