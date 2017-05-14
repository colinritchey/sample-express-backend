export const fetchUser = (user) => (
  $.ajax({
    url: 'api/users',
    data: { gitInfo: user }
  })
);
