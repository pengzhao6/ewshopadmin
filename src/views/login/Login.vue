<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo" m-0 >
          <img src="@/assets/images/logo.png" style="margin: auto">
        </div>
      </div>
        <div class="view-account-form">
          <n-form
              ref="formRef"
              label-placement="left"
              :model="formInline"
              :rules="rules"
              size="large"
          >
            <n-form-item path="username">
              <n-input v-model:value="formInline.username" placeholder="super@a.com" >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline />
                </n-icon>
              </template>
              </n-input>
            </n-form-item>

            <n-form-item path="password">
              <n-input
                  v-model:value="formInline.password"
                  type="password"
                  showPasswordOn="click"
                  placeholder="密码:123123"
              >
                <template #prefix>
                  <n-icon size="18" color="#808695">
                    <LockClosedOutline />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item>
              <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block>
                登录
              </n-button>
            </n-form-item>
          </n-form>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {reactive,ref} from "vue";
  import { PersonOutline, LockClosedOutline} from "@vicons/ionicons5";
  import {useUserStore} from "@/store/user";


  const formRef = ref()
  const loading = ref(false)
  const userStore = useUserStore()

  interface FormState {
    email: string;
    password: string;
  }
  const formInline = reactive({
    username: 'super@a.com',
    password: '123123'

  })
  const rules = {
    username: {required: true,message: '请输入用户名',trigger: "blur"},
    password: {required: true,message: '请输入密码',trigger: "blur"}
  }
  const handleSubmit =() => {
    // console.log(11)
    //表单验证
    formRef.value.validate(async (errors: any) => {
      console.log(!errors)
      if (!errors) {
        const {username,password} = formInline
        loading.value = true
        //调整数据结构
        const params: FormState = {
          email: username,
          password
        };
        try {
          console.log(params)
          userStore.login(params).then(_res => {
            loading.value = false
            console.log(_res)
          }).catch(()=>{
            loading.value = false
          })
        }finally {
          loading.value = false
        }
      }else {

      }
    })
  }
</script>

<style lang="less" scoped>
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  &-container {
    flex: 1;
    padding: 32px 12px;
    max-width: 384px;
    min-width: 320px;
    margin: 0 auto;
  }

  &-top {
    padding: 32px 0;
    text-align: center;

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  &-other {
    width: 100%;
  }

  .default-color {
    color: #515a6e;

    .ant-checkbox-wrapper {
      color: #515a6e;
    }
  }
}

@media (min-width: 768px) {
  .view-account {
    background-image: url('../../assets/images/login.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }

  .page-account-container {
    padding: 32px 0 24px 0;
  }
}
</style>