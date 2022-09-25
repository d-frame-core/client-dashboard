
//Importing the Required Libraries and the Components
import { Magic } from 'magic-sdk';
import axios from 'axios';

//Creating a Object as Magic value with the magic-sdk
const magic = new Magic("pk_live_49FDF38AE6707E0B");

//Creating a Object as saveUser 
const saveUser= async () => {
  const user = await magic.user.getMetadata();
  axios
  .post(`http://54.167.69.158:4000/profile/${user.publicAddress}`, {
    wallet_address:user.publicAddress,
    company_name:"",
    company_address1:"",
    company_address2:"",
    company_type:"",
    company_email:user.email,
    phone_number:"",
    balance:330
})
  .catch((err)=>{console.log("ye error magic link ki hai",err)});
}
//Creating a Object as checkUser
export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    console.log(user.publicAddress)
    return cb({ isLoggedIn: true, email: user.email, address:user.publicAddress });
  }
  return cb({ isLoggedIn: false });
};
//Creating a Object as checkUser
export const loginUser = async (email, cb) => {
  await magic.auth.loginWithMagicLink({ email });
  saveUser();
  const user = await magic.user.getMetadata();

  
// // Construct the user's claim
//   const claim = JSON.stringify({
//     iat: Math.floor(Date.now() / 1000),
//     ext: Math.floor(Date.now() / 1000) + "lifespan",
//     iss: `did:ethr:${user.publicAddress}`,
//     nbf: Math.floor(Date.now() / 1000),
//   });

//   // Sign the claim with the user's private key
//   // (this way the claim is verifiable and impossible to forge).
//   const proof = sign(claim);

//   // Encode the DIDToken so it can be transported over HTTP.
//   const DIDToken = btoa(JSON.stringify([proof, claim]));

//   console.log(DIDToken);

  return cb({ isLoggedIn: true,email: user.email, address:user.publicAddress });
};
//Creating a Object as checkUser
export const logoutUser = async () => {
  await magic.user.logout();
};
