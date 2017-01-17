import Mock from 'mockjs';
let ip = 'localhost:8080';
// 详情页mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
  "data" : {
    "title" : "@csentence(16,24)",
    "author": "@cword(4)",
    "imgUrls" : [
        { "url" : "http://"+ ip +"/images/detail-img1.jpg"},
        { "url" : "http://"+ ip +"/images/detail-img2.jpg"},
        { "url" : "http://"+ ip +"/images/detail-img3.jpg"}
    ],
    "time" : "@time",
    "content" : "<p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p>"
  }

})

//导航mock数据
Mock.mock('http://mockdata/get/nav', 'get', {
  "data" : [
        {
            "link": "/index/tuijian",
            "name": "\u63a8\u8350",
            "id": 0
        },
        {
            "link": "/index/baijia",
            "name": "\u767e\u5bb6",
            "id": 1
        },
        {
            "link": "/index/bendi",
            "name": "\u672c\u5730",
            "id": 2
        },
        {
            "link": "/index/baijia2",
            "name": "\u56fe\u7247",
            "id": 3
        },
        {
            "link": "/index/baijia3",
            "name": "\u5a31\u4e50",
            "id": 4
        },
        {
            "link": "/index/baijia4",
            "name": "\u793e\u4f1a",
            "id": 5
        },
        {
            "link": "/index/baijia5",
            "name": "\u519b\u4e8b",
            "id": 6
        },
        {
            "link": "/index/baijia6",
            "name": "\u4e92\u8054\u7f51",
            "id": 7
        },
        {
            "link": "/index/baijia7",
            "name": "\u79d1\u6280",
            "id": 8
        }
    ]


})

//新闻列表mock数据
// Mock.mock('http://mockdata/get/newslist', 'get', {
//     "data" : [
//         {
//           "url": "#/detail/01",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//           "imgUrl" : [
//               "http://"+ ip +"/images/news-img1.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "1@csentence(16,24)",
//           "id" : 0,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/02",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img2.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "2@csentence(20,24)",
//           "id" : 1,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/03",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img1.jpg",
//               "http://"+ ip +"/images/news-img2.jpg",
//               "http://"+ ip +"/images/news-img3.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "3@csentence(20,24)",
//           "id" : 2,
//           "displayType" : 2
//         },
//         {
//           "url": "#/detail/04",
//           //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img4.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "4@csentence(20,24)",
//           "id" : 3,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/05",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//           "imgUrl" : [
//               "http://"+ ip +"/images/news-img5.jpg",
//               "http://"+ ip +"/images/news-img6.jpg",
//               "http://"+ ip +"/images/news-img2.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "5@csentence(20,24)",
//           "id" : 4,
//           "displayType" : 2
//         },
//         {
//           "url": "#/detail/06",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img6.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "6@csentence(20,24)",
//           "id" : 5,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/07",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img1.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "7@csentence(20,24)",
//           "id" : 6,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/08",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//              "http://"+ ip +"/images/news-img2.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "8@csentence(20,24)",
//           "id" : 7,
//           "displayType" : 1
//         },
//         {
//           "url": "#/detail/09",
//           // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
//            "imgUrl" : [
//               "http://"+ ip +"/images/news-img3.jpg"
//           ],
//           "time" : "@natural(10,60)" + "分钟前",
//           "title" : "9@csentence(20,24)",
//           "id" : 8,
//           "displayType" : 1
//         }



//     ]

// })

//新闻列表mock数据 包含slider数据 browserHistory
Mock.mock('http://mockdata/get/newslist', 'get', {
    "slider" :{
      "id" : "@id",
      "data":[
        {
          "url" : "/detail/01",
          "imgUrl" :  "http://"+ ip +"/images/timg@natural(1, 3).jpg",
          "id":"@id"
        },
        {
          "url" : "/detail/02",
          "imgUrl" :  "http://"+ ip +"/images/timg@natural(1, 3).jpg",
           "id":"@id"
        },
        {
          "url" : "/detail/03",
          "imgUrl" :  "http://"+ ip +"/images/timg@natural(1, 3).jpg",
           "id":"@id"
        }
      ]
    },

    "data" : [
        {
          "url": "/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : [
              "http://"+ ip +"/images/news-img1.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "1@csentence(16,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/02",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img2.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "2@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/03",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img1.jpg",
              "http://"+ ip +"/images/news-img2.jpg",
              "http://"+ ip +"/images/news-img3.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "3@csentence(20,24)",
          "id" : "@id",
          "displayType" : 2
        },
        {
          "url": "/detail/04",
          //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img4.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "4@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/05",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : [
              "http://"+ ip +"/images/news-img5.jpg",
              "http://"+ ip +"/images/news-img6.jpg",
              "http://"+ ip +"/images/news-img2.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "5@csentence(20,24)",
          "id" : "@id",
          "displayType" : 2
        },
        {
          "url": "/detail/06",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img6.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "6@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/07",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img1.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "7@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/08",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
             "http://"+ ip +"/images/news-img2.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "8@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        },
        {
          "url": "/detail/09",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
           "imgUrl" : [
              "http://"+ ip +"/images/news-img3.jpg"
          ],
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "9@csentence(20,24)",
          "id" : "@id",
          "displayType" : 1
        }



    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '300'
})
