function urlSet() {
    let key = document.getElementById('APIKey').value;
    let url = "https://api.trello.com/1/authorize?return_url=http://127.0.0.1:5500/boards.html&scope=read,write,account&expiration=1hour&name=Trello_API_Projektmunka&key=" + key + "&response_type=token";
    window.localStorage.setItem('key', key);
    document.getElementById('loginButton').href = url;
}