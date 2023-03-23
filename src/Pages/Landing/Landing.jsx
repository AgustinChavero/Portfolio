import ImageProfile from "./Components/ImageProfile";
import NameProfile from "./Components/NameProfile";
import FullStack from "./Components/FullStack";
import Contacts from "./Components/Contacts";

function Landing() {
  return (
    <div className="overflow-hidden pt-10">
      <div className="flex justify-center rounded-full px-5">
        <ImageProfile />
      </div>
      <NameProfile />
      <FullStack />
      <Contacts />
    </div>
  );
}

export default Landing;
