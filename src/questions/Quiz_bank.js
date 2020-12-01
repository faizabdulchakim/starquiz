import persegi from "../images/persegi.png";
import segitiga from "../images/segitiga.png";
import lingkaran from "../images/lingkaran.png";
import bintang from "../images/bintang.png";


export const quiz_bank  = [
    {"question":"(0) Dibawah ini adalah gambar?",
    "question_image":lingkaran,
    "type":"multiple_choice",
      "options":[
        "Persegi",
        "Lingkaran",
        "Segitiga",
        "Bulan"
    ],
    "answer":1,
    "numbering":0,

    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(1) Setelah huruf B adalah huruf?",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"c",
    "numbering":1,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(2) 1 + 1 = ...",
    "type":"multiple_choice",
      "options":[
        "0",
        "1",
        "2",
        "11"
    ],
    "answer":2,
    "numbering":2,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(3) yang manakah gambar lingkaran?",
    "type":"multiple_choice",
      "options":[
        persegi,
        segitiga,
        lingkaran,
        bintang
    ],
    "answer":2,
    "numbering":3,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },

    {"question":"(4) Dibawah ini adalah gambar?",
    "question_image":lingkaran,
    "type":"multiple_choice",
      "options":[
        "Persegi",
        "Lingkaran",
        "Segitiga",
        "Bulan"
    ],
    "answer":1,
    "numbering":4,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(5) Setelah huruf B adalah huruf?",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"c",
    "numbering":5,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(6) 1 + 1 = ...",
    "type":"multiple_choice",
      "options":[
        "0",
        "1",
        "2",
        "11"
    ],
    "answer":2,
    "numbering":6,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(7) yang manakah gambar lingkaran?",
    "type":"multiple_choice",
      "options":[
        persegi,
        segitiga,
        lingkaran,
        bintang
    ],
    "answer":2,
    "numbering":7,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },

    {"question":"(8) Dibawah ini adalah gambar?",
    "question_image":lingkaran,
    "type":"multiple_choice",
      "options":[
        "Persegi",
        "Lingkaran",
        "Segitiga",
        "Bulan"
    ],
    "answer":1,
    "numbering":8,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"(9) Setelah huruf B adalah huruf?",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"c",
    "numbering":9,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    }
  ]
  
export default {
quiz_bank,
}