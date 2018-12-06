<template>
<div>
 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottomAllLoaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
    <!--遍历视频-->
        <a class="list" href="#" v-for="vi of list">
                        <div class="list-top">{{vi.date}}</div>
                        <div class="video" data-ga="videos:play_home:article_number">
                            <iframe frameborder="0" width="640" height="498" :src="vi.url" allowfullscreen=""></iframe>
                        </div>
                        <div class="list-middle list-middle-video">
                            <h3>{{vi.title}}</h3>
                            <p>{{vi.comment}}</p>
                        </div>
        </a>
    </mt-loadmore>
</div>
</template>

<script >
import { Loadmore } from 'mint-ui';//上拉下拉刷新
import axios from 'axios'//首先引入axios
import qs from 'qs';//qs解决post传数据问题
var params = new URLSearchParams();//传递的参数
params.append('pageNumber', 0);
params.append('pageSize',5);
var page=2,numb=0,c=0;
    export default {

        data(){
            return {
            allLoaded:false,//禁止进行上拉
            isAutoFill: false,  //配合autoFill阻止是否自动触发上拉函数
            bottomLoadingText:"客官别急，正在努力加载",
            courrentPage:0,//监听页数。
            list:[
           
            ]
            }
        },
         created() {
              this.loadTop();
            },
         
   
    methods:{
      //下拉加载
        loadTop() {
            this.loadFrist(1,5);//永远请求数据库前五条数据
            console.log(1);
        },
        //上拉加载
        loadBottom() {
            console.log(2);
            c=page*5;
            numb+=5;
            console.log(c);
            console.log(numb);
            page++;
            this.loadMore(numb,c);
        },
        // 下拉刷新加载
       loadFrist(a,b) {
           params.pageNumber = a;//传给后台的参数值 pageNumber为键值，传过去的值为josn值，后端需要Number转为数字
           params.pageSize = b;
           axios.post("http://localhost:3000/video/guoran",params)
           .then(response =>{
            console.log(response);
             this.courrentPage++;//每次请求页数加1
             this.allLoaded = false; // 允许进行上拉
             this.list.unshift(...response.data);//将数据推入数组前
            //this.list =this.list.concat(response.data);
           })
           .catch(error => {
             console.log(error);
             alert("网络错误，不能访问");
           });
       },
    //上拉加载更多
        loadMore(a,b) {
           params.pageNumber = a;
           params.pageSize = b;
            axios.post("http://localhost:3000/video/guoran",params)
            .then(response => {
            console.log(response);
               // concat数组的追加
            this.courrentPage++;//每次请求页数加1
            this.list.push(...response.data);//将数据推入数组后
             })
             .catch(error => {
               console.log(error);
               alert("网络错误，不能访问");
             });
        },
    },   
   
}

  
  

//
//      initData(type) {  
//          this.loading = true;
//
//          var params = new URLSearchParams();
//          params.append('pageNumber', 1);
//          params.append('pageSize', 5);
//          axios.post("http://localhost:3000/video/guoran", params).then((//data) => {
//                 if (type === 'loadMore') {
//                   this.list = this.list.concat(response.data);
//                 } else {      
//                   this.list = data.list;
//                                       
//                 }
//             // 设置分页
//              this.pagesNum = data.pages; ////总页数                                             
//             this.loading = false;
//                })
//                 .catch(function(err) {
//                      console.log(err);
//                 })
//          },
//        loadMore() {
//          this.page.pageNumber += 1 // 增加分页
//         this.loading = true // 加载中
//         if(this.page.pageNumber <= this.pagesNum){
//              //加载数据
//            setTimeout(()=>{
//                 this.initData('loadMore');
//             },2000)
//          }else{ 
//              this.noMore = true;// 显示没有更多了
//              this.loading = false;// 关闭加载中
//             return false;
//         }
//      }
//  },
   
</script>
<style scoped>
@charset "UTF-8";
a {
    text-decoration: none;
    color: #8fc31f;
}
* {
    margin: 0;
    padding: 0;
    font-weight: 400;
    -webkit-tap-highlight-color: transparent;
}
/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2013 Daniel Eden
*/
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

.animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s
}

@-webkit-keyframes bounce {

    0%,
    100%,
    20%,
    53%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    40%,
    43% {
        -webkit-transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0)
    }

    70% {
        -webkit-transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0)
    }
}

@keyframes bounce {

    0%,
    100%,
    20%,
    53%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    40%,
    43% {
        -webkit-transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        -webkit-transform: translate3d(0, -30px, 0);
        -ms-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0)
    }

    70% {
        -webkit-transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        transition-timing-function: cubic-bezier(.755, .05, .855, .06);
        -webkit-transform: translate3d(0, -15px, 0);
        -ms-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        -ms-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0)
    }
}

.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom
}

@-webkit-keyframes flash {

    0%,
    100%,
    50% {
        opacity: 1
    }

    25%,
    75% {
        opacity: 0
    }
}

@keyframes flash {

    0%,
    100%,
    50% {
        opacity: 1
    }

    25%,
    75% {
        opacity: 0
    }
}

.flash {
    -webkit-animation-name: flash;
    animation-name: flash
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        -ms-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse
}

@-webkit-keyframes rubberBand {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    30% {
        -webkit-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }

    40% {
        -webkit-transform: scale3d(.75, 1.25, 1);
        transform: scale3d(.75, 1.25, 1)
    }

    50% {
        -webkit-transform: scale3d(1.15, .85, 1);
        transform: scale3d(1.15, .85, 1)
    }

    65% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }

    75% {
        -webkit-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes rubberBand {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    30% {
        -webkit-transform: scale3d(1.25, .75, 1);
        -ms-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }

    40% {
        -webkit-transform: scale3d(.75, 1.25, 1);
        -ms-transform: scale3d(.75, 1.25, 1);
        transform: scale3d(.75, 1.25, 1)
    }

    50% {
        -webkit-transform: scale3d(1.15, .85, 1);
        -ms-transform: scale3d(1.15, .85, 1);
        transform: scale3d(1.15, .85, 1)
    }

    65% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        -ms-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }

    75% {
        -webkit-transform: scale3d(1.05, .95, 1);
        -ms-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand
}

@-webkit-keyframes shake {

    0%,
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

@keyframes shake {

    0%,
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        -ms-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        -ms-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

.shake {
    -webkit-animation-name: shake;
    animation-name: shake
}

@-webkit-keyframes swing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg)
    }

    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg)
    }

    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg)
    }

    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg)
    }

    100% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg)
    }
}

@keyframes swing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        -ms-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg)
    }

    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        -ms-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg)
    }

    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        -ms-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg)
    }

    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        -ms-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg)
    }

    100% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        -ms-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg)
    }
}

.swing {
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing
}

@-webkit-keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    10%,
    20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }

    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }

    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    10%,
    20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }

    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }

    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.tada {
    -webkit-animation-name: tada;
    animation-name: tada
}

@-webkit-keyframes wobble {
    0% {
        -webkit-transform: none;
        transform: none
    }

    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
    }

    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
    }

    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
    }

    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
    }

    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
    }

    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wobble {
    0% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }

    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
    }

    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
    }

    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
    }

    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
    }

    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
    }

    100% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble
}

@-webkit-keyframes bounceIn {

    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }

    40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }

    80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97)
    }

    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

@keyframes bounceIn {

    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        -ms-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        -ms-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }

    40% {
        -webkit-transform: scale3d(.9, .9, .9);
        -ms-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        -ms-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }

    80% {
        -webkit-transform: scale3d(.97, .97, .97);
        -ms-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97)
    }

    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
}

.bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes bounceInDown {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0)
    }

    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0)
    }

    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInDown {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        -ms-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        -ms-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0)
    }

    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        -ms-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        -ms-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0)
    }

    100% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown
}

@-webkit-keyframes bounceInLeft {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }

    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInLeft {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        -ms-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        -ms-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        -ms-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        -ms-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0)
    }

    100% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft
}

@-webkit-keyframes bounceInRight {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }

    100% {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes bounceInRight {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        -ms-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        -ms-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        -ms-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }

    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        -ms-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0)
    }

    100% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight
}

@-webkit-keyframes bounceInUp {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }

    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0)
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes bounceInUp {

    0%,
    100%,
    60%,
    75%,
    90% {
        -webkit-transition-timing-function: cubic-bezier(.215, .61, .355, 1);
        transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }

    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        -ms-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0)
    }

    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        -ms-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }

    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }

    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        -ms-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0)
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp
}

@-webkit-keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }

    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
}

@keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(.9, .9, .9);
        -ms-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9)
    }

    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        -ms-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        -ms-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
}

.bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }

    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

@keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        -ms-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0)
    }

    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        -ms-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        -ms-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

.bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown
}

@-webkit-keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

@keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        -ms-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        -ms-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

.bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft
}

@-webkit-keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

@keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        -ms-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        -ms-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

.bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight
}

@-webkit-keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }

    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

@keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        -ms-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0)
    }

    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        -ms-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        -ms-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

.bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
}

@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        -ms-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}

@-webkit-keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        -ms-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig
}

@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        -ms-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}

@-webkit-keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        -ms-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig
}

@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        -ms-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
}

@-webkit-keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        -ms-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig
}

@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        -ms-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

@-webkit-keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        -ms-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut
}

@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

@keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        -ms-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown
}

@-webkit-keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

@keyframes fadeOutDownBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        -ms-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0)
    }
}

.fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig
}

@-webkit-keyframes fadeOutLeft {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}

@keyframes fadeOutLeft {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        -ms-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}

.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft
}

@-webkit-keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

@keyframes fadeOutLeftBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        -ms-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0)
    }
}

.fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig
}

@-webkit-keyframes fadeOutRight {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        -ms-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}

.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight
}

@-webkit-keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

@keyframes fadeOutRightBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        -ms-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0)
    }
}

.fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig
}

@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        -ms-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

.fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp
}

@-webkit-keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

@keyframes fadeOutUpBig {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        -ms-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0)
    }
}

.fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig
}

@-webkit-keyframes flip {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }

    40% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }

    50% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }

    80% {
        -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
        transform: perspective(400px) scale3d(.95, .95, .95);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }

    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}

@keyframes flip {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }

    40% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out
    }

    50% {
        -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }

    80% {
        -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
        -ms-transform: perspective(400px) scale3d(.95, .95, .95);
        transform: perspective(400px) scale3d(.95, .95, .95);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }

    100% {
        -webkit-transform: perspective(400px);
        -ms-transform: perspective(400px);
        transform: perspective(400px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in
    }
}

.animated.flip {
    -webkit-backface-visibility: visible;
    -ms-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-animation-name: flip;
    animation-name: flip
}

@-webkit-keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }

    40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }

    60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1
    }

    80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
    }

    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }

    40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }

    60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1
    }

    80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
    }

    100% {
        -webkit-transform: perspective(400px);
        -ms-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInX {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInX;
    animation-name: flipInX
}

@-webkit-keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }

    40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }

    60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1
    }

    80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg)
    }

    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }
}

@keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0
    }

    40% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in
    }

    60% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1
    }

    80% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg)
    }

    100% {
        -webkit-transform: perspective(400px);
        -ms-transform: perspective(400px);
        transform: perspective(400px)
    }
}

.flipInY {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY
}

@-webkit-keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1
    }

    100% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0
    }
}

@keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        -ms-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        opacity: 1
    }

    100% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        opacity: 0
    }
}

.flipOutX {
    -webkit-animation-name: flipOutX;
    animation-name: flipOutX;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important
}

@-webkit-keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1
    }

    100% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0
    }
}

@keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        -ms-transform: perspective(400px);
        transform: perspective(400px)
    }

    30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1
    }

    100% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0
    }
}

.flipOutY {
    -webkit-backface-visibility: visible !important;
    -ms-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
}

@-webkit-keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0
    }

    60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1
    }

    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
        opacity: 1
    }

    100% {
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        -ms-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0
    }

    60% {
        -webkit-transform: skewX(20deg);
        -ms-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1
    }

    80% {
        -webkit-transform: skewX(-5deg);
        -ms-transform: skewX(-5deg);
        transform: skewX(-5deg);
        opacity: 1
    }

    100% {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out
}

@-webkit-keyframes lightSpeedOut {
    0% {
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0
    }
}

@keyframes lightSpeedOut {
    0% {
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        -ms-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0
    }
}

.lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in
}

@-webkit-keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        -ms-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn
}

@-webkit-keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        -ms-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft
}

@-webkit-keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        -ms-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight
}

@-webkit-keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        -ms-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft
}

@-webkit-keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1
    }
}

@keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -90deg);
        -ms-transform: rotate3d(0, 0, 1, -90deg);
        transform: rotate3d(0, 0, 1, -90deg);
        opacity: 0
    }

    100% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        opacity: 1
    }
}

.rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight
}

@-webkit-keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0
    }
}

@keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, 200deg);
        -ms-transform: rotate3d(0, 0, 1, 200deg);
        transform: rotate3d(0, 0, 1, 200deg);
        opacity: 0
    }
}

.rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut
}

@-webkit-keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(0, 0, 1, 45deg);
        transform: rotate(0, 0, 1, 45deg);
        opacity: 0
    }
}

@keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(0, 0, 1, 45deg);
        -ms-transform: rotate(0, 0, 1, 45deg);
        transform: rotate(0, 0, 1, 45deg);
        opacity: 0
    }
}

.rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft
}

@-webkit-keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

@keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        -ms-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

.rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight
}

@-webkit-keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

@keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: left bottom;
        -ms-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        -ms-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0
    }
}

.rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft
}

@-webkit-keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0
    }
}

@keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1
    }

    100% {
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 90deg);
        -ms-transform: rotate3d(0, 0, 1, 90deg);
        transform: rotate3d(0, 0, 1, 90deg);
        opacity: 0
    }
}

.rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight
}

@-webkit-keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0
    }
}

@keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        -ms-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    20%,
    60% {
        -webkit-transform: rotate3d(0, 0, 1, 80deg);
        -ms-transform: rotate3d(0, 0, 1, 80deg);
        transform: rotate3d(0, 0, 1, 80deg);
        -webkit-transform-origin: top left;
        -ms-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out
    }

    40%,
    80% {
        -webkit-transform: rotate3d(0, 0, 1, 60deg);
        -ms-transform: rotate3d(0, 0, 1, 60deg);
        transform: rotate3d(0, 0, 1, 60deg);
        -webkit-transform-origin: top left;
        -ms-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0, 700px, 0);
        -ms-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0
    }
}

.hinge {
    -webkit-animation-name: hinge;
    animation-name: hinge
}

@-webkit-keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        -ms-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
        transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

.rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn
}

@-webkit-keyframes rollOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)
    }
}

@keyframes rollOut {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        -ms-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)
    }
}

.rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut
}

@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    50% {
        opacity: 1
    }
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        -ms-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    50% {
        opacity: 1
    }
}

.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn
}

@-webkit-keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown
}

@-webkit-keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft
}

@-webkit-keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight
}

@-webkit-keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp
}

@-webkit-keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    100% {
        opacity: 0
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        -ms-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    100% {
        opacity: 0
    }
}

.zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut
}

@-webkit-keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown
}

@-webkit-keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
        transform: scale(.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center
    }
}

@keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
        -ms-transform: scale(.1) translate3d(-2000px, 0, 0);
        transform: scale(.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        -ms-transform-origin: left center;
        transform-origin: left center
    }
}

.zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft
}

@-webkit-keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
        transform: scale(.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center
    }
}

@keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
        -ms-transform: scale(.1) translate3d(2000px, 0, 0);
        transform: scale(.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        -ms-transform-origin: right center;
        transform-origin: right center
    }
}

.zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight
}

@-webkit-keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

@keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        animation-timing-function: cubic-bezier(.55, .055, .675, .19)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        -ms-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        animation-timing-function: cubic-bezier(.175, .885, .32, 1)
    }
}

.zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp
}

.animated {
    -webkit-animation-duration: .3s;
    animation-duration: .3s
}

.nav {
    height: 50px;
    line-height: 50px;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: rgba(255, 255, 255, .9);
    width: 100%;
    border-bottom: 1px solid #eee
}

.nav .icon {
    background-size: auto 100%;
    background-repeat: no-repeat
}

.nav .breadcrumb {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto
}

.nav .breadcrumb span:before {
    content: '·';
    display: inline-block;
    width: 15px;
    text-align: center
}

.nav .logo-top {
    background-image: url(../img/logo-top-c0e3f7abb3.png);
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    width: 33px;
    height: 50px
}

.nav .liyan-logo {
    background: url(http://1-im.guokr.com/tsIVfvHvOt3Hp1reJQ6dvOJehEMTNKstCq1ZY6P-1VAIAQAAsAAAAFBO.png);
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    width: 60px;
    height: 50px
}

.nav .searches,
.nav .slide,
.nav .top {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 0;
    background-size: auto 40%
}

.nav .slide {
    background-image: url(../img/slide-new-2691352ea1.png);
    background-position: left;
    left: 0;
    width: 100px
}

.nav .top {
    /*background-image: url(../img/top-63f90190de.png);*/
    background-position: right;
    display: none;
    right: 10px
}

.nav .search {
    background-image: url(../img/search-new-68750a097b.png);
    background-position: right;
    right: 10px
}

.nav .search-cancel {
    right: 0;
    color: #999;
    text-align: right;
    padding-right: 15px
}

.nav h2 {
    display: inline-block;
    float: left;
    font-size: 14px;
    width: calc(100% - 110px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    margin-left: 35px
}

.slide-nav {
    display: none
}

.slide-nav .top {
    display: block
}

.side {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 85%;
    height: 100%;
    text-align: center;
    display: none;
    overflow: scroll;
    -webkit-overflow-scrolling: touch
}

.side::-webkit-scrollbar {
    display: none
}

.side .block {
    border: 1px solid transparent;
    border-bottom: 1px solid #eee;
    height: 55px;
    line-height: 55px
}

.side .logo a {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid transparent
}

.side .logo a img {
    height: 23px;
    margin: 16px auto;
    display: block
}

.side .login {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    font-size: 17px;
    color: #3f3f3f;
    vertical-align: middle;
    border-top: 1px solid #eee
}

.side .login .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle
}

.side .login img {
    vertical-align: top
}

.side .login a {
    width: 100%;
    height: 100%
}

.side .bottom-part {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    font-size: 14px;
    font-weight: 400;
    color: #3f3f3f;
    border-bottom: 1px solid #f3f3f3
}

.side .bottom-part .fl {
    float: left
}

.side .bottom-part .fr {
    float: right
}

.side .bottom-part .bottom-box {
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    border-top: 1px solid #f3f3f3;
    padding: 13px 20px 12px 15px
}

.side .bottom-part .bottom-box .nav-login {
    width: 100%;
    height: 100%;
    line-height: 29px;
    display: none
}

.side .bottom-part .bottom-box a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #3f3f3f
}

.side .bottom-part .bottom-box .left-icon,
.side .bottom-part .bottom-box .right-icon {
    width: 30px;
    height: 30px
}

.side .bottom-part .bottom-box .left-icon img,
.side .bottom-part .bottom-box .right-icon img {
    width: 100%;
    height: 100%;
    vertical-align: middle
}

.side .bottom-part .bottom-box .content {
    line-height: 30px;
    margin-left: 15px
}

.side .bottom-part .bottom-box .avatar img {
    border-radius: 50%
}

.side .bottom-part .bottom-box .logout a {
    color: #f85f48;
    display: inline-block;
    height: 30px;
    line-height: 30px
}

.side .bottom-part .feedback .right-icon {
    /*background-image: url(../img/right-ac43154699.png);*/
    width: 20px;
    height: 38px;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: right
}

.side .classified {
    border: 1px solid transparent;
    height: calc(100% - 56*2px);
    padding-bottom: 90px;
    box-sizing: border-box;
    overflow: scroll
}

.side .classified::-webkit-scrollbar {
    display: none
}

.side .classify-title {
    line-height: 75px;
    width: 100%;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden
}

.side .classify-title.active {
    border-left: 3px solid #8fc31f
}

.side .classify-title.active.expand {
    border-left: none
}

.side .classify {
    width: 90%;
    margin: 20px auto 0;
    box-shadow: 0 0 8px #eee;
    border: 1px solid transparent
}

.side .classify a {
    color: #3f3f3f
}

.side .classify .img {
    display: inline-block;
    line-height: 65px;
    height: 65px;
    width: 102px;
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    vertical-align: middle;
    background-size: cover
}

.side .classify .menu-channel {
    background-image: url(../img/classify0-29f0a3be3f.jpg)
}

.side .classify .menu-subject {
    background-image: url(../img/classify1-11e7bdff6b.jpg)
}

.side .classify .menu-grzd {
    background-image: url(../img/classify2-d563796421.png)
}

.side .classify .menu-ask {
    background-image: url(../img/menu-ask-12884840c7.jpg)
}

.side .classify ul {
    display: none;
    padding: 20px 10px 0 20px;
    margin-bottom: -5px;
    overflow: hidden
}

.side .classify ul li {
    float: left;
    width: 50%;
    text-align: left
}

.side .classify ul li .tag {
    background: 0 0;
    border: none;
    border-radius: 0;
    padding: 0 5px;
    width: 100%;
    height: 15px;
    line-height: 15px;
    margin: 0 0 30px;
    font-size: 14px
}

.side .classify ul li .tag span {
    font-size: 12px;
    margin-left: 5px
}

.side .classify ul li .tag.active {
    color: #8fc31f;
    border-left: 3px solid #8fc31f
}

.video {
    width: 100%;
    position: relative;
    margin-top: 7.5px;
    margin-bottom: 10px
}

iframe {
    width: 100%;
    height: 51vw;
    max-height: 260px
}

@keyframes line-scale {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }

    50% {
        -webkit-transform: scaleX(.1);
        transform: scaleX(.1)
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

.wait {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    animation: line-scale .7s .1s infinite cubic-bezier(.2, .68, .18, 1.08);
    background: #8fc31f
}

.yan-special .yan-special-list .item .cover span,
.yan-special .yan-special-list .item p {
    max-height: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.yan-special {
    padding: 0 11.3%;
    border-bottom: 1px solid #d8d8d8
}

.yan-special .yan-title {
    padding: 27px 0 20px;
    text-align: center
}

.yan-special .yan-title span {
    font-size: 17px;
    color: #8fc31f
}

.yan-special .yan-title span::after,
.yan-special .yan-title span::before {
    display: inline-block;
    height: 8.5px;
    width: 8.5px;
    margin: 0 8.5px;
    background: #8fc31f;
    transform: translateY(-25%) rotate(45deg);
    content: ''
}

.yan-special .yan-special-list {
    border-bottom: 1px solid #d8d8d8
}

.yan-special .yan-special-list .item {
    display: block;
    margin-bottom: 20px
}

.yan-special .yan-special-list .item .cover {
    height: 0;
    width: 100%;
    padding-bottom: 39.6%;
    background-size: cover;
    background-position: center;
    position: relative
}

.yan-special .yan-special-list .item .cover span {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 5px 26px;
    max-width: 60%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    background: #000;
    color: #fff
}

.yan-special .yan-special-list .item p {
    margin-top: 10px;
    font-size: 17px;
    color: #3f3f3f
}

.yan-special button {
    width: 100%;
    padding: 15px 0;
    border: 0;
    font-size: 14px;
    color: #3f3f3f;
    background: 0 0;
    outline: 0
}

@keyframes refresh {
    from {
        transform: rotate(0)
    }

    to {
        transform: rotate(180deg)
    }
}

.yan-special button span {
    display: inline-block;
    height: 15px;
    line-height: 15px;
    vertical-align: middle
}

.yan-special button label {
    display: inline-block;
    height: 15px;
    width: 15px;
    vertical-align: middle;
    background-image: url(http://2-im.guokr.com/jIouTtFjQ99c8ltGwxjo5J6RBJM14ca3fe7PbWXLSdoeAAAAHgAAAFBO.png);
    background-size: cover
}

.yan-special button .refresh {
    animation: refresh .6s
}

.list {
    display: block;
    padding: 20px;
    border-bottom: 1px solid #eee
}

.list,
.list a {
    color: #3f3f3f
}

.list:last-child {
    border-bottom: none
}

.list .list-top {
    color: #999;
    font-size: 12px
}

.list h3 {
    margin-top: 7.5px;
    position: relative
}

.list .list-middle {
    display: inline-block;
    flex: 1;
    width: 0
}

.list .list-middle h3,
.list .list-middle p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical
}

.list .list-middle h3 {
    -webkit-line-clamp: 2
}

.list .list-middle p {
    -webkit-line-clamp: 2;
    color: #999;
    margin-top: 7.5px
}

.list .list-middle p.clamp2 {
    -webkit-line-clamp: 2
}

.list .list-middle-video {
    width: 100%
}

.list .list-middle-video p {
    display: -webkit-inline-box
}

.list .list-right {
    margin-left: 10px
}

.list img {
    height: 75px;
    width: 120px
}

.image {
    display: block;
    height: 236px;
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 0;
    background-color: #000
}

.image .text {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 14px 20px;
    z-index: 2
}

.image .list-top,
.image h3 {
    color: #fff
}

.image::after {
    content: '';
    height: 80%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #000)
}

.image.light .list-top,
.image.light h3 {
    color: #000
}

.image.light::after {
    background-image: linear-gradient(rgba(255, 255, 255, 0), #fff)
}

.search-box {
    z-index: 6;
    position: fixed;
    top: 50px;
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, .9);
    display: none
}

.search-box .search {
    position: absolute;
    height: 50px;
    width: 30px;
    top: 0;
    background-size: auto 40%;
    background-image: url(../img/search-new-68750a097b.png);
    background-position: right;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    right: 10px
}

.search-box .search-input {
    width: calc(100% - 60px);
    margin: 10px 0 0 10px;
    height: 30px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 14px
}

.container {
    margin-top: 50px
}

.ad {
    position: absolute;
    top: 0;
    left: 20px;
    height: 25px;
    width: 40px;
    background-color: rgba(255, 255, 255, .5);
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: #3f3f3f
}
</style>