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
export const getEikon = (option) => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'index/indexatlaslist',
      page: option.page,
      orientation: option.type,
      userId: '',
      userPKey: option.userPKey,
      userPMain: option.userPMain,
      userPBase: option.userPBase,
      userUser: option.userUser
    }
  })
}

// 获取P淘商城数据
export const getTaobao = (page, content) => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'tao/taolist',
      page,
      q: content,
      userPKey: 1587900024000,
      userPMain: 87,
      userPBase: 143150779,
      userUser: 'pqP500rnes19'
    }
  })
}
