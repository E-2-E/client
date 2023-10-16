import TopStat from "../stat/Topstat";
import "./homepage.css";

export default function HomePage() {
  return (
    <div>
      <TopStat />
      <div className="homepage">
        <div className="homepage-content">
          <h1>Welcome to VVIT Alumni Network</h1>
          <p>
            Connect with fellow alumni on VVIT Alumni Network and explore
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
