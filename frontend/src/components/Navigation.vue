<template>
    <div id="navigation" :class="getBG()">
        <div id="header">
            <div  class="option" @click="toHome">Alex's Blog</div>
            <div id="options">
                <div @click="toHome" :class="$store.state.nowPage == '/blog' ? 'nowOption' : 'option'">Home</div>
                <div @click="toArchive" :class="$store.state.nowPage == '/blog/archive' ? 'nowOption' : 'option'">Archive</div>
                <div @click="toRecommendation" :class="$store.state.nowPage == '/blog/recommendation' ? 'nowOption' : 'option'">Recommendation</div>
                <div @click="toAbout" :class="$store.state.nowPage == '/blog/about' ? 'nowOption' : 'option'">About</div>
            </div>
        </div>
        <div id="title">
            <div id="tab">
                <div class="tab" v-if="$store.state.nowPage == '/blog'">
                    Blog
                </div>
                <div class="tab" v-if="$store.state.nowPage == '/blog/archive'">
                    Archive
                </div>
                <div class="tab" v-if="$store.state.nowPage == '/blog/recommendation'">
                    Recommendation
                </div>
                <div class="tab" v-if="$store.state.nowPage == '/blog/about'">
                    About
                </div>
            </div>
            <div id="motto">
                <div class="motto" v-if="$store.state.nowPage == '/blog'">
                    要么做重要的事，要么做喜欢的事，要么好好休息
                </div>
                <div class="motto" v-if="$store.state.nowPage == '/blog/archive'">
                    无知不是进步的障碍，傲慢才是
                </div>
                <div class="motto" v-if="$store.state.nowPage == '/blog/recommendation'">
                    必要性是一切行动之母
                </div>
                <div class="motto" v-if="$store.state.nowPage == '/blog/about'">
                    人类终究会委身于一种抽象
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {

        }
    },
    methods: {
        getBG() {
            switch(this.$store.state.nowPage) {
                case '/blog':
                    return 'blogBG'
                case '/blog/archive':
                    return 'archiveBG'
                case '/blog/recommendation':
                    return 'recommendationBG'
                case '/blog/about':
                    return 'aboutBG'
            }
        },
        toHome() {
            this.$router.push('/blog')
            this.$store.commit('changePage', '/blog')
        },
        toArchive() {
            this.$router.push('/blog/archive')
            this.$store.commit('changePage', '/blog/archive')
        },
        toRecommendation() {
            this.$router.push('/blog/recommendation')
            this.$store.commit('changePage', '/blog/recommendation')
        },
        toAbout() {
            this.$router.push('/blog/about')
            this.$store.commit('changePage', '/blog/about')
        }
    }
})
</script>

<style>

#navigation {
    font-weight: 900;
    font-size: large;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    color: white
}

.blogBG {
    background-image: url('../../public/blog_bg.png');
    background-position: 0 40%;
}

.archiveBG {
    background-image: url('../../public/archive_bg.png');
    background-position: 0 50%;
}

.recommendationBG {
    background-image: url('../../public/recommendation_bg.png');
    background-position: 0 80%;
}

.aboutBG {
    background-image: url('../../public/about_bg.png');
    background-position: 0 65%;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    padding-left: 5%;
    padding-right: 5%;
}

#options {
    display: flex;
    justify-content: space-between;
    width: 45%;
}

a:hover, .option:hover {
    color: rgb(63,133,237)
}

.option, .nowOption {
    cursor: pointer;
}

.nowOption {
    color: rgb(255,105,46)
}

#title {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#tab, #motto {
    text-align: center;
}

#tab {
    font-size: 60px;
}

#motto {
    font-weight: normal;
}

</style>