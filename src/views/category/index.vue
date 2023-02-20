<template>
  <div>
    <div class="h-24 w-full bg-white p-3 mb-6">
      <div style="text-align: left">
        <span class="text-slate-400 pr-1">首页</span>/<span class="pl-1 font-bold">分类管理</span>
        <div class="pt-3 text-xl text-black font-bold">
          分类管理
        </div>
      </div>
    </div>
    <div class="content px-4">
      <span class="ml-auto" style=""><NButton type="info" @click="showModal = true" >添加分类</NButton></span>
      <div class="mt-4 bg-white">
        <div>
          <n-data-table
              ref="table"
              :columns="columns"
              :data="data"
              :loading="loading"
          />
        </div>
      </div>
      <AddCategory :showModal="showModal" @checkShowModal="checkShowModal" @reloadTable="reload"></AddCategory>
<!--      <EditCategory v-if="showEditModal" :dataName="data"  :category_id="category_id" :showModal="showEditModal" @checkShowModal="checkEditModal" @reloadTable="reload"></EditCategory>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,h,onMounted} from "vue";
import {categoryList} from "@/api/category";
import {NButton,useLoadingBar} from "naive-ui"
import AddCategory from "./components/AddCategory.vue"

const showEditModal = ref({})
const category_id = ref(0)
const data: any = ref([])
const loading = ref(true)
const loadingBar = useLoadingBar();
const showModal = ref(false);
const checkEditModal = (show: boolean) => {
  showEditModal.value = false
}
const checkShowModal = (status: any)=>{
  showModal.value = status;
};
onMounted(() => {
  getCategoryList({type:"all"});
})

const getCategoryList = (parmas: any) => {
  categoryList(parmas).then(res=> {
    console.log(res)
    data.value = res
    loadingBar.finish();
    loading.value = false
  }).catch(()=>{
    loadingBar.error();
  })
}


const columns = [
  {
    title: '分类名称',
    key: 'name',
    width: '60%',
  },
  {
    title: '分类排序',
    key: 'seq',
    width: '10%',
    align:"center",
    sorter: (row1: any, row2: any) => row1.age - row2.age
  },
  {
    title: '操作',
    key: 'address',
    align:"center",
    render(row: any){
      return h(NButton,{
        size:"small",
        color:"#1890ff",
        strong:true,
        onClick:()=>{
          category_id.value = row.id;
          showEditModal.value = true;
        }
      },"修改");
    }
  }
]
const reload = ()=>{
  getCategoryList({type:"all"});
};
</script>

<style scoped>

</style>