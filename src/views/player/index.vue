<template>
  <div>
    <el-row class="fullscreen-background">
      <el-container class="custom-container">
        <el-header>
          <el-col :span="4" class="controll-aside">
            <el-button
              icon="el-icon-setting"
              circle
              @click="triggerAside"
            ></el-button>
          </el-col>
          <el-col :span="20">Luna-Player</el-col>
        </el-header>
        <el-container>
          <el-aside width="200px" v-show="isCollapse">
            <transition name="el-fade-in-linear">
              <PlayerAside v-show="isCollapse"></PlayerAside>
            </transition>
          </el-aside>
          <el-container>
            <el-main>Main</el-main>
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
export default {
  components: {
    PlayerAside,
  },
  name: "PlayerView",
  data() {
    return {
      isAsideCollapsed: false,
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
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.custom-container {
  height: 100vh;
}
</style>
