const userForm = (req, resp) => {
  resp.write(`<form action="submit" method="post">
        <label for="">name</label>
        <input type="text" name="name">
        <label for="">email</label>

        <input type="text" name="email">



        <button type="submit">submit</button>
    </form>`);
    resp.end();
};
module.exports = userForm;
