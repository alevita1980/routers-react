import Browser from "../common/browser";
const IndexSPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="INDEX" />
      </h1>
    </div>
  );
};

const SignUpFormSPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="Sign Up Form!" />
      </h1>
    </div>
  );
};

const ProductsSPAAuth = () => {
  return (
    <div>
      <h1>
        <Browser content="Products!" />
      </h1>
    </div>
  );
};


export {IndexSPAAuth, SignUpFormSPAAuth, ProductsSPAAuth};
