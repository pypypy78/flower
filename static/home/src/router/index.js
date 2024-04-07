import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 媒体视频
	{
		path: '/user_center/index',
		name: 'user_center_index',
		component: () => import('../views/user_center/index.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},


	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue')
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue')
	},

	

	// 商品路由
	{
		path: '/goods/list',
		name: 'goods_list',
		component: () => import('../views/goods/list.vue')
	},
	{
		path: '/goods/details',
		name: 'goods_details',
		component: () => import('../views/goods/details.vue')
	},
		{
		path: '/pay/detail',
		name: 'pay_detail',
		component: () => import('../views/pay/details.vue')
	},
	// 购物车路由
	{
		path: '/cart/list',
		name: 'cart_list',
		component: () => import('../views/cart/list.vue')
	},
	// 订单路由
	{
		path: '/order/list',
		name: 'order_list',
		component: () => import('../views/order/list.vue')
	},
	{
		path: '/order/details',
		name: 'order_details',
		component: () => import('../views/order/details.vue')
	},
		// 物流配送表格路由
	{
		path: '/logistics_delivery/table',
		name: '/logistics_delivery_table',
		component: () => import('../views/logistics_delivery/table.vue')
	},
	// 物流配送详情路由
	{
		path: '/logistics_delivery/view',
		name: '/logistics_delivery_view',
		component: () => import('../views/logistics_delivery/view.vue')
	},
	// 收货地址路由
	{
		path: '/user/address',
		name: 'address',
		component: () => import('../views/user/address.vue')
	},
	{
		path: '/user/address_edit',
		name: 'address_edit',
		component: () => import('../views/user/address_edit.vue')
	},
	

	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	// 普通用户表格路由
	{
		path: '/regular_users/table',
		name: '/regular_users_table',
		component: () => import('../views/regular_users/table.vue')
	},
	// 普通用户详情路由
	{
		path: '/regular_users/view',
		name: '/regular_users_view',
		component: () => import('../views/regular_users/view.vue')
	},
	
	
		// 鲜花商城表格路由
	{
		path: '/flower_mall/table',
		name: '/flower_mall_table',
		component: () => import('../views/flower_mall/table.vue')
	},
	// 鲜花商城详情路由
	{
		path: '/flower_mall/view',
		name: '/flower_mall_view',
		component: () => import('../views/flower_mall/view.vue')
	},
	
		// 鲜花商城列表路由
	{
		path: '/flower_mall/list',
		name: '/flower_mall_list',
		component: () => import('../views/flower_mall/list.vue')
	},
	
		// 鲜花商城详情路由
	{
		path: '/flower_mall/details',
		name: '/flower_mall_details',
		component: () => import('../views/flower_mall/details.vue')
	},
		// 鲜花仓库表格路由
	{
		path: '/flower_warehouse/table',
		name: '/flower_warehouse_table',
		component: () => import('../views/flower_warehouse/table.vue')
	},
	// 鲜花仓库详情路由
	{
		path: '/flower_warehouse/view',
		name: '/flower_warehouse_view',
		component: () => import('../views/flower_warehouse/view.vue')
	},
	
	
		// 入库信息表格路由
	{
		path: '/storage_information/table',
		name: '/storage_information_table',
		component: () => import('../views/storage_information/table.vue')
	},
	// 入库信息详情路由
	{
		path: '/storage_information/view',
		name: '/storage_information_view',
		component: () => import('../views/storage_information/view.vue')
	},
	
	
		// 鲜花种类表格路由
	{
		path: '/flower_types/table',
		name: '/flower_types_table',
		component: () => import('../views/flower_types/table.vue')
	},
	// 鲜花种类详情路由
	{
		path: '/flower_types/view',
		name: '/flower_types_view',
		component: () => import('../views/flower_types/view.vue')
	},
	
	
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "鲜花在线销售网站-home";
	document.title = title;
	document.logo = "鲜花在线销售网站"
})

export default router
