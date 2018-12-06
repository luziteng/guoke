<template>
    <div>
     <Xheader />
        <section class="question hide-disc" id="question">
            <h1 data-questionid="565900">有哪些在你的认知圈子里是理所当然，在大众看来却是匪夷所思的事情？</h1>
            <div class="discription" id="discription">
                <p>之前有一个很有趣的问答<br><a href="http://www.guokr.com/question/370792/">大家的专业里有什么反直觉的知识吗？</a><br>这里再换一种方式，请大家讲讲在各自的工作学习生活圈子里很理所当然，但是外界却跟你们持相反意见的事件或观点。</p>
                <p>lz是学经济的，先抛砖引玉<br><a href="http://baike.baidu.com/view/4416690.htm?fr=aladdin">国美事件</a>，请查阅百度百科<br>陈晓为了挽救国美引入外资，黄光裕害怕股权稀释发难贝恩新入股东，这本来是大股东害怕失去公司控制权所做对公司发展不利的事情，在网民看来却是陈晓偷取了黄光裕的成果，其实上市公司的所有权本身就已经社会化，大股东没有理由认为公司是自己一个人的东西，经理人需要向全体股东负责而不仅仅是大股东。但是网民就是一边倒的支持黄光裕，陈晓为公司发展考虑的行为却被描述成小人行为。</p>
                <p>大家的圈子里有哪些类似的观点或事件，本来是正确合理的，结果一直被公众误解，比如<br>手机用户对安卓和苹果各有何偏见与误解？<br>官媒遇到突发事件的发言是在避重就轻还是理性陈述？<br>还有最典型的的转基因</p>
                <p>希望大家各抒己见，把自己面对公众误解心中呼啸而过的草泥马一口气释放出来，让羊驼们欢快地在答案中奔跑！<br>（如果反对部分答案欢迎讨论，答案给出的观点很可能就是被你误解的观点）</p>
                <p><strong>理性讨论，谢绝人身攻击！</strong></p>
            </div>
            <div class="view-discription" id="viewDiscription" style="display: block;">
                <a class="down">阅读全文</a>
                <a class="up">收起</a>
            </div>
            <div id="answerWrap" class="answer-wrap">
                <a id="editAnswer" href="javascript:void(0);" class="answer-entry">写回答</a>
                <a id="editAnswerImg" href="javascript:void(0)" class="answer-entry-img" style="display: none;"></a>
            </div>
        </section>


    </div>
</template>

<script>
    import Xheader from "../components/Xheader";
    export default{
        components :{
            Xheader,

         },
    }
</script>


<style scoped>


@charset "UTF-8";


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
    height: 55px;
    line-height: 55px;
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
    width: auto;
    font-size: 17px
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
    width: 35px;
    height: 49px
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
    /*background-image: url(../img/top.png);*/
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
    /*background-image: url(../img/right.png);*/
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

.load-line {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    animation: line-scale .7s .1s infinite cubic-bezier(.2, .68, .18, 1.08);
    background: #8fc31f;
    transform-origin: center !important
}

.load-text {
    padding: 20px 0;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    color: #999
}

.load {
    display: none
}

.hide {
    display: none
}

.good-bad .comment {
    color: #999;
    background-color: #fff
}

.good-bad .comment span {
    /*background-image: url(../img/messager-icon-0262b8c505.png);*/
    background-size: contain;
    background-repeat: no-repeat;
    width: 16px;
    height: 14px
}

.good-bad .comment i {
    font-style: normal
}

.good-bad .comment .hide {
    display: none
}

.good-bad .good span {
    /*background-image: url(../img/good-new-28848ce6b9.png)*/
}

.good-bad .bad span {
    /*background-image: url(../img/bad-new-020b21f499.png)*/
}

.good-bad a {
    display: inline-block;
    height: 30px;
    color: #999;
    border-radius: 3px;
    margin-left: 6px;
    margin-top: 2px;
    padding: 0 8px;
    line-height: 30px;
    font-size: 12px
}

.good-bad a span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-size: auto 100%;
    background-position: left;
    vertical-align: middle;
    margin-right: 5px;
    margin-top: -3px;
    background-repeat: no-repeat
}

.good-bad a.active {
    cursor: pointer;
    color: #8fc31f
}

.good-bad a.active span {
    background-position: right
}

.good-bad a.good.active span {
    /*background-image: url(../img/good-active-7bdd351bfc.png)*/
}

.good-bad a.bad.active span {
   /* background-image: url(../img/bad-active-68a7f40068.png)*/
}

* {
    margin: 0;
    padding: 0;
    font-weight: noraml
}

body,
html {
    margin: 0;
    padding: 0;
    color: #3f3f3f;
    font-size: 17px;
    word-wrap: break-word;
    font-family: "微软雅黑"
}

a {
    color: #3f3f3f;
    text-decoration: none
}

img {
    max-width: 100% !important;
    height: auto
}

.down {
    display: none;
    position: absolute;
    right: 20px;
    bottom: -5px;
    color: #8fc31f
}

.up {
    display: block;
    font-size: 17px;
    color: #8fc31f
}

.view-discription {
    display: none;
    position: absolute;
    bottom: 65px;
    right: 20px;
    margin-bottom: 20px
}

.answer-wrap {
    text-align: right
}

.answer-entry {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
    color: #8fc31f;
    box-shadow: 0 0 5px #ccc
}

.answer-entry-img {
    display: none;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20%;
    right: 5%;
    border-radius: 50%;
    box-shadow: 0 0 5px #ccc;
    /*background: #fff url(../img/write-4a69f079cc.png) 16px 13px no-repeat;*/
    background-size: 40%;
    z-index: 9
}

.edit-answer-fixed {
    position: fixed;
    bottom: 20%;
    right: 20px;
    background: #fff;
    z-index: 10
}

.arrow {
    position: relative;
    display: inline-block;
    margin-left: 12px;
    height: 7px;
    width: 7px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    border-top-color: #8fc31f;
    border-left-color: #8fc31f;
    transform: rotate(225deg);
    vertical-align: top;
    margin-top: 7px
}

.up .arrow {
    margin-top: 2px;
    transform: rotate(45deg);
    border-top-color: #adadad;
    border-left-color: #adadad;
    vertical-align: middle
}

.question {
    position: relative;
    padding: 15px 20px 30px;
    margin-top: 55px
}

.question h1 {
    font-size: 21px;
    margin: 0 auto 10px
}

.question .discription {
    display: block;
    height: 100%;
    margin: 0 auto 30px;
    line-height: 1.8;
    color: #3f3f3f
}

.question .discription a {
    color: #8fc31f;
    text-decoration: underline
}

.question .discription p {
    white-space: pre-wrap
}

.count {
    padding: 5px 20px;
    color: #adadad;
    background: #f6f6f6;
    font-size: 12px
}

.hide-disc .discription {
    margin-bottom: 50px
}

.active .discription {
    display: block;
    height: 390px;
    margin: 0 auto 30px;
    overflow: hidden
}

.active .down {
    display: inline-block
}

.active .up {
    display: none
}

.active .view-discription {
    content: '';
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 70px;
    left: 0;
    text-align: right;
    background-image: linear-gradient(rgba(255, 255, 255, 0), #fff)
}

.container section {
    border-bottom: 1px solid #ededed
}

.container section:last-child {
    border: none
}

.container .slide {
    border: none
}

.content {
    line-height: 1.8
}

.content a {
    color: #8fc31f;
    text-decoration: none
}

.content blockquote,
.content h2,
.content h3,
.content hr,
.content iframe,
.content img,
.content ol,
.content p,
.content ul {
    margin-bottom: 10px
}

.content img:last-child,
.content p:last-child {
    margin-bottom: 0
}

.content img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    margin: 0 auto 10px
}

.content .img-caption,
.content .reference-item {
    color: #999;
    font-size: 14px
}

.content .references {
    color: #999;
    margin-top: 30px
}

.content blockquote {
    color: #999;
    border-left: 3px solid #d5d5d5;
    padding-left: 10px
}

.content hr {
    display: none
}

.content ol li,
.content ul li {
    margin-left: 20px
}

.content .answer-text {
    color: #3f3f3f;
    text-decoration: none
}

.content .text-all p {
    white-space: pre-wrap
}

section {
    padding: 20px
}

.authority {
    position: relative
}

.view-all-hidden {
    visibility: hidden
}

.collapsed {
    max-height: 483px;
    overflow: hidden;
    position: relative
}

.collapsed:after {
    content: '';
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0), #fff);
    -webkit-background-image: linear-gradient(rgba(255, 255, 255, 0), #fff)
}

.authority-icon {
    position: absolute;
    top: 0;
    right: 20px;
    width: 30px;
    height: 30px;
    display: block;
    /*background: url(../img/authority-icon-d29061b00d.png) 0 0 no-repeat;*/
    background-size: 100%
}

.user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between
}

.user .created-time {
    font-size: 12px;
    color: #999;
    letter-spacing: 1px;
    height: 20px;
    line-height: 20px
}

.user .user-message-wrap {
    display: flex;
    align-items: center
}

.user .user-avatar {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px
}

.user .user-avatar img {
    height: 100%;
    width: 100%
}

.user .user-info {
    font-size: 12px
}

.user .user-info p {
    margin: 0
}

.user .user-info .user-info-desc {
    color: #adadad
}

.slide {
    -webkit-overflow-scrolling: touch;
    font-size: 14px;
    line-height: 1.8;
    height: 150px;
    overflow: hidden
}

.slide ul {
    -webkit-overflow-scrolling: touch;
    padding: 10px 0;
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;
    width: auto;
    height: 141px
}

.slide ul::-webkit-scrollbar {
    display: none
}

.slide li {
    width: 220px;
    margin-right: 15px;
    display: inline-block
}

.slide a {
    border: 1px solid #8fc31f;
    padding: 20px 15px;
    white-space: normal;
    height: 80px;
    width: 220px;
    display: table-cell;
    position: relative
}

.slide p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.slide .total {
    color: #adadad;
    font-size: 12px;
    margin-top: 10px;
    position: absolute;
    bottom: 20px
}

pre {
    white-space: inherit
}

.do>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    color: #8fc31f
}

.do.do-fixed>div {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    box-sizing: content-box;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 20px;
    color: #3f3f3f
}

.do:after {
    content: '';
    display: none;
    height: 50px;
    width: 100%
}

.do.do-fixed:after {
    display: block
}

.container>:not(:first-child) .limit {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical
}

.container:first-child {
    border: none
}

.toast,
.too-fast {
    display: none
}

.toast-content,
.too-fast {
    z-index: 20;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    height: 175px;
    width: 275px;
    text-align: center;
    font-size: 17px;
    color: #3f3f3f;
    border-radius: 5px
}

.toast-content .close,
.too-fast .close {
    /*background-image: url(../img/close-65aeb7a10d.png);*/
    background-size: cover;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px
}

.toast-content p,
.too-fast p {
    line-height: 100px
}

.toast-content p.text-center,
.too-fast p.text-center {
    line-height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 210px;
    height: 50px;
    margin: auto
}

.toast-content a,
.too-fast a {
    display: block;
    width: 100%;
    border-top: 1px solid #f6f6f6;
    position: absolute;
    bottom: 0;
    height: 55px;
    line-height: 55px;
    color: #8fc31f
}

.too-fast {
    width: 250px;
    height: 70px
}

.too-fast p {
    line-height: 70px
}

.more-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #8fc31f;
    font-size: 17px;
    z-index: 8;
    width: 100%;
    text-align: center;
    background: #fff
}
</style>