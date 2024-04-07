import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
Vue.use(VueRouter)

const routes = [
    // 主页
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            index: 0,
            title: '首页'
        }
    },

    // 登录
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            index: 0,
            title: '登录'
        }
    },

    
    // 忘记密码
    {
        path: '/forgot',
        name: "forgot",
        component: forgot,
        meta: {
            index: 0,
            title: '忘记密码'
        }
    },

    // 修改密码
    {
        path: '/user/password',
        name: "password",
        component: () => import("../views/user/password.vue"),
        meta: {
            index: 0,
            title: '修改密码'
        }
    },

    // 视频播放页
    {
        path: "/media/video",
        name: "video",
        component: () => import('../views/media/video.vue'),
        meta: {
            index: 0,
            title: "视频"
        }
    },

    // 音频播放页
    {
        path: "/media/audio",
        name: "audio",
        component: () => import('../views/media/audio.vue'),
        meta: {
            index: 0,
            title: "音频"
        }
    },

    
    
                // 轮播图路由
        {
            path: '/slides/table',
            name: 'slides_table',
            component: () => import('../views/slides/table.vue'),
            meta: {
                index: 0,
                title: '轮播图列表'
            }
        },
        {
            path: '/slides/view',
            name: 'slides_view',
            component: () => import('../views/slides/view.vue'),
            meta: {
                index: 0,
                title: '轮播图详情'
            }
        },
                    // 文章路由
            {
                path: '/article/table',
                name: 'article_table',
                component: () => import('../views/article/table.vue'),
                meta: {
                    index: 0,
                    title: '文章列表'
                }
            },
            {
                path: '/article/view',
                name: 'article_view',
                component: () => import('../views/article/view.vue'),
                meta: {
                    index: 0,
                    title: '文章详情'
                }
            },

            // 文章分类路由
            {
                path: '/article_type/table',
                name: 'article_type_table',
                component: () => import('../views/article_type/table.vue'),
                meta: {
                    index: 0,
                    title: '文章分类列表'
                }
            },
            {
                path: '/article_type/view',
                name: 'article_type_view',
                component: () => import('../views/article_type/view.vue'),
                meta: {
                    index: 0,
                    title: '文章分类详情'
                }
            },
                // 敏感词路由
        {
            path: '/sensitive_vocabulary/table',
            name: 'sensitive_vocabulary_table',
            component: () => import('../views/sensitive_vocabulary/table.vue'),
            meta: {
                index: 0,
                title: '敏感词列表'
            }
        },
        {
            path: '/sensitive_vocabulary/view',
            name: 'sensitive_vocabulary_view',
            component: () => import('../views/sensitive_vocabulary/view.vue'),
            meta: {
                index: 0,
                title: '敏感词详情'
            }
        },
            
    
    
            // 公告路由
        {
            path: '/notice/table',
            name: 'notice_table',
            component: () => import('../views/notice/table.vue'),
            meta: {
                index: 0,
                title: '通知公告列表'
            }
        },
        {
            path: '/notice/view',
            name: 'notice_view',
            component: () => import('../views/notice/view.vue'),
            meta: {
                index: 0,
                title: '通知公告详情'
            }
        },
                        {
            path: '/goods_type/table',
            name: 'goods_type_table',
            component: () => import('../views/goods_type/table.vue'),
            meta: {
                index: 0,
                title: '商品分类列表'
            }
        },
        {
            path: '/goods_type/view',
            name: 'goods_type_view',
            component: () => import('../views/goods_type/view.vue'),
            meta: {
                index: 0,
                title: '商品分类详情'
            }
        },

        // 订单路由
        {
            path: '/order/table',
            name: 'order_table',
            component: () => import('../views/order/table.vue'),
            meta: {
                index: 0,
                title: '订单列表'
            }
        },
        {
            path: '/order/view',
            name: 'order_view',
            component: () => import('../views/order/view.vue'),
            meta: {
                index: 0,
                title: '订单详情'
            }
        },
                // 订单配送路由
        {
            path: '/logistics_delivery/table',
            name: 'logistics_delivery_table',
            component: () => import('../views/logistics_delivery/table.vue'),
            meta: {
                index: 0,
                title: '订单配送列表'
            }
        },
        {
            path: '/logistics_delivery/view',
            name: 'logistics_delivery_view',
            component: () => import('../views/logistics_delivery/view.vue'),
            meta: {
                index: 0,
                title: '订单配送详情'
            }
        },
                    
            // 评论路由
        {
            path: '/comment/table',
            name: 'comment_table',
            component: () => import('../views/comment/table.vue'),
            meta: {
                index: 0,
                title: '评论列表'
            }
        },
        {
            path: '/comment/view',
            name: 'comment_view',
            component: () => import('../views/comment/view.vue'),
            meta: {
                index: 0,
                title: '评论详情'
            }
        },
        
            // 普通用户路由
        {
            path: '/regular_users/table',
            name: 'regular_users_table',
            component: () => import('../views/regular_users/table.vue'),
            meta: {
                index: 0,
                title: '普通用户列表'
            }
        },
        {
            path: '/regular_users/view',
            name: 'regular_users_view',
            component: () => import('../views/regular_users/view.vue'),
            meta: {
                index: 0,
                title: '普通用户详情'
            }
        },
            // 鲜花商城路由
        {
            path: '/flower_mall/table',
            name: 'flower_mall_table',
            component: () => import('../views/flower_mall/table.vue'),
            meta: {
                index: 0,
                title: '鲜花商城列表'
            }
        },
        {
            path: '/flower_mall/view',
            name: 'flower_mall_view',
            component: () => import('../views/flower_mall/view.vue'),
            meta: {
                index: 0,
                title: '鲜花商城详情'
            }
        },
            // 鲜花仓库路由
        {
            path: '/flower_warehouse/table',
            name: 'flower_warehouse_table',
            component: () => import('../views/flower_warehouse/table.vue'),
            meta: {
                index: 0,
                title: '鲜花仓库列表'
            }
        },
        {
            path: '/flower_warehouse/view',
            name: 'flower_warehouse_view',
            component: () => import('../views/flower_warehouse/view.vue'),
            meta: {
                index: 0,
                title: '鲜花仓库详情'
            }
        },
            // 入库信息路由
        {
            path: '/storage_information/table',
            name: 'storage_information_table',
            component: () => import('../views/storage_information/table.vue'),
            meta: {
                index: 0,
                title: '入库信息列表'
            }
        },
        {
            path: '/storage_information/view',
            name: 'storage_information_view',
            component: () => import('../views/storage_information/view.vue'),
            meta: {
                index: 0,
                title: '入库信息详情'
            }
        },
            // 鲜花种类路由
        {
            path: '/flower_types/table',
            name: 'flower_types_table',
            component: () => import('../views/flower_types/table.vue'),
            meta: {
                index: 0,
                title: '鲜花种类列表'
            }
        },
        {
            path: '/flower_types/view',
            name: 'flower_types_view',
            component: () => import('../views/flower_types/view.vue'),
            meta: {
                index: 0,
                title: '鲜花种类详情'
            }
        },
    
    // 用户路由
    {
        path: '/user/table',
        name: 'user_table',
        component: () => import('../views/user/table.vue'),
        meta: {
            index: 0,
            title: '用户列表'
        }
    },
    {
        path: '/user/view',
        name: 'user_view',
        component: () => import('../views/user/view.vue'),
        meta: {
            index: 0,
            title: '用户详情'
        }
    },
    {
        path: '/user/info',
        name: 'user_info',
        component: () => import('../views/user/info.vue'),
        meta: {
            index: 0,
            title: '个人信息'
        }
    },
    // 用户组路由
    {
        path: '/user_group/table',
        name: 'user_group_table',
        component: () => import('../views/user_group/table.vue'),
        meta: {
            index: 0,
            title: '用户组列表'
        }
    },
    {
        path: '/user_group/view',
        name: 'user_group_view',
        component: () => import('../views/user_group/view.vue'),
        meta: {
            index: 0,
            title: '用户组详情'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let token = to.query.token;
    if (token) {
        $.db.set("token", token, 120);
    }
    next();
})

router.afterEach((to, from, next) => {
    let title = "鲜花在线销售网站-admin";
    document.title = title;
})

export default router
