<template>
  <div class="mine-groups">
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xgroup">
      <div>
        <img src="../assets/xtx.png" alt="" />
      </div>
      <div>
        <span>慢跑</span>
        <span>慢跑</span>
        <div>
          <div>
            <span style="color: #59e1c4">晨跑</span>
            <span style="color: #e97b2c">天天跑</span>
            <span style="color: #c0bfbf">娱乐</span>
          </div>
          <div>
            <span>1人</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 跑团
.xgroup {
  background: #393a32;
  height: 30vw;
  display: flex;
  // background-color: red;
  margin: 0 3vw;
  border-bottom: 1px solid #525349;
  div:first-child {
    img {
      display: block;
      width: 23vw;
      border-radius: 5px;
      margin: 4vw 4vw 4vw 0;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 250px;
    // background-color: #fff;
    span:first-child {
      font-size: 1.2rem;
      font-weight: bold;
      color: #f8f9ef;
    }
    span:nth-child(2) {
      font-size: 0.8rem;
      color: #a8a9a1;
    }
    div {
      display: flex;
      div:first-child {
        display: flex;
        // background: #000;
        width: 55vw;
        span {
          font-size: 0.4rem;
          width: 15vw;
          height: 5vw;
          line-height: 5vw;
          text-align: center;

          background: #5d5c5c;
          margin-right: 3vw;
          border-radius: 10vw;
        }
      }
      div:nth-child(2) {
        span {
          display: block;
          color: #feffe6;
          background: #f8bd1c;
          width: 10vw;
          height: 5vw;
          font-size: 0.4rem;
          line-height: 5vw;
          text-align: center;
        }
      }
    }
  }
}
</style>