// 图片相关接口
import request from '@/utils/request'

/**
 * 获取轮播图
 */
export const getHomeData = () => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'index/getbannerlist',
      userPKey: 1587654526000,
      userPMain: 21,
      userPBase: 592961540,
      userUser: 'uK850P2re6'
    }
  })
}
