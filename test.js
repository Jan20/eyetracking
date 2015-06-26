var data = [["Minsk",100000], ["Riga",200000]];

window.exportData = function exportData() {
    alasql("SELECT * INTO CSV('test.csv',{headers:true}) FROM ?",[data]);
    //alasql('SELECT * INTO CSV("test.csv". {headers:true}) FROM ?',[data]);
}

