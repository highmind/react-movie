import Mock from 'mockjs';
let ip = '192.168.2.104:8080';
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
            "link": "/",
            "name": "首页",
            "id": 0
        },
        {
            "link": "/film",
            "name": "影片",
            "id": 1
        },
        {
            "link": "/cinema",
            "name": "影院",
            "id": 2
        },
        {
            "link": "/user",
            "name": "我的",
            "id": 3
        }
    ]


})



//Home组件 电影列表数据 browserHistory
Mock.mock('http://mockdata/get/filmlist', 'get', {
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

    "playingData" : [
      {
        "id": 3545,
        "name": "太空旅客1",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼1",
        "grade": "8.51",
        "watchCount": 3679251,
        "cinemaCount": 1221,
      },
      {
        "id": 3546,
        "name": "太空旅客2",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼",
        "grade": "8.52",
        "watchCount": 3679252,
        "cinemaCount": 1222,
      },
      {
        "id": 3547,
        "name": "太空旅客3",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼3",
        "grade": "8.53",
        "watchCount": 3679253,
        "cinemaCount": 1223,
      },
      {
        "id": 3548,
        "name": "太空旅客4",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼4",
        "grade": "8.54",
        "watchCount": 3679254,
        "cinemaCount": 1224,
      }
    ],

    "comingData" : [
      {
        "id": 3555,
        "name": "太空旅客1",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼1",
        "grade": "8.51",
        "watchCount": 3679251,
        "cinemaCount": 1221,
      },
      {
        "id": 3556,
        "name": "太空旅客2",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼",
        "grade": "8.52",
        "watchCount": 3679252,
        "cinemaCount": 1222,
      },
      {
        "id": 3557,
        "name": "太空旅客3",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼3",
        "grade": "8.53",
        "watchCount": 3679253,
        "cinemaCount": 1223,
      },
      {
        "id": 3558,
        "name": "太空旅客4",
        "cover": {
            "origin": "http://"+ ip +"/images/m-img1.jpg"
        },
        "intro": "未达目的地 太空铁达尼4",
        "grade": "8.54",
        "watchCount": 3679254,
        "cinemaCount": 1224,
      }
    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '300'
})
