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

// 插图分类列表数据
export const getPictureClass = () => {
  return request({
    url: '/hqcc/apiH5.php?r=group/grouplist&token=&userPKey=1587905511000&userPMain=18&userPBase=691897826&userUser=tuK850P1re9',
    method: 'GET'
  })
}

// 画师排行榜数据
export const getPainterRank = (page) => {
  return request({
    url: `/hqcc/apiH5.php?r=painter/painterfocusrank&token=&userId=&page=${page}&userPKey=1588125474000&userPMain=35&userPBase=355882459&userUser=tud1P550rnes89`,
    method: 'GET'
  })
}

// 动漫分类数据
export const getThemeClass = () => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'class/videoclassconfig',
      userPKey: 1587974396000,
      userPMain: 33,
      userPBase: 377415186,
      userUser: 'uK830P3re1'
    }
  })
}

// 视频列表数据
export const getVideoList = (option) => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'class/classlist',
      classId: option.classId,
      year: option.year,
      page: option.page,
      userPKey: option.userPKey,
      userPMain: option.userPMain,
      userPBase: option.userPBase,
      userUser: option.userUser
    }
  })
}

// 视频数据
export const getVideoInfo = () => {
  return request({
    url: '/hqcc/apiH5.php?r=video/videoinfo&videoId=6931&sourceId=59813&userId=&userPKey=1588128689000&userPMain=26&userPBase=479073511&userUser=vI1c9suK860P2re7',
    method: 'GET'
  })
}

export const getVideo = () => {
  return request({
    url: '/hqcc/apiH5.php?r=video/videosource&sourceId=59813&userPKey=1588129342000&userPMain=37&userPBase=336646389&userUser=se8ey12sauB33',
    method: 'GET'
  })
}

// 搜索页动漫数据
export const getSearchVideo = (val) => {
  return request({
    url: `/hqcc/apiH5.php?r=video/videosearch&searchText=${val}&userPKey=1588041561000&userPMain=89&userPBase=139946381&userUser=shuK850P8re4`,
    method: 'GET'
  })
}

export const getSearchPiclndex = (val) => {
  return request({
    url: `/hqcc/apiH5.php?r=search/searchajax&type=3&searchText=${val}&userId=&page=1&userPKey=1588042193000&userPMain=61&userPBase=204184145&userUser=tshud1P520rnes15`,
    method: 'GET'
  })
}

// 往期番剧页数据
export const getCollection = (id) => {
  return request({
    url: '/hqcc/apiH5.php',
    method: 'GET',
    params: {
      r: 'video/videocollection',
      collectId: id,
      userPKey: 1588082608000,
      userPMain: 99,
      userPBase: 125813635,
      userUser: 'ccuK860P9re1'
    }
  })
}

//  画师数据
export const getPainter = (id, page) => {
  return request({
    url: `/hqcc/apiH5.php?r=painter/painterindex&id=${id}&token=&page=${page}&userPKey=1588168449000&userPMain=41&userPBase=303810320&userUser=itpuK840P4re1`,
    method: 'GET'
  })
}

// 社区插图数据
export const getGroup = () => {
  return request({
    url: '/hqcc/apiH5.php?r=group/groupindex&index=6&userPKey=1588212127000&userPMain=40&userPBase=311414142&userUser=i6P520rnes42',
    method: 'GET'
  })
}

export const getGroupEikon = (page) => {
  return request({
    url: `/hqcc/apiH5.php?r=group/groupnewatlas&index=6&page=${page}&userToken=&userPKey=1588214900000&userPMain=64&userPBase=194634178&userUser=i61TuK890P6re3`,
    method: 'GET'
  })
}

// 插图详情数据
export const getDetail = () => {
  return request({
    url: '/hqcc/apiH5.php?r=detail/getatlasbase&id=98896&token=&userPKey=1588230930000&userPMain=1&userPBase=12456713176&userUser=i9er130eies51',
    method: 'GET'
  })
}

export const getPicture = () => {
  return request({
    url: '/hqcc/apiH5.php?r=detail/getatlasimglist&id=98896&uniqueKey=9437e991334dd188de927d76f62b1fcb&token=&userId=&userPKey=1588233664000&userPMain=30&userPBase=415224487&userUser=i9qye382ffkese86u',
    method: 'GET'
  })
}

export const getRecommend = () => {
  return request({
    url: '/hqcc/apiH5.php?r=detail/getpainterrelationatlas&id=98896&userPKey=1588236723000&userPMain=49&userPBase=254219563&userUser=i9r130eisa46',
    method: 'GET'
  })
}

export const getLikeness = () => {
  return request({
    url: '/hqcc/apiH5.php?r=detail/getpainterrelationatlas&id=98896&userPKey=1588237184000&userPMain=24&userPBase=519031759&userUser=i9r130eisa95',
    method: 'GET'
  })
}

// 登录页图片数据
export const getLoginPicture = () => {
  return request({
    url: '/hqcc/apiH5.php?r=login/getbackground&userPKey=1588238869000&userPMain=72&userPBase=173010770&userUser=uK880P7re1',
    method: 'GET'
  })
}
