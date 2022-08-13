import Browser from "../common/browser";

const UserInfoMPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "User Info" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

const WishlistMPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "Wishlist" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

const CartMPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "Cart Products" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

export {UserInfoMPAAuth, WishlistMPAAuth, CartMPAAuth};