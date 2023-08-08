import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-100"
          src='https://cdn.discordapp.com/attachments/808418993446060052/1138484989789487136/Temos_mais.png' height={500}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;