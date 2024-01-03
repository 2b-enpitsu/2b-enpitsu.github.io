// サンプルファイルリスト
const fileListData = [
    { name: 'ファイル1.txt', size: null, added: '2022-01-01' },
    { name: 'ファイル2.pdf', size: null, added: '2022-01-02' },
    // 他のファイルを追加する場合は、ここに追加してください
];

// ページが読み込まれたときに実行
document.addEventListener('DOMContentLoaded', function () {
    displayFileList(fileListData);

    // 検索機能を追加
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiles = fileListData.filter(file => file.name.toLowerCase().includes(searchTerm));
        displayFileList(filteredFiles);
    });
});

// ファイルリストを表示する関数
function displayFileList(files) {
    const fileListContainer = document.getElementById('fileList');
    fileListContainer.innerHTML = '';

    files.forEach(file => {
        const fileName = document.createElement('div');
        fileName.textContent = file.name;
        fileName.style.cursor = 'pointer'; // マウスオーバー時にカーソルを変更

        // ファイル名をクリックしたときの処理
        fileName.addEventListener('click', function () {
            downloadFile(file.name);
        });

        fileListContainer.appendChild(fileName);
    });
}

// ファイルをダウンロードする関数
function downloadFile(filename) {
    // ファイルの実際のパスに置き換える
    const fileUrl = `path/to/your/files/${filename}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    link.target = '_blank'; // クリックしたときに新しいタブまたはウィンドウで開く
    link.click();
}
