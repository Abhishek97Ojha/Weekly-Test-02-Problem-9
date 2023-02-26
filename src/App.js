import "./App.css";
import Brands from "./components/Brands";
import Details from "./components/Details";
import Empty from "./components/Empty";
import Heading from "./components/Heading";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Story from "./components/Story";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Mobile />
      <Details
        heading1="feel special"
        heading2="more often."
        subHeading="exclusive rewards for paying your bills"
        para1="every time you pay your credit card bills on CRED, you receive CRED coins."
        para2="you can use these to win exclusive rewards or get special access to"
        para3="curated products and experiences. on CRED, good begets good."
        background="https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg"
        name="Explore rewards"
      />
      <Brands />
      <Details
        heading1="we take your money"
        heading2="matters seriously."
        subHeading="so that you don't have to."
        para1="never miss a due date with reminders to help you pay your bills on time,"
        para2="instant settlements mean you never wait for your payments to go through"
        para3="and statement analysis lets you know where your money goes, always."
        background="https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg"
        name="Experience the upgrade"
      />
      <Empty />
      <Details
        heading1="security first."
        heading2="and second."
        subHeading="what's yours remains only yours."
        para1="CRED ensures that all your personal data and transactions are encrypted,"
        para2="and secured so what’s yours remains only yours. there's no room for"
        para3="mistakes because we didn’t leave any."
        background="https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg"
        name="Become a member"
      />
      <Story />
      <Rating />
    </div>
  );
}

export default App;
