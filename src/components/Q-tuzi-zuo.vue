<template>
    <div class="Q-tuzi">
        <!--  -->
        <div class="Q-Tuzi-zuo">
            <img src="../assets/P-tuzi.png" alt="">
        </div>
        <!--  -->
        <div class="Q-Tuzi-you">
            <img src="../assets/Pyou1.png" alt="">

            <!-- <img v-for="(i,index) in src" :key="index" 
            :src="i.img" alt=""> -->

        </div>
        
    </div>
</template>

<script>
  export default { 
 
        // data() {
        //     return {
        //       src:[
        //         { img: require('../assets/Pyou1.png')},
        //         { img: require('../assets/Pyou2.png')},
        //         { img: require('../assets/Pyou3.png')},
        //       ],
        //     }
        // },

    }
</script>

<style lang="scss" scoped>
.Q-tuzi{
    display: flex;
}

// 左
.Q-Tuzi-zuo {
    margin-top: 1vh;

}

.Q-Tuzi-zuo img {
    width: 38vw;
    height: 25vh;
    margin-left: 2vw;
}
// 右
.Q-Tuzi-you img {
        margin-top: 2vh;
        width: 58vw;
        height: 27vh;
    }
</style>