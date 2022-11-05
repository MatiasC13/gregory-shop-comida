export  function getInitPoint(cart,user, url) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      cart,
      user
    }),
    headers: { "Content-Type": "application/json" },
  });
}
