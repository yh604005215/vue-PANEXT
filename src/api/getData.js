// 图片相关接口
import request from '@/utils/request'

/**
 * 获取首页数据
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

/**
 * 获取插图精选页数据
 */
export const getPiclndex = () => {
  return request({
    url: '/hqcc/apiH5.php?r=index/getbannerlist&indexType=2&userPKey=1587783812000&userPMain=76&userPBase=163857978&userUser=iTuK880P7re5',
    method: 'GET'
  })
}

// 获取插图
export const getEikon = (orientation, page) => {
  return request({
    url: '/hqcc/apiH5.php?',
    method: 'GET',
    params: {
      r: 'index/indexatlaslist',
      page,
      orientation,
      userId: '',
      userPKey: 1587806628000,
      userPMain: 66,
      userPBase: 188687656,
      userUser: 'potnrey88sauB86'
    }
  })
}
