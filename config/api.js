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
const getShoppintCart = `${baseUrl}/tourline/cart`;
const getTourlines = (range, pageSize, pageNo) => {
	return `${baseUrl}/tourline?range=${range}&pageSize=${pageSize}&pageNo=${pageNo}`
}
const getVoucher = `${baseUrl}/voucher/3`;   // 领取优惠券

module.exports = {
  getHomeInfo: getHomeInfo,
  getTourlineDetail: getTourlineDetail,
  searchByKeyword: searchByKeyword,
  getShoppintCart: getShoppintCart,
  getTourlines: getTourlines,
  getVoucher: getVoucher,
}