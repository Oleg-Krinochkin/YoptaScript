var dictonary = [
			["break", "харэ"],
			["case", "лещ"],
			["catch", "гоп"],
			["continue", "двигай"],
			["debugger", "логопед"],
			["default", "понятие"],
			["delete", "ёбнуть"],
			["do", "крч"],
			["else", "иливжопураз"],
			["finally", "тюряжка"],
			["for", "го"],
			["function", "йопта"],
			["if", "вилкойвглаз"],
			["in", "в"],
			["instanceof", "внатуре"],
			["new", "гы"],
			["return", "отвечаю"],
			["switch", "пошерстим"],
			["this", "тырыпыры"],
			["throw", "пнх"],
			["try", "хапнуть"],
			["typeof", "чезажижан"],
			["var", "валио"],
			["void", "куку"],
			["while", "потрещим"],
			["with", "хзйопт"],
			["Abstract", "говнойбать"],
			["Boolean", "пацан"],
			["Byte", "семка"],
			["Char", "эээ"],
			["Class", "клёво"],
			["Const", "мусор"],
			["Double", "двойные"],
			["Enum", "еээ"],
			["export", "излабас"],
			["extends", "батя"],
			["final", "бачок"],
			["Float", "плавник"],
			["goto", "идинах"],
			["implements", "силикон"],
			["import", "спиздить"],
			["Int", "хуйня"],
			["interface", "хуёво"],
			["Long", "колонна"],
			["native", "братан"],
			["package", "клеёнка"],
			["private", "мой"],
			["protected", "подкрыша"],
			["public", "ебанное"],
			["Short", "пипин"],
			["static", "попонятия"],
			["super", "яга"],
			["synchronized", "вписон"],
			["throws", "плюнуть"],
			["transient", "ахз"],
			["volatile", "вписос"],
			["null", "нуллио"],
			["NaN", "гомункул"],
			["true", "трулио"],
			["false", "нетрулио"],
			[">", "пизже"],
			["<", "хуёвей"],
			[">=", "поцик"],
			["<=", "поц"],
			["==", "эквалио"],
			["=", "сука"],
			[";", " нах"],
//			["{", "типа"],
//			["}", "йоба"],
//			["(", "бля"],
//			[")", "йопт"],
			["!", "чобля"],
			["&&", "ичо"],
			["||", "иличо"],
            ["alert", "шухер"]
];

var magicYoptaBtn = document.getElementById('magicYoptaBtn').addEventListener('click', converter, false);
var jsOnChange = document.getElementById('jstoyopta').addEventListener('keyup', converter, false );

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function converter() {
    var jstoyopta = document.getElementById('jstoyopta').value;
   // var jsArray = jstoyopta.split (/\n| /);
    var i = 0;
    var yoptaNew = jstoyopta;
    for (i=0; i<dictonary.length; i++){
       yoptaNew = yoptaNew.replaceAll(dictonary[i][0], dictonary[i][1]);
    }
   
    document.getElementById('yopta').value = yoptaNew;
}