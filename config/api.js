// put api list here
const baseUrl = 'http://test.wwlin.cn/api'

// 所有接口列表如下：
const getHomeInfo = `${baseUrl}/home`;
const getTourlineDetail = (id) => {
	return `${baseUrl}/tourline/${id}`
}

module.exports = {
  getHomeInfo: getHomeInfo,
  getTourlineDetail: getTourlineDetail,
}