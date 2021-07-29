const alphabet = {
    "1": {
        "letter": "ا",
        "name": "alef",
        "english": "ah",
        "soundslike": "'ā' and initial vowels 'a', 'e' and 'o'",
        "initial": "ا",
        "middle": "ــا",
        "final": "ــا",
        "soundclip": "./assets/sounds/alef.mp3"
    },
    "2": {
        "letter": "ب",
        "name": "be",
        "english": "b",
        "soundslike": "b",
        "initial": "بــ",
        "middle": "ــبــ",
        "final": "ــب",
        "soundclip": "./assets/sounds/be.mp3"
    },
    "3": {
        "letter": "پ",
        "name": "pe",
        "english": "p",
        "soundslike": "p",
        "initial": "پــ",
        "middle": "ــپــ",
        "final": "ــپ",
        "soundclip": "./assets/sounds/pe.mp3"
    },
    "4": {
        "letter": "ت",
        "name": "te",
        "english": "t",
        "soundslike": "t",
        "initial": "تــ",
        "middle": "ــتــ",
        "final": "ــت",
        "soundclip": "./assets/sounds/te.mp3"
    },
    "5": {
        "letter": "ث",
        "name": "se",
        "english": "",
        "soundslike": "s, th",
        "initial": "ثــ",
        "middle": "ـثــ",
        "final": "ــث",
        "soundclip": "./assets/sounds/se.mp3"
    },
    "6": {
        "letter": "ج",
        "name": "jim",
        "english": "j",
        "soundslike": "j",
        "initial": "جــ",
        "middle": "ـجــ",
        "final": "ــج",
        "soundclip": "./assets/sounds/jim.mp3"
    },
    "7": {
        "letter": "چ",
        "name": "che",
        "english": "ch",
        "soundslike": "ch",
        "initial": "چــ",
        "middle": "ــچــ",
        "final": "ــچ",
        "soundclip": "./assets/sounds/che.mp3"
    },
    "8": {
        "letter": "ح",
        "name": "he",
        "english": "h",
        "soundslike": "soft h",
        "initial": "حــ",
        "middle": "ــحــ",
        "final": "ــح",
        "soundclip": "./assets/sounds/he.mp3"
    },
    "9": {
        "letter": "خ",
        "name": "khe",
        "english": "",
        "soundslike": "rough H",
        "initial": "خــ",
        "middle": "ــخــ",
        "final": "ــخ",
        "soundclip": "./assets/sounds/khe.mp3"
    },
    "10": {
        "letter": "د",
        "name": "dal",
        "english": "d",
        "soundslike": "d",
        "initial": "د",
        "middle": "ــد",
        "final": "ــد",
        "soundclip": "./assets/sounds/dal.mp3"
    },
    "11": {
        "letter": "ذ",
        "name": "zal",
        "english": "z",
        "soundslike": "z",
        "initial": "ذ",
        "middle": "ــذ",
        "final": "ــذ",
        "soundclip": "./assets/sounds/zal.mp3"
    },
    "12": {
        "letter": "ر",
        "name": "re",
        "english": "r",
        "soundslike": "rolled r",
        "initial": "ر",
        "middle": "ــر",
        "final": "ــر",
        "soundclip": "./assets/sounds/re.mp3"
    },
    "13": {
        "letter": "ز",
        "name": "ze",
        "english": "z",
        "soundslike": "z",
        "initial": "ز",
        "middle": "ــز",
        "final": "ــز",
        "soundclip": "./assets/sounds/ze.mp3"
    },
    "14": {
        "letter": "ژ",
        "name": "zhe",
        "english": "zh",
        "soundslike": "meaSUre",
        "initial": "ژ",
        "middle": "ــژ",
        "final": "ــژ",
        "soundclip": "./assets/sounds/zhe.mp3"
    },
    "15": {
        "letter": "س",
        "name": "sin",
        "english": "s",
        "soundslike": "s",
        "initial": "ســ",
        "middle": "ــســ",
        "final": "ــس",
        "soundclip": "./assets/sounds/sin.mp3"
    },
    "16": {
        "letter": "ش",
        "name": "shin",
        "english": "sh",
        "soundslike": "sh",
        "initial": "شــ",
        "middle": "ــشــ",
        "final": "ــش",
        "soundclip": "./assets/sounds/shin.mp3"
    },
    "17": {
        "letter": "ص",
        "name": "sād",
        "english": "s",
        "soundslike": "s",
        "initial": "صــ",
        "middle": "ــصــ",
        "final": "ــص",
        "soundclip": "./assets/sounds/sad.mp3"
    },
    "18": {
        "letter": "ض",
        "name": "zād",
        "english": "z",
        "soundslike": "z",
        "initial": "ضــ",
        "middle": "ــضــ",
        "final": "ــض",
        "soundclip": "./assets/sounds/zad.mp3"
    },
    "19": {
        "letter": "ط",
        "name": "tā",
        "english": "t",
        "soundslike": "t",
        "initial": "طــ",
        "middle": "ــطــ",
        "final": "ــط",
        "soundclip": "./assets/sounds/ta.mp3"
    },
    "20": {
        "letter": "ظ",
        "name": "zā",
        "english": "z",
        "soundslike": "z",
        "initial": "ظــ",
        "middle": "ــظــ",
        "final": "ــظ",
        "soundclip": "./assets/sounds/za.mp3"
    },
    "21": {
        "letter": "ع",
        "name": "‘ain",
        "english": "n/a",
        "soundslike": "ae",
        "initial": "عــ",
        "middle": "ــعــ",
        "final": "ــع",
        "soundclip": "./assets/sounds/ain.mp3"
    },
    "22": {
        "letter": "غ",
        "name": "ghain",
        "english": "n/a",
        "soundslike": "",
        "initial": "غــ",
        "middle": "ــغــ",
        "final": "ــغ",
        "soundclip": "./assets/sounds/ghain.mp3"
    },
    "23": {
        "letter": "ف",
        "name": "fe",
        "english": "f",
        "soundslike": "",
        "initial": "فــ",
        "middle": "ــفــ",
        "final": "ــف",
        "soundclip": "./assets/sounds/fe.mp3"
    },
    "24": {
        "letter": "ق",
        "name": "qāf",
        "english": "n/a",
        "soundslike": "deep in mouth k or g",
        "initial": "قــ",
        "middle": "ــقــ",
        "final": "ــق",
        "soundclip": "./assets/sounds/qaf.mp3"
    },
    "25": {
        "letter": "ک",
        "name": "kāf",
        "english": "k",
        "soundslike": "k",
        "initial": "کــ",
        "middle": "ــکــ",
        "final": "ــک",
        "soundclip": "./assets/sounds/kaf.mp3"
    },
    "26": {
        "letter": "گ",
        "name": "gāf",
        "english": "g",
        "soundslike": "g",
        "initial": "گــ",
        "middle": "ــگــ",
        "final": "ــگ",
        "soundclip": "./assets/sounds/gaf.mp3"
    },
    "27": {
        "letter": "ل",
        "name": "lām",
        "english": "l",
        "soundslike": "l",
        "initial": "لــ",
        "middle": "ــلــ",
        "final": "ــل",
        "soundclip": "./assets/sounds/lam.mp3"
    },
    "28": {
        "letter": "م",
        "name": "mim",
        "english": "m",
        "soundslike": "m",
        "initial": "مــ",
        "middle": "ــمــ",
        "final": "ــم",
        "soundclip": "./assets/sounds/mim.mp3"
    },
    "29": {
        "letter": "ن",
        "name": "nun",
        "english": "n",
        "soundslike": "n",
        "initial": "نــ",
        "middle": "ــنــ",
        "final": "ــن",
        "soundclip": "./assets/sounds/nun.mp3"
    },
    "30": {
        "letter": "و",
        "name": "vāv",
        "english": "v",
        "soundslike": "v",
        "initial": "و",
        "middle": "ــو",
        "final": "ــو",
        "soundclip": "./assets/sounds/vav.mp3"
    },
    "31": {
        "letter": "ه",
        "name": "he",
        "english": "h",
        "soundslike": "h",
        "initial": "هــ",
        "middle": "ــهــ",
        "final": "ــه",
        "soundclip": "./assets/sounds/heh.mp3"
    },
    "32": {
        "letter": "ی",
        "name": "ye",
        "english": "y, i",
        "soundslike": "y",
        "initial": "یــ",
        "middle": "ــیــ",
        "final": "ــی",
        "soundclip": "./assets/sounds/ye.mp3"
    }
}

const words1 = {
    "سلام": {
        "english": "salaam",
        "meaning": "hello",
        "type": "greeting"
    },
    "لطفا": {
        "english": "lotfan",
        "meaning": "please",
        "type": "greeting"
    },
    "متاسفم": {
        "english": "moteassefam",
        "meaning": "sorry",
        "type": "greeting"
    },
    "هفته": {
        "english": "hafte",
        "meaning": "week",
        "type": "noun"
    },
    "سال": {
        "english": "saal",
        "meaning": "year",
        "type": "noun"
    },
    "امروز": {
        "english": "emrooz",
        "meaning": "today",
        "type": "noun"
    },
    "فردا": {
        "english": "fardaa",
        "meaning": "tomorrow",
        "type": "noun"
    },
    "دیروز": {
        "english": "dirooz",
        "meaning": "yesterday",
        "type": "adv"
    },
    "ساعت": {
        "english": "saa'at",
        "meaning": "hour",
        "type": ""
    },
    "دقیقه": {
        "english": "daqiqe",
        "meaning": "minute",
        "type": ""
    },
    "توانستن": {
        "english": "tavaanestan",
        "meaning": "can",
        "type": "verb"
    },
    "انجام دادن": {
        "english": "anjaam daadan",
        "meaning": "do",
        "type": "verb"
    },
    "رفتن": {
        "english": "raftan",
        "meaning": "go",
        "type": "verb"
    },
    "آمدن": {
        "english": "aamadan",
        "meaning": "come",
        "type": "verb"
    },
    "خندیدن": {
        "english": "khandidan",
        "meaning": "laugh",
        "type": "verb"
    },
    "زیبا": {
        "english": "zibaa",
        "meaning": "beautiful",
        "type": "adj"
    },
    "خوب": {
        "english": "khoob",
        "meaning": "good",
        "type": "adj"
    },
    "کوچک": {
        "english": "koochak",
        "meaning": "small",
        "type": "adj"
    },
    "بله": {
        "english": "bale",
        "meaning": "yes",
        "type": ""
    },
    "خیر": {
        "english": "kheyr",
        "meaning": "no",
        "type": ""
    },
    "ساعتِ": {
        "english": "saa'at-e",
        "meaning": "o'clock",
        "type": ""
    },
    "استفاده کردن": {
        "english": "estefaade kardan",
        "meaning": "use",
        "type": ""
    },
    "درست کردن": {
        "english": "dorost kardan",
        "meaning": "make",
        "type": ""
    },
    "دشوار": {
        "english": "doshvaar",
        "meaning": "difficult",
        "type": ""
    },
    "زشت": {
        "english": "zesht",
        "meaning": "ugly",
        "type": ""
    },
    "ساده": {
        "english": "saade",
        "meaning": "easy",
        "type": ""
    },
    "بد": {
        "english": "bad",
        "meaning": "bad",
        "type": ""
    },
    "نزدیک": {
        "english": "nazdik",
        "meaning": "near",
        "type": ""
    },
    "خداحافظ": {
        "english": "khodaahaafez",
        "meaning": "goodbye",
        "type": ""
    },
    "دوشنبه": {
        "english": "doshanbe",
        "meaning": "Monday",
        "type": ""
    },
    "سه شنبه": {
        "english": "se shanbe",
        "meaning": "Tuesday",
        "type": ""
    },
    "چهارشنبه": {
        "english": "chaahaar-shanbe",
        "meaning": "Wednesday",
        "type": ""
    },
    "پنج شنبه": {
        "english": "panj shanbe",
        "meaning": "Thursday",
        "type": ""
    },
    "جمعه": {
        "english": "jome",
        "meaning": "Friday",
        "type": ""
    },
    "شنبه": {
        "english": "shanbe",
        "meaning": "Saturday",
        "type": ""
    },
    "یک شنبه": {
        "english": "yek shanbe",
        "meaning": "Sunday",
        "type": ""
    },
    "صفر": {
        "english": "sfr",
        "meaning": "zero",
        "type": "number"
    },
    "یک": {
        "english": "yek",
        "meaning": "one",
        "type": "number"
    },
    "دو": {
        "english": "do",
        "meaning": "two",
        "type": "number"
    },
    "سه": {
        "english": "se",
        "meaning": "three",
        "type": "number"
    },
    "چهار": {
        "english": "chaahaar",
        "meaning": "four",
        "type": "number"
    },
    "پنج": {
        "english": "panj",
        "meaning": "five",
        "type": "number"
    },
    "شش": {
        "english": "shesh",
        "meaning": "six",
        "type": "number"
    },
    "هفت": {
        "english": "haft",
        "meaning": "seven",
        "type": "number"
    },
    "هشت": {
        "english": "hasht",
        "meaning": "eight",
        "type": "number"
    },
    "نه": {
        "english": "noh",
        "meaning": "nine",
        "type": "number"
    },
    "ده": {
        "english": "dah",
        "meaning": "ten",
        "type": "number"
    },
    "قهوه": {
        "english": "qahve",
        "meaning": "coffee",
        "type": ""
    },
    "آبجو": {
        "english": "aabejo",
        "meaning": "beer",
        "type": ""
    },
    "چای": {
        "english": "chaay",
        "meaning": "tea",
        "type": ""
    },
    "شراب": {
        "english": "sharaab",
        "meaning": "wine",
        "type": ""
    },
    "آب": {
        "english": "aab",
        "meaning": "water",
        "type": ""
    },
    "گوشت گاو": {
        "english": "goosht-e gaav",
        "meaning": "beef",
        "type": ""
    },
    "گوشت خوک": {
        "english": "goosht-e khook",
        "meaning": "pork",
        "type": ""
    },
    "مرغ": {
        "english": "morq",
        "meaning": "chicken",
        "type": ""
    },
    "گوشت بره": {
        "english": "goosht-e barre",
        "meaning": "lamb",
        "type": ""
    },
    "ماهی": {
        "english": "maahi",
        "meaning": "fish",
        "type": ""
    },
    "رفیق": {
        "english": "refigh",
        "meaning": "friend",
        "type": ""
    },
    "ساحل": {
        "english": "saahel",
        "meaning": "beach",
        "type": ""
    },
    "درياچه": {
        "english": "daRyaachey",
        "meaning": "lake",
        "type": ""
    },
    "منزل / خونه": {
        "english": "manzil / khooney",
        "meaning": "house",
        "type": ""
    },
    "که": {
        "english": "ke",
        "meaning": "that",
        "type": ""
    },
    "با": {
        "english": "ba",
        "meaning": "with",
        "type": ""
    },
    "این": {
        "english": "in",
        "meaning": "this",
        "type": ""
    },
    "داغ": {
        "english": "dag",
        "meaning": "hot",
        "type": ""
    },
    "کلمه": {
        "english": "kalameh",
        "meaning": "word",
        "type": ""
    },

    "و": {
        "english": "va",
        "meaning": "and",
        "type": ""
    },
    "ما": {
        "english": "ma",
        "meaning": "we",
        "type": ""
    },
    "کجا": {
        "english": "kujaa",
        "meaning": "where",
        "type": ""
    },
    "چه": {
        "english": "cheh",
        "meaning": "what",
        "type": ""
    },
    "که": {
        "english": "ke",
        "meaning": "which",
        "type": ""
    },
    "به همین دلیل": {
        "english": "beh hamin daleel",
        "meaning": "why(give a reason)",
        "type": ""
    },
    "چگونه": {
        "english": "cheguneh",
        "meaning": "how",
        "type": ""
    },
    "که": {
        "english": "keh",
        "meaning": "who",
        "type": ""
    },
    "می دانم": {
        "english": "midanam",
        "meaning": "know",
        "type": ""
    },
    "بیشترین": {
        "english": "bistarin",
        "meaning": "the most",
        "type": ""
    },
    "مردم": {
        "english": "mardom",
        "meaning": "people",
        "type": ""
    },
    "روز": {
        "english": "rooz",
        "meaning": "day",
        "type": ""
    },
    "ساعت": {
        "english": "sa'at",
        "meaning": "now",
        "type": ""
    },
    "یادگیری": {
        "english": "yadgiri",
        "meaning": "learn",
        "type": ""
    },
    "هرگز": {
        "english": "hargez",
        "meaning": "never",
        "type": ""
    },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": "",
    //     "type": ""
    // },

}

const sentences1 = {
    "از دیدنت خوشحال شدم": {
        "english": "az didanat khoshhaal shodam",
        "meaning": "nice to meet you"
    },
    "صبح به خیر": {
        "english": "sobh be kheyr",
        "meaning": "good morning"
    },
    "بعدازظهر بخیر": {
        "english": "ba'd az zohr be kheyr",
        "meaning": "good afternoon"
    },
    "عصر به خیر": {
        "english": "asr be kheyr",
        "meaning": "good evening"
    },
    "شب به خیر": {
        "english": "shab be kheyr",
        "meaning": "good night"
    },
    "حال شما چطور است؟": {
        "english": "haal-e shomaa chetor ast?",
        "meaning": "how are you?"
    },
    "متشکرم": {
        "english": "motshakeram",
        "meaning": "thank you"
    },
    "خوشمزه است": {
        "english": "khoshmaze ast!",
        "meaning": "Delicious!"
    },
    "من نمی دانم": {
        "english": "man nemidânam",
        "meaning": "I don't know"
    },
    "شما ... رو به فارسي چي ميگين؟": {
        "english": "shoma ... ro be Fārsi chi migin?",
        "meaning": "How do you say... in Persian?"
    },
    "!ببخشيد": {
        "english": "bebakhshid",
        "meaning": "Excuse me!"
    },
    "دلم برات تنگ شده": {
        "english": "delam barat tang shodeh",
        "meaning": "I miss you"
    },
    "عاشقتم": {
        "english": "asheghetam",
        "meaning": "I love you"
    },
    "يک زبان کافي نيست": {
        "english": "yek zabân kâfi nist",
        "meaning": "one language is never enough"
    },
    "من خوبم.ممنون": {
        "english": "man khoobam mamnoon",
        "meaning": "I'm fine, thanks"
    },
    "نظری ندارم": {
        "english": "nazari nadaram",
        "meaning": "I Have No Idea"
    },
    "من.... هستم": {
        "english": "man ... hastam",
        "meaning": "I'm (name)"
    },
    // "": {
    //     "english": "",
    //     "meaning": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": ""
    // },
    // "": {
    //     "english": "",
    //     "meaning": ""
    // },
}