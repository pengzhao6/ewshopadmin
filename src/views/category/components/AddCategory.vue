<template>
  <n-modal
      v-model:show="props.showModal"
      @update:show="$emit('checkShowModal',false)"
      :mask-closable="true"
  >
    <n-card
        style="width: 600px"
        title="添加分类"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template  #header-extra>
        <n-button type="error"  @click="$emit('checkShowModal',false)">X</n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
  import {defineProps,ref,defineEmits} from "vue";

  const model = ref({
    name: null,
  });
  const rules = {
    name: [
      {
        required: true,
        message: "请输入名称"
      }
    ],
  };
  const emit = defineEmits(["checkShowModal"]);
  const props = defineProps({
    showModal: {
      type:Boolean,
      default: false,
    }
  })
</script>

<style scoped>

</style>