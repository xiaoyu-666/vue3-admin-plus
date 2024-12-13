/**
 * @description 通用页面通用数据仓库
 */
import { DataStoreModuleType } from '/#/store'
export const dataStore = defineStore('data', {
  state: (): DataStoreModuleType => ({
    roleList: [],
    departmentList: [],
    postList: [],
  }),
  getters: {
    getRoleList: (state) => state.roleList,
    getDepartmentList: (state) => state.departmentList,
    getPostList: (state) => state.postList,
  },
  actions: {
    setRoleList(data: any[]) {
      this.roleList = data
    },
    clearRoleList() {
      this.roleList = []
    },
    setDepartmentList(data: any[]) {
      this.departmentList = data
    },
    clearDepartmentList() {
      this.departmentList = []
    },
    setPostList(data: any[]) {
      this.postList = data
    },
    clearPostList() {
      this.postList = []
    },
  },
})
