import persegi from "../images/persegi.png";
import segitiga from "../images/segitiga.png";
import lingkaran from "../images/lingkaran.png";
import bintang from "../images/bintang.png";

import biru from "../images/biru.png";
import donat from "../images/donat.jpg";
import harimau from "../images/harimau.jpg";
import hijau from "../images/hijau.png";
import ikan from "../images/ikan.jpg";
import kuning from "../images/kuning.png";
import strawberry from "../images/strawberry.jpg";
import sepatu from "../images/sepatu.jpg";
import permen from "../images/permen.jpg";
import merah from "../images/merah.png";
import lingkaranmerah from "../images/lingkaranmerah.png";


export const quiz_bank  = [
    {"question":"Berapa jumlah sepatu pada gambar dibawah ini?",
    "question_image":sepatu,
    "type":"multiple_choice",
      "options":[
        "6",
        "5",
        "4",
        "7"
    ],
    "answer":1,
    "numbering":0,

    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Yang manakah gambar lingkaran?",
    "type":"multiple_choice",
      "options":[
        persegi,
        segitiga,
        lingkaran,
        bintang
    ],
    "answer":2,
    "numbering":1,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Sekarang adalah hari Senin, besok hari apa?",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"selasa",
    "numbering":2,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Apakah warna bendera Indonesia?",
    "type":"multiple_choice",
      "options":[
        "Putih-Abu Abu",
        "Merah Muda",
        "Merah-Putih",
        "Orange"
    ],
    "answer":2,
    "numbering":3,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Siapakah nama Presiden Indonesia?",
    "type":"multiple_choice",
      "options":[
        "Joko Widodo",
        "Joko Yudhoyono",
        "Sukarno",
        "Suharto"
    ],
    "answer":0,
    "numbering":4,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Yang manakah gambar kotak berwarna hijau?",
    "type":"multiple_choice",
      "options":[
        merah,
        kuning,
        hijau,
        biru
    ],
    "answer":2,
    "numbering":5,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Berapakah jumlah roda sepeda motor?",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"2",
    "numbering":6,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Gambar hewan apakah ini?",
    "question_image":harimau,
    "type":"multiple_choice",
      "options":[
        "Sapi",
        "Kerbau",
        "Sapi",
        "Macan"
    ],
    "answer":3,
    "numbering":7,

    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Yang manakah makanan kucing?",
    "type":"multiple_choice",
      "options":[
        donat,
        strawberry,
        ikan,
        permen
    ],
    "answer":2,
    "numbering":8,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Apakah nama ibukota negara Malaysia?",
    "type":"multiple_choice",
      "options":[
        "Bandar Seri Begawan",
        "Singapura",
        "Kuala Lumpur",
        "Pangkal Pinang"
    ],
    "answer":2,
    "numbering":9,

    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Apakah warna gambar lingkaran berikut?",
    "question_image":lingkaranmerah,
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"merah",
    "numbering":10,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Rajin pangkal pandai, hemat pangkal ...",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"kaya",
    "numbering":11,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Apakah nama kue dibawah ini?",
    "question_image":donat,
    "type":"multiple_choice",
      "options":[
        "Bolu",
        "Lapis",
        "Pie",
        "Donat"
    ],
    "answer":3,
    "numbering":12,

    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    },
    {"question":"Cacing hidup didalam tanah, sedangkan ikan hidup di ...",
     "type":"fill_in_the_blank",
     "case_sensitive":false,
    "answer":"air",
    "numbering":13,
    "myanswer":'',
    "next_retry":-100,
    "truefalse":'notyet'
    }
]
  
export default {
quiz_bank,
}