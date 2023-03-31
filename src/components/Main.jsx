import TrendingNow from "./TrendingNow";
import NewRelases from "./NewReleases";
import { Container } from "react-bootstrap";
import WatchItAgain from "./WatchItAgain";

const Main = () => {
  return (
    <Container fluid>
      <TrendingNow />
    <NewRelases />
    <WatchItAgain />
    </Container>
  );
};

export default Main;
