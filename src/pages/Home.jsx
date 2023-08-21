import Container from "../components/Container";
import Chef from "./Chef";
import HeroArea from "./HeroArea";
import RecifeGallery from "./RecifeGallery";
import Banner from "./Banner";

const Home = () => {
  return (
    <Container>
      <div>
        <Banner></Banner>
        <HeroArea></HeroArea>
        <RecifeGallery></RecifeGallery>
        <Chef></Chef>
      </div>
    </Container>
  );
};

export default Home;
