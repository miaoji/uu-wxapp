// put api list here
const baseUrl = 'http://test.wwlin.cn/api'

// 所有接口列表如下：
const getHomeInfo = `${baseUrl}/home`;
const getTourlineDetail = id => {
	return `${baseUrl}/tourline/${id}`;
}
const searchByKeyword = q => {
	return `${baseUrl}/tourline/search?q=${q}`;
}

module.exports = {
  getHomeInfo: getHomeInfo,
  getTourlineDetail: getTourlineDetail,
  searchByKeyword: searchByKeyword,
}