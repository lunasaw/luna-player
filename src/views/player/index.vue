<template>
  <div>
    <el-row class="fullscreen-background">
      <el-container class="custom-container">
        <el-header>
          <el-col :span="1" class="controll-aside">
            <el-button
              icon="el-icon-setting"
              circle
              @click="triggerAside"
            ></el-button>
          </el-col>
          <el-col :span="23">Luna-Player</el-col>
        </el-header>
        <el-container>
          <el-aside width="200px" v-show="isCollapse">
            <transition name="el-fade-in-linear">
              <PlayerAside v-show="isCollapse"></PlayerAside>
            </transition>
          </el-aside>
          <el-container>
            <el-main>
              <div style="height: 400px">
                <luna-player
                  :source="source"
                  ref="VueAliplayerV2"
                  :options="options"
                />
              </div>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-row>
  </div>
</template>

<script>
import PlayerAside from "@/components/PlayerAside.vue";
import { mapState } from "vuex";
import LunaPlayer from "@/components/LunaPlayer.vue";
export default {
  components: {
    PlayerAside,
    LunaPlayer,
  },
  name: "PlayerView",
  data() {
    return {
      isAsideCollapsed: false,
      options: {
        // source:'//player.alicdn.com/video/aliyunmedia.mp4',
        isLive: false, //切换为直播流的时候必填
        // format: 'm3u8'  //切换为直播流的时候必填
      },
      source: "//player.alicdn.com/video/aliyunmedia.mp4",
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.aside.isCollapse,
    }),
  },
  methods: {
    triggerAside() {
      this.$store.commit("aside/collapseTab");
    },
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #0099cc;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-aside {
  background-color: #99ccff;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}

.custom-container {
  height: 100vh;
}
</style>
