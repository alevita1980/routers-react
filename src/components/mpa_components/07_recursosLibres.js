import Browser from "../common/browser";
import { useContext } from "react";
const IndexMPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="INDEX" />
      </h1>
    </div>
  );
};

const SignUpFormMPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="Sign Up Form!" />
      </h1>
    </div>
  );
};

const ProductsMPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="Products!" />
      </h1>
    </div>
  );
};


export {IndexMPAAuth, SignUpFormMPAAuth, ProductsMPAAuth};
