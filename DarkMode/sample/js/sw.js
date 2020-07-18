const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;

darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) { // Dark
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else { // Light
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
});

function modeChange() {
	
    // チェックボックスの取得
    const btn = document.querySelector("#btn-mode");
    
    // チェックした時の挙動
    btn.addEventListener("change", () => {
      if (btn.checked == true) {
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
      } else {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
      }
    });

}


