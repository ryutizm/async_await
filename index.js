// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const getGitUsername = async () => {
  const message = "GitのユーザーIDは";
  const url = 'https://api.github.com/users/ryutizm';
  
  const json = await fetch(url)
      .then(res => {
        console.log("これは非同期処理成功時のメッセージです。")
        return res.json();
      }).catch(error => {
        console.error("これは非同期処理失敗時のメッセージです。", error)
        return null
      });
  
  const username = json.login
  console.log(message + username)
}

getGitUsername();