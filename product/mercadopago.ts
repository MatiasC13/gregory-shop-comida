export  function getInitPoint(cart,user, url) {
 console.log(
   JSON.stringify({
     cart,
     user,
   })
 );
 
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      cart,
      user
    }),
    headers: { "Content-Type": "application/json" },
  });
}
