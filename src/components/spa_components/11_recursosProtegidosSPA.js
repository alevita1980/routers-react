import Browser from "../common/browser";

const UserInfoSPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "User Info" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

const WishlistSPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "Wishlist" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

const CartSPAAuth = (props) => {
  const auth = props.auth
  return (
    <div>
      <h1>
        <Browser content={auth? "Cart Products" : "❌ Recurso restringido"} />
      </h1>
    </div>
  );
};

export {UserInfoSPAAuth, WishlistSPAAuth, CartSPAAuth};