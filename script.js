var objects = [
    {
        sentence:'有名なネズミのキャラクターの名前は？',
        answer:'ミッキーマウス'
    },
    {
        sentence:'世界で一番最初にできたディズニーリゾートは？',
        answer:'カリフォルニアディズニーランド'
    },
    {
    sentence:'グーフィーは何の動物がモデルでしょうか？',
    answer:'狼'
    },
    {
        sentence:'硬水と軟水。日本ではどちらの水がよく使用されているでしょうか？',
        answer:'軟水'
    },
    {
        sentence:'硬水に豊富に含まれている成分は？',
        answer:'マグネシウム、カルシウム'
    },
];
function checkAnswer(input) {
    var isCorrect = false;
    if(input == this.answer) {
        isCorrect = true;
    }
    return isCorrect;
}

function getObjects() {
 for(var i = 0; i < objects.length; i++) {
     var object = objects[i];
     object.check = checkAnswer;
 }
 return objects;
}