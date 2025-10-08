export default function loginpage() {
  return `
    <form action="/submit" method="post">
        <input type="text" name= "username" placeholder="Enter username" />
        <input type="password" name= "password" placeholder="Enter password" />
        
        <button>login</button>
        </form>`;
}
