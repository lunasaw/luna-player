<template>
  <div>
    <el-row> aside </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PalyerAside",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.aside.isCollapse,
    }),
  },

  methods: {},
};
</script>

<style></style>
